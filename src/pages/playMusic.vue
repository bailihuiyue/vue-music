<!-- 音乐播放页面 -->
<template>
  <div class="player-wrapper">
    <transition name="player" mode="in-out" @afterEnter="afterEnter">
      <div class="play-music" v-show="stateShowPlayMusic">
        <audio ref="audio" id="audio" @canplay="canplay" @ended="ended" @error="error" @timeupdate="timeupdate" :src="songDetail.url">123</audio>
        <div class="background">
          <img class="background-img" :src="songDetail.pic">
        </div>
        <div class="header">
          <music-title :title="songDetail.name" :singer="songDetail.singer" rotate="-90" :isShowPlayer="true"></music-title>
        </div>
        <div class="body" ref="body">
          <swiper dots-position="center" height="100%" :min-moving-distance="20">
            <swiper-item>
              <div class="disc rotate" :class="isPaused?'pause-rotate':''">
                <img :src="songDetail.pic">
              </div>
              <div class="lyric">{{currentLyric.txt}}</div>
            </swiper-item>
            <swiper-item>
              <scroll ref="fullLyricScroll">
                <div class="full-lyric-wrap" ref="fullLyricWrap">
                  <div class='txt' v-for="(lrc,index) in fullLyric" :key="index" :class="currentLyric.lineNum===index?'current':''" ref="lyricLine">{{lrc.txt}}</div>
                </div>
              </scroll>
            </swiper-item>
          </swiper>
        </div>
        <div class="footer" ref='footer'>
          <div class="progress">
            <van-row>
              <van-col span="4">
                <div class="passed-time">{{format(audio.currentTime) }}</div>
              </van-col>
              <van-col span="16">
                <!-- <div class="music-progress-bar-wrap">
                <div class="progress-line" ref="progressLine"></div>
                <div class="passed-progress-line" ref="passedProgressLine" :style="{'width':passedProgressWidth+'px'}"></div>
                <div class="progress-dot" ref="progressDot" :style="{'width': progressDotWidth + 'px', 'height': progressDotWidth + 'px','transform':'translate3d('+progressDotLeft+'px,0,0)'}"></div>
              </div> -->
                <van-slider @touchstart.native="startSlide" @touchend.native="endSlide" @touchmove.native="moveSlide" v-model="sliderValue" @change="slideMusic" bar-height="5px" :step="0.01" />
              </van-col>
              <van-col span="4">
                <!-- left:leave的过去式,并不是左边的意思 -->
                <div class="left-time" v-if="duration">{{format(duration)}}</div>
              </van-col>
            </van-row>
          </div>
          <div class="control-btns">
            <div class="icon-wrap" @click="playMode">
              <i class="icon i-left" :class="'icon-'+statePlayMode"></i>
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
              <i class="icon i-right" :class="toggleFavourite?'icon-favorite':'icon-not-favorite'"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name='mini'>
      <div class="mini-player" v-show="stateShowPlayMusic!==null&&stateShowPlayMusic===false&&stateSongList.length>0" @click="showPlayMusic(true)">
        <div class="disc-mini rotate" :class="isPaused?'pause-rotate':''">
          <img class="img" :src="songDetail.pic">
        </div>
        <div class="song-info-min">
          <div class="name">{{songDetail.name}}</div>
          <div class="singer">{{songDetail.singer}}</div>
        </div>
        <div class="progress-mini">
          <x-circle @click.native.stop="pause" :stroke-width="7" stroke-color="#ffcd32" :trail-width="7" trail-color="rgba(255, 205, 49, 0.5)" :percent="sliderValue">
            <i class="iconfont i-middle" :class="isPaused?'iconfont-play-mini':'iconfont-pause-mini'"></i>
          </x-circle>
        </div>
        <div class="song-list-btn-mini" @click.stop="controlSongListMini">
          <i class="icon-playlist"></i>
        </div>
      </div>
    </transition>
      <popup v-model="isShowSongListMini" height="60%" position="bottom">
        <div class="song-list-mini">
          <div class="control-mini">
              <div class="icon-play-mini" @click="playMode">
                <i class="icon" :class="'icon-'+statePlayMode"></i>
              </div>
              <div class='state-play-mode-txt'>
                {{statePlayMode | statePlayModeTxt}}
              </div>
              <div class="icon-clear-mini" @click.stop="removeSongList">
                <i class="icon-clear"></i>
              </div>
          </div>
            <scroll v-if="isShowSongListMini">
              <div class="song-list-min-scroll-wrap">
                <div v-for="(l,i) in stateSongList" :key="i" @click.stop="removeMusic(l.id,i)" class="song-list-item">
                  <i class="icon-play" :style="l.id===songDetail.id?'':'opacity:0'"></i>
                  <music-list :name="l.name"></music-list>
                  <i class="fav-mini" @click="toggleFavorite(l)" :class="hasFavMin(l)?'icon-favorite':'icon-not-favorite'"></i>
                  <i class="icon-delete"></i>
                </div>
              </div>
          </scroll>
          <play-all text="添加歌曲到队列" ico="icon-add"></play-all>
          <!-- <div class="close-song-list-mini" @click="controlSongListMini">关闭</div> -->
      </div>
      <div class="close-song-list-mini" @click="controlSongListMini">关闭</div>
    </popup>
    <confirm :showConfirm="showConfirm" :hasCancelEvent="true" :hasConfirmEvent="true" confirmText="清空" txt="是否清空播放列表" @onConfirm="onConfirm" @onCancel="onCancel"></confirm>
  </div>
</template>

<script>
import musicTitle from '../components/musicTitle/musicTitle'
import {
  /* getSongDetail, */
  getLyric
} from '../api/song.js'
import { mapState, mapMutations } from 'vuex'
import { Row, Col, Slider } from 'vant'
import { Swiper, SwiperItem, XCircle, Popup } from 'vux'
import Lyric from 'lyric-parser'
import scroll from '../components/scroll/scroll'
import {
  addToStorage,
  fav,
  isInList,
  removeFromStorage,
  getRandom
} from '../common/js/utils.js'
import musicList from '../components/musicList/musicList'
import playAll from '../components/play-all/play-all'
import confirm from '../components/confirm/confirm'
export default {
  components: {
    musicTitle,
    [Row.name]: Row,
    [Col.name]: Col,
    [Slider.name]: Slider,
    Swiper,
    SwiperItem,
    scroll,
    XCircle,
    musicList,
    Popup,
    playAll,
    confirm
  },
  data() {
    return {
      title: '',
      background: {},
      songDetail: {},
      duration: '',
      audio: '',
      isPaused: false,
      currentTime: 0,
      toggleFavourite: false,
      sliderValue: 0,
      // 表示滑块是否在滑动中
      sliding: false,
      // lyricParser 实体类
      lyricParser: '',
      // 旋转盘页面的单行歌词
      currentLyric: {},
      // 右划之后的完整歌词页面
      fullLyric: [],
      lrcLineNum: 0,
      // 让每首歌的canplay只触发一次
      canplayTriggered: false,
      // 歌词列表中可以看见的在中间的那个歌词
      middleLrc: 0,
      isShowSongListMini: false,
      showConfirm: false
    }
  },
  methods: {
    canplay(a) {
      if (!this.canplayTriggered) {
        this.audio.play()
        this.duration = this.audio.duration
        this.isPaused = false
        if (this.lyricParser) {
          this.lyricParser && this.lyricParser.play()
        } else {
          // 处理无歌词情况
          this.log(this.currentLyric)
          this.currentLyric.txt = '此歌曲为没有填词的纯音乐，请您欣赏'
        }
        this.canplayTriggered = true
      }
    },
    format(interval) {
      interval = interval | 0
      const minute = (interval / 60) | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    },
    afterEnter(e) {
      // 计算body的高度
      // let footerTop = this.$refs.footer.getBoundingClientRect().top
      // let bodyTop = this.$refs.body.getBoundingClientRect().top
      // this.$refs.body.style.height = footerTop - bodyTop + 'px'
    },
    _pad(num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    timeupdate(e) {
      if (!this.sliding) {
        // 计算播放完成黄色条的长度
        this.sliderValue = (this.audio.currentTime / this.duration) * 100
      }
    },
    playMode() {
      // order random loop
      switch (this.statePlayMode) {
        case 'order':
          this.setPlayMode('random')
          break
        case 'random':
          this.setPlayMode('loop')
          break
        case 'loop':
          this.setPlayMode('order')
          break
        default:
          this.setPlayMode('order')
      }
    },
    prev() {
      let index = this.changeMusicOrder(false)
      this.changeMusicIndex(index)
    },
    next() {
      let index = this.changeMusicOrder(true)
      this.changeMusicIndex(index)
    },
    pause() {
      this.isPaused = !this.isPaused
      if (this.isPaused) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
      this.lyricParser && this.lyricParser.togglePlay()
    },
    ended() {
      this.next()
    },
    error() {
      this.$toast('版权要求,该歌曲无法播放,即将切换下一首~~')
      let self = this
      setTimeout(() => {
        self.next()
      }, 500)
    },
    toggleFavorite(songDetail) {
      debugger
      let sd
      if (songDetail) {
        sd = songDetail
      } else {
        sd = this.songDetail
      }
      if (isInList(fav, sd)) {
        removeFromStorage(fav, sd)
        !songDetail && (this.toggleFavourite = false)
      } else {
        addToStorage(fav, sd)
        !songDetail && (this.toggleFavourite = true)
      }
    },
    startSlide(e) {
      this.sliding = true
    },
    endSlide(e) {
      this.sliding = false
    },
    moveSlide(e) {
      // TODO:question:touchmove无法执行事件代理?上面的startSlide当触摸到小点的时候是
      // 可以触发的,但是这个方法却无法触发
      // debugger
      // let all = document.getElementsByClassName('van-slider')[0].offsetWidth
      // let passed = document.getElementsByClassName('van-slider__bar')[0].offsetWidth
      // this.audio.currentTime = this.duration * passed / all
    },
    slideMusic(percent) {
      this.audio.currentTime = (this.duration * percent) / 100
      this.lyricParser && this.lyricParser.seek(this.audio.currentTime * 1000)
      // 拖动播放条之后自动播放
      this.isPaused = false
    },
    ...mapMutations({
      setCurrnetSongIndex: 'SET_CURRENT_SONG_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      showPlayMusic: 'SHOW_PLAY_MUSIC',
      emptySongList: 'EMPTY_SONG_LIST'
    }),
    changeMusicOrder(isNext) {
      let index = this.stateCurrentSongIndex
      let length = this.stateSongList.length
      let next = 0
      switch (this.statePlayMode) {
        case 'order':
          if (isNext) {
            if (index >= 0 && index < length - 1) {
              next = index + 1
              return next
            } else {
              this.$toast('已经是最后一首了!')
              return length - 1
            }
          } else {
            if (!isNaN(index) && index > 0) {
              next = index - 1
              return next
            } else {
              this.$toast('已经是第一首了!')
              return 0
            }
          }
        case 'random':
          next = getRandom(0, length - 1)
          return next
        case 'loop':
          next = index
          return next
        default:
          this.log('changeMusicOrder 失败!')
          return index
      }
    },
    changeMusicIndex(index) {
      this.songDetail = this.stateSongList[index]
      this.setCurrnetSongIndex(index)
      if (this.statePlayMode === 'loop') {
        this.audio.currentTime = 0
        this.lyricParser.seek(0)
      }
    },
    getLrc() {
      getLyric(this.songDetail.lrc).then(res => {
        // 处理无歌词情况
        if (res !== '[00:00:00]此歌曲为没有填词的纯音乐，请您欣赏') {
          this.lyricParser = new Lyric(res, this.changeLrc)
          this.fullLyric = this.lyricParser.lines
        } else {
          this.lyricParser = ''
          this.fullLyric = [
            { time: 0, txt: '此歌曲为没有填词的纯音乐，请您欣赏' }
          ]
        }

        // 计算,让正在唱的歌词总是在最中间高亮
        this.$nextTick(() => {
          let wrapHeight = this.$refs.fullLyricWrap.clientHeight
          let number = this.fullLyric.length
          let bodyHeight = this.$refs.body.clientHeight
          let visiblelyrics = Math.floor((bodyHeight / wrapHeight) * number)
          this.middleLrc = Math.round(visiblelyrics / 2)
        })
      })
    },
    changeLrc({ lineNum, txt }) {
      this.currentLyric = { lineNum, txt }
      if (lineNum > this.middleLrc) {
        let lineEl = this.$refs.lyricLine[lineNum - this.middleLrc]
        this.$refs.fullLyricScroll.scrollToElement(lineEl, 1000)
      } else {
        this.$refs.fullLyricScroll.scrollTo(0, 0, 1000)
      }
    },
    controlSongListMini() {
      this.isShowSongListMini = !this.isShowSongListMini
    },
    removeMusic(id, i) {},
    removeSongList() {
      this.showConfirm = true
    },
    onConfirm() {
      this.emptySongList()
    },
    onCancel() {
      this.showConfirm = false
    },
    hasFavMin(detail) {
      return isInList(fav, detail)
    }
  },
  watch: {
    songDetail(newVal, oldVal) {
      // canplay方法只在歌曲可以播放时执行一次,但是设置canplayTriggered的速度比较快,
      // 在歌曲缓冲和歌词加载前就已经设置完成,所以在canplay执行时里面的方法就可以执行了
      this.canplayTriggered = false
      // 换歌之后先把上一次的歌词停了
      this.lyricParser && this.lyricParser.stop()
      // 控制canplayTriggered的权利在获取歌词方法中是因为songDetail是最先改变的,改变之后歌曲就
      // 加载了,这时候再获取歌词,此时歌词和歌曲都没有运行,然后改变canplayTriggered让歌词和歌曲同时play起来,这样就同步了
      if (newVal.id !== oldVal.id) {
        this.getLrc()
      }

      if (isInList(fav, this.songDetail)) {
        this.toggleFavourite = true
        // this.log(isInList(fav, this.stateSongDetail), true)
      } else {
        this.toggleFavourite = false
        // this.log(isInList(fav, this.stateSongDetail), false)
      }
    },
    stateShowPlayMusic(newVal, oldVal) {
      if (this.stateShowPlayMusic) {
        this.songDetail = this.stateSongDetail.pic ? this.stateSongDetail : ''
      }
    }
  },
  computed: {
    ...mapState([
      'stateSongDetail',
      'stateSongList',
      'stateCurrentSongIndex',
      'statePlayMode',
      'stateShowPlayMusic'
    ])
    // ,
    // /TODO:learn:网上好多人说computed传不了参的,实际上用闭包是可以的
    // hasFavMin() {
    //   return function(detail) {
    //     return isInList(fav, detail)
    //   }
    // }
  },
  filters: {
    statePlayModeTxt: function(value) {
      switch (value) {
        case 'order':
          return '顺序播放'
        case 'random':
          return '随机播放'
        case 'loop':
          return '单曲循环'
        default:
          return '数据紊乱^_^'
      }
    }
  },
  created() {
    // 如果store中没有歌曲数据,就通过ajax获取,
    // 目前已经不通过路由获取音乐信息了(但是bug是无法通过地址栏url转发歌曲),所以以下方法不需要了
    // 而且目前不使用v-if改用v-show了,created只初始化一次,因此该方法失效
    // if (!this.songDetail) {
    //   getSongDetail(this.$route.params.mid).then(res => {
    //     this.songDetail = res.data
    //     // 判断歌曲是否被收藏
    //     if (isInList(fav, this.songDetail)) {
    //       this.toggleFavourite = true
    //     }
    //   })
    // }
  },
  mounted() {
    // 缓存audio对象
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
    .header, .footer
      // 贝塞尔曲线,抄的
      transition all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  &.player-enter, &.player-leave-to
    opacity 0
    .header
      transform translate3d(0, -100px, 0)
    .footer
      transform translate3d(0, 100px, 0)
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
  .body
    padding 20px 0
    .vux-slider
      height 100%
      overflow initial
      /deep/ .vux-icon-dot
        height 8px
        width 8px
        background-color $color-text-l
      /deep/ .vux-icon-dot.active
        width 20px
        border-radius 5px
        background $color-text-ll
      /deep/ .vux-indicator
        bottom -25px
      .disc
        width 80%
        margin 20px auto
        border-radius 50%
        overflow hidden
        border 10px solid rgba(255, 255, 255, 0.15)
        rotateDisc()
        img
          width 100%
          height 100%
    .lyric
      text-align center
      font-size $font-size-medium
      color $color-text-l
    .full-lyric-wrap
      .txt
        line-height 32px
        color $color-text-l
        font-size $font-size-medium
        text-align center
        &.current
          color $color-text
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
        display flex
        align-items center
        .van-slider
          background-color $scroll-bar-background
          /deep/ .van-slider__bar
            background-color $color-theme
            .van-slider__button
              border 3px solid $color-text
              background $color-theme
              width 12px
              height 12px
      // .progress-line, .passed-progress-line
      // width 100%
      // height 5px
      // background-color $color-background
      // opacity 0.2
      // vertical-align middle
      // border-radius 100px
      // position relative
      // .passed-progress-line
      // background-color $color-theme
      // opacity 1
      // position relative
      // .progress-line
      // top 5px
      // .progress-dot
      // border 3px solid $color-text
      // border-radius 50%
      // background $color-theme
      // position relative
      // top -11px
      .passed-time, .left-time, .music-progress-bar-wrap
        height $font-size-medium
        line-height $font-size-medium
        font-size $font-size-medium
        width 100%
      .left-time
        text-align right
      .passed-time, .music-progress-bar-wrap
        text-align left
    .control-btns
      width 80%
      margin 20px auto
      display flex
      .icon-wrap
        text-align center
        flex 1
        line-height 35px
        .i-left, .i-right, .i-middle
          color $color-theme
          font-size $icon-font-other
          vertical-align middle
        .i-middle
          font-size $icon-font-middle
.mini-player
  width 100%
  height 60px
  position fixed
  left 0
  bottom 0
  background-color $color-highlight-background
  display flex
  align-items center
  justify-content center
  z-index 3
  .disc-mini
    flex 0 0 40px
    margin 0 10px 0 20px
    rotateDisc()
    .img
      width 100%
      border-radius 50%
  .song-info-min
    display flex
    flex-direction column
    justify-content center
    flex 1
    line-height 20px
    overflow hidden
    .name
      ellipsis()
      margin-bottom 2px
      font-size $font-size-medium
      color $color-text
    .singer
      ellipsis()
      font-size $font-size-small
      color $color-text-d
  .progress-mini
    flex 0 0 30px
    margin-right 15px
    margin-top 4px
    .iconfont
      color $color-theme-d
      font-weight 1000
  .song-list-btn-mini
    flex 0 0 30px
    margin-right 20px
    .icon-playlist
      font-size 30px
      color $color-theme-d
.vux-popup-bottom
  background-color $color-highlight-background
  height 60%
  display flex
  flex-direction column
  .song-list-mini
    flex 1
    height 100%
    width 90%
    margin 0 auto
    display flex
    flex-direction column
    .control-mini
      display:flex
      align-items center
      justify-content center
      margin 20px 0 10px 0
      .icon-play-mini
        color $color-theme-d
        font-size $icon-font-other
        vertical-align middle
        flex 0 0 40px
      .state-play-mode-txt
        color $color-text-l
        flex 1
      .icon-clear-mini
        color $color-text-d
        flex 0 0 20px
    .b-scroll
      flex 1
      .song-list-min-scroll-wrap
        .song-list-item
          display flex
          align-items center
          padding-bottom 5px
          .icon-play,.fav-mini,.icon-delete
            font-size $font-size-small
          .icon-play
            margin-left 2px
            color $color-theme-d
          .music-list
            flex 1
          .fav-mini,.icon-delete
            color $color-theme
            margin-right 5px
          .fav-mini
            margin-right 10px
          /deep/ .text
            color $color-text-d !important
            padding-bottom 0
  .close-song-list-mini
    flex 0 0 50px
    width 100%
    line-height 50px
    background-color $color-background
    text-align center
    display flex
    justify-content center
    color $color-text-l
</style>
