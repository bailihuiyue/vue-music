<!-- 音乐播放页面 -->
<template>
  <transition name="player" mode="in-out">
    <div class="play-music">
      <audio ref="audio" id="audio" @canplay="canplay" :src="songDetail.url">123</audio>
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
                <div class="passed-progress-line" ref="passedProgressLine"></div>
                <div class="progress-dot" ref="progressDot"></div>
              </div>
            </van-col>
            <van-col span="4">
              <!-- left:leave的过去式,并不是左边的意思 -->
              <div class="left-time" v-if="duration">{{format(duration)}}</div>
            </van-col>
          </van-row>
        </div>
        <div class="play-btns"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import musicTitle from '../components/musicTitle/musicTitle'
import { getSongDetail } from '../api/song.js'
import { mapState } from 'vuex'
import { Row, Col } from 'vant'
export default {
  data() {
    return {
      title: '',
      background: Object,
      songDetail: Object,
      duration: '',
      audio: ''
    }
  },
  components: {
    musicTitle,
    [Row.name]: Row,
    [Col.name]: Col
  },

  methods: {
    canplay(a) {
      // this.audio.play()
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
    }
  },

  computed: {
    ...mapState(['stateSongDetail'])
  },
  created() {
    this.songDetail = this.stateSongDetail.pic ? this.stateSongDetail : ''
    console.log(this.songDetail)
    if (!this.songDetail) {
      getSongDetail(this.$route.params.mid).then(res => {
        this.songDetail = res.data
        console.log(this.songDetail)
      })
    }
  },
  mounted() {
    this.audio = this.$refs.audio
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
  &.player-enter, &.player-leave-to
    transform scale(0.5)
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
    bottom 50px
    width 100%
    .dot
      text-align center
      margin 30px
    .progress
      width 80%
      margin auto
      // div
      //   display inline-block
      .van-row
        width 100%
      .progress-line,.passed-progress-line
        width 100%
        height 5px
        background-color $color-background
        opacity 0.2
        vertical-align middle
        border-radius 100px
        // display block
      .passed-progress-line
        background-color $color-theme
        opacity 1
        position relative
        top -5px
      .progress-dot
        width 10px
        height 10px
        border 3px solid $color-text
        border-radius 50%
        background $color-theme
        position relative
        top -13px
      .passed-time, .left-time, .music-progress-bar-wrap
        height $font-size-medium
        line-height $font-size-medium
        font-size $font-size-medium
        text-align center
        width 100%
      .music-progress-bar-wrap
        text-align left
</style>
