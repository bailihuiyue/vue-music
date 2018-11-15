<!-- 歌单详情页 -->
<template>
  <div class="disc-detail-wrap">
    <transition name="left-slide">
      <div class="disc-detail">
        <music-title :title="data.title"></music-title>
        <!-- TODO:tip:大佬说这是一个很经典的自动撑开背景的写法,
            原理是让一个图片和div中的背景图片大小一样,
            img撑开了外层div,内层div也会跟外层大小 -->
        <div class="bg-img" ref="bgImg">
          <div class="mask"></div>
          <img :src="data.logo">
          <div class="play-all-wrap" ref="playAll">
            <play-all :gold="true"></play-all>
          </div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <div class="song-list-wrap" v-show="songs.length>0" ref="BScroll">
          <div class="song-list">
            <div v-for="(l,i) in songs" :key="i" @click="playMusic(l.id)" class="song-list-item">
              <music-list :singer="l.singer" :name="l.name"></music-list>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSongList } from '../api/recommend.js'
import musicTitle from '../components/musicTitle/musicTitle'
import playAll from '../components/play-all/play-all.vue'
import musicList from '../components/musicList/musicList'
import BScroll from 'better-scroll'
import { prefixStyle } from '../common/js/utils.js'
import { songDetail } from '../api/song.js'
const transform = prefixStyle('transform')
const RESERVED_HEIGHT = 40
export default {
  data() {
    return {
      data: Object,
      bg: '',
      songs: [],
      scroll: Object,
      scrollY: 0
    }
  },

  components: {
    musicTitle,
    playAll,
    musicList,
    BScroll
  },

  methods: {
    onScroll: function(pos) {
      this.scrollY = pos.y
    },
    playMusic(id) {
      songDetail(id).then(res => {
        this.$router.push({path: `/playMusic/${id}`, query: { data: res.data }})
      })
    }
  },

  computed: {},
  created() {
    let discid = this.$route.params.id
    getSongList(discid)
      .then(res => {
        this.data = res.data
        this.songs = res.data.songs
        this.bg = { background: `url(${res.data.logo})` }
      })
      .catch(err => {
        console.log('getSongList:', err)
      })
  },
  mounted() {
    this.imageHeight = this.$refs.bgImg.clientHeight
    this.minTransalteY = -(this.imageHeight - RESERVED_HEIGHT)
    // this.$refs.BScroll.style.top = `${this.imageHeight}px`
    let self = this
    this.$nextTick(() => {
      setTimeout(() => {
        /* eslint-disable no-new */
        self.scroll = new BScroll(this.$refs.BScroll, {
          probeType: 3,
          bounce: {
            top: true,
            bottom: true
          }
        })
        self.scroll.on('scroll', this.onScroll)
      }, 10)
    })
  },
  watch: {
    scrollY(newVal) {
      // 向下滚动时scrollY>0,
      if (this.scrollY > 0) {
        // 计算出一个背景图片的放大率,算法:用滚动的大小除以图片整个的高度表示
        let scale =
          (this.scrollY / this.$refs.bgImg.offsetHeight).toFixed(2) * 1 + 1
        this.$refs.bgImg.style[transform] = `scale(${scale})`
      }
      // TODO:learn:如果使用下面这种值判断的方法会导致判断不准确,比如要 a>5这种条件,希望a=6时立即生效,
      // 但是实际过程中有可能会达到a=7甚至a=17,导致结果不准确,出bug
      // 但是使用Math.max()这种方法就很准确
      // if (newVal > this.minTransalteY) {

      // }

      // 控制遮罩层平移的最大高度
      let translateY = Math.max(this.minTransalteY, newVal)
      this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`
      // 当遮罩不再运动时,让背景图盖住多出的scroll内容,并且隐藏playAll按钮,将背景图大小调整为40高度
      if (translateY === this.minTransalteY) {
        this.$refs.bgImg.style.zIndex = 2
        this.$refs.bgImg.style.height = RESERVED_HEIGHT + 'px'
        this.$refs.playAll.style.display = 'none'
      } else {
        this.$refs.bgImg.style.zIndex = 0
        this.$refs.bgImg.style.height = '40%'
        this.$refs.playAll.style.display = ''
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.disc-detail
  full-page()
  &.left-slide-enter-active, &.left-slide-leave-active
    transition all 0.3s
  &.left-slide-enter, &.left-slide-leave-to
    transform translate3d(100%, 0, 0)
  .bg-layer
    position absolute
    top 40%
    height 100%
    background $color-background
    width 100%
  .bg-img
    height 40%
    overflow hidden
    position relative
    transform-origin top
    .mask
      position absolute
      width 100%
      height 100%
      background rgba(0, 0, 0, 0.4)
    img
      width 100%
      object-fit cover
    .play-all-wrap
      position absolute
      bottom 5%
      width 100%
    .desc
      position absolute
      bottom 25%
      padding 20px
      font-size $font-size-small
  .song-list-wrap
    z-index 1
    position absolute
    width 100%
    height 60%
    bottom 0
    .song-list
      width 90%
      margin 0 auto
      padding 20px 0
</style>
