<!-- 歌单详情页 -->
<template>
  <!--  @after-enter="refreshScroll" -->
  <transition name="left-slide">
    <div class="disc-detail-wrap">
      <div class="disc-detail">
        <div class="header">
          <music-title :title="data.title"></music-title>
        </div>
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
        <scroll class="song-list-wrap" ref="BScroll" :probeType="3" :listenScroll="true" @scroll="onScroll" :class="isMiniPlayShow?'showMiniPlayer':''">
          <div class="song-list">
            <div v-for="(l,i) in songs" :key="i" @click="playMusic(l,i)" class="song-list-item">
              <music-list :singer="l.singer" :name="l.name"></music-list>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import { getSongList } from '../api/recommend.js'
import { searchSong } from '../api/song.js'
import musicTitle from '../components/musicTitle/musicTitle'
import playAll from '../components/play-all/play-all.vue'
import musicList from '../components/musicList/musicList'
import scroll from '../components/scroll/scroll.vue'
import { prefixStyle } from '../common/js/utils.js'
import { mapMutations, mapGetters } from 'vuex'
import {playMusicMixin} from '../common/js/mixins.js'
const transform = prefixStyle('transform')
const RESERVED_HEIGHT = 40
export default {
  mixins: [playMusicMixin],
  data() {
    return {
      data: '',
      songs: [],
      scroll: Object,
      scrollY: 0
    }
  },

  components: {
    musicTitle,
    playAll,
    musicList,
    scroll
  },

  methods: {
    onScroll: function(pos) {
      this.scrollY = pos.y
    },
    ...mapMutations({
      setSongList: 'SET_SONG_LIST'
    }),
    beforeEnter() {
      let discid = this.$route.params.id
      // 歌单传来的id是数字
      if (Number(discid)) {
        getSongList(discid)
          .then(res => {
            this.data = res.data
            this.songs = res.data.songs
            this.setSongList(res.data.songs)
          })
          .catch(err => {
            console.log('getSongList:', err)
          })
      } else {
        // 传来歌手名就搜索歌手并且显示
        let singer = discid.split('-')[0]
        let mid = discid.split('-')[1]
        searchSong(singer).then(res => {
          let img = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
          this.log(this.$route.query)
          this.data = {title: singer, logo: img}
          this.songs = res.data
          this.setSongList(res.data)
        }).catch(err => {
          this.log('discDetail/searchSong:', err)
        })
      }
    },
    refreshScroll() {
      this.$refs.BScroll.refresh()
    }
  },

  computed: {
    ...mapGetters([
      'isMiniPlayShow'
    ])
  },
  created() {
    // 用于通过链接分享歌单
    this.beforeEnter()
  },
  mounted() {
    this.imageHeight = this.$refs.bgImg.clientHeight
    this.minTransalteY = -(this.imageHeight - RESERVED_HEIGHT)
    // this.$refs.BScroll.style.top = `${this.imageHeight}px`
    // let self = this
    // TODO:todo:srcoll组件已封装好,现在可以将下面代码改为插件
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     /* eslint-disable no-new */
    //     self.scroll = new BScroll(this.$refs.BScroll, {
    //       probeType: 3,
    //       bounce: {
    //         top: true,
    //         bottom: true
    //       }
    //     })
    //     self.scroll.on('scroll', this.onScroll)
    //   }, 10)
    // })
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
    },
    isMiniPlayShow() {
      if (this.isMiniPlayShow) {
        this.$nextTick(() => {
          this.$refs.BScroll.refresh()
        })
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.disc-detail-wrap
  full-page()
  z-index 1
  &.left-slide-enter-active, &.left-slide-leave-active
    transition all .3s
  &.left-slide-enter, &.left-slide-leave-to
    transform translate3d(100%, 0, 0)
  .disc-detail
    full-page()
    .header
      position absolute
      width 100%
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
        width $container-width
        margin 0 auto
        padding 20px 0
.showMiniPlayer
  bottom 10% !important
  height 50% !important
</style>
