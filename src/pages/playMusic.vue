<!-- 音乐播放页面 -->
<template>
  <transition name="player" mode="in-out">
    <div class="play-music">
      <audio ref="audio" id="audio" @canplay="canplay" @ended="ended" @timeupdate="timeupdate" :src="songDetail.url">123</audio>
      <div class="background">
        <img class="background-img" :src="this.songDetail.pic">
      </div>
      <div class="header">
        <music-title :title="songDetail.name" :singer="songDetail.singer" rotate="-90"></music-title>
      </div>
      <div class="body">
        <div class="disc">
          <img :src="this.songDetail.pic">
        </div>
        <div class="lyric">111111111111111111111111111</div>
      </div>
      <div class="footer">
        <div class="dot">滑动的点</div>
        <div class="progress">
          <van-row>
            <van-col span="4">
              <div class="passed-time">{{'0:00'}}</div>
            </van-col>
            <van-col span="16">
              <div class="music-progress-bar-wrap">
                <div class="progress-line" ref="progressLine"></div>
                <div class="passed-progress-line" ref="passedProgressLine" :style="{'width':passedProgressWidth+'px'}"></div>
                <div class="progress-dot" ref="progressDot" :style="{'width': progressDotWidth + 'px', 'height': progressDotWidth + 'px','transform':'translate3d('+progressDotLeft+'px,0,0)'}"></div>
              </div>
            </van-col>
            <van-col span="4">
              <!-- left:leave的过去式,并不是左边的意思 -->
              <div class="left-time" v-if="duration">{{format(duration)}}</div>
            </van-col>
          </van-row>
        </div>
        <div class="control-btns">
           <div class="icon-wrap" @click="playMode">
              <i class="icon-random i-left"></i>
            </div>
            <div class="icon-wrap" @click="prev">
              <i class="icon-prev i-left"></i>
            </div>
            <div class="icon-wrap" @click="pause">
              <i class="icon-pause i-middle" :class="isPaused?'icon-play':'icon-pause'"></i>
            </div>
            <div class="icon-wrap" @click="next">
              <i class="icon-next i-right"></i>
            </div>
            <div class="icon-wrap" @click="toggleFavorite">
              <i class="icon icon-not-favorite i-right"></i>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import musicTitle from '../components/musicTitle/musicTitle'
import { getSongDetail } from '../api/song.js'
import { mapState, mapMutations } from 'vuex'
import { Row, Col } from 'vant'
import { addToStorage, fav } from '../common/js/utils.js'
export default {
  data() {
    return {
      title: '',
      background: Object,
      songDetail: Object,
      duration: '',
      audio: '',
      isPaused: false,
      currentTime: 0,
      // 用来控制播放进度点的大小
      progressDotWidth: 10,
      // 已经播放过的长度(黄色进度条)
      passedProgressWidth: 0,
      // 进度条总长
      passedProgressTotal: 0,
      // 缓存播放点
      progressDotLeft: -5
    }
  },
  components: {
    musicTitle,
    [Row.name]: Row,
    [Col.name]: Col
  },

  methods: {
    canplay(a) {
      this.audio.play()
      this.duration = this.audio.duration
    },
    controlMusic(type) {
      switch (type) {
        case 'play':
          break
        case 'pause':
          break
        case 'next':
          break
        case 'prev':
          break
        default:
      }
    },
    format(interval) {
      interval = interval | 0
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    },
    // afterEnter(e) {
    //   let progressLine = this.$refs.progressLine.getBoundingClientRect()
    //   // this.$refs.progressDot.style[transform] = `translate3d(-${progressLine.left + 5}px,0,0)`
    //   console.log(progressLine)
    // }
    _pad(num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    timeupdate(e) {
      // 计算播放完成黄色条的长度
      this.passedProgressWidth = (this.audio.currentTime / this.duration) * this.passedProgressTotal
      // 计算播放点的位置
      this.progressDotLeft = this.passedProgressWidth - 5
    },
    playMode() {

    },
    prev() {
      let index = this.stateCurrentSongIndex
      if (index && index > 0) {
        this.songDetail = this.stateSongList[index - 1]
        this.setCurrnetSongIndex(index - 1)
      } else {
        this.$toast('已经是第一首了!')
      }
    },
    pause() {
      this.isPaused = !this.isPaused
      if (this.isPaused) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
    },
    next() {
      let index = this.stateCurrentSongIndex
      let length = this.stateSongList.length
      if (index >= 0 && index < length) {
        this.songDetail = this.stateSongList[index + 1]
        this.setCurrnetSongIndex(index + 1)
      } else {
        this.$toast('已经是最后一首了!')
      }
    },
    ended() {
      this.next()
    },
    toggleFavorite() {
      addToStorage(fav, this.songDetail)
    },
    ...mapMutations({
      setCurrnetSongIndex: 'SET_CURRENT_SONG_INDEX'
    })
  },

  computed: {
    ...mapState(['stateSongDetail', 'stateSongList', 'stateCurrentSongIndex'])
  },
  created() {
    this.songDetail = this.stateSongDetail.pic ? this.stateSongDetail : ''
    if (!this.songDetail) {
      getSongDetail(this.$route.params.mid).then(res => {
        this.songDetail = res.data
      })
    }
  },
  mounted() {
    // 缓存audio对象
    this.audio = this.$refs.audio
    // 缓存播放点位置
    this.progressDotLeft = this.$refs.progressDot.left
    // 获取播放进度条长度
    this.passedProgressTotal = this.$refs.progressLine.clientWidth
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.play-music
  full-page()
  &.player-enter-active, &.player-leave-active
    transition all 0.5s
    .header, .footer
      // 贝塞尔曲线,抄的
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  &.player-enter, &.player-leave-to
    opacity: 0
    .header
      transform: translate3d(0, -100px, 0)
    .footer
      transform: translate3d(0, 100px, 0)
  .back
    position absolute
    top 10px
    left 10px
    transform rotate(-90deg)
  .background
    width 100%
    height 100%
    opacity 0.6
    filter blur(20px)
    position absolute
    top 0
    left 0
    z-index -1
    .background-img
      width 100%
      height 100%
  .header, .body
    .disc
      width 80%
      margin 20px auto
      border-radius 50%
      overflow hidden
      border 10px solid rgba(255, 255, 255, 0.15)
      img
        width 100%
        height 100%
    .lyric
      text-align center
      font-size $font-size-medium
      color: $color-text-l
  .footer
    position absolute
    bottom 30px
    width 100%
    .dot
      text-align center
      margin 15px
    .progress
      width 80%
      margin auto
      .van-row
        width 100%
      .progress-line,.passed-progress-line
        width 100%
        height 5px
        background-color $color-background
        opacity 0.2
        vertical-align middle
        border-radius 100px
        position relative
      .passed-progress-line
        background-color $color-theme
        opacity 1
        position relative
      .progress-line
        top 5px
      .progress-dot
        border 3px solid $color-text
        border-radius 50%
        background $color-theme
        position relative
        top -11px
      .passed-time, .left-time, .music-progress-bar-wrap
        height $font-size-medium
        line-height $font-size-medium
        font-size $font-size-medium
        text-align center
        width 100%
      .music-progress-bar-wrap
        text-align left
    .control-btns
      width 80%
      margin 20px auto
      display:flex
      .icon-wrap
        text-align center
        flex 1
        line-height 35px
        .i-left,.i-right,.i-middle
          color $color-theme
          font-size $icon-font-other
          vertical-align middle
        .i-middle
          font-size $icon-font-middle
</style>
