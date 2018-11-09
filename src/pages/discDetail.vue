<!-- 歌单详情页 -->
<template>
    <transition name="left-slide">
        <div class="disc-detail">
            <van-row>
                <van-col span="4">
                    <back></back>
                </van-col>
                <van-col span="16">
                    <div class="disc-title">{{data.title}}</div>
                </van-col>
            </van-row>
            <!-- TODO:tip:大佬说这是一个很经典的自动撑开背景的写法,
            原理是让一个图片和div中的背景图片大小一样,
            img撑开了外层div,内层div也会跟外层大小 -->
            <div class="bg-img" ref="bgImg">
                <div class="mask"></div>
                <img :src="data.logo">
                <div class="play-all-wrap">
                    <play-all :gold="true"></play-all>
                </div>
            </div>
            <div class="song-list-wrap" v-show="songs.length>0" ref="BScroll">
                <div class="song-list">
                    <router-link v-for="(l,i) in songs" :key="i" :to="'/recommend/'+l.id" class="song-list-item">
                        <music-list :singer="l.singer" :name="l.name"></music-list>
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { getSongList } from '../api/recommend.js'
import back from '../components/back/back.vue'
import { Tab, Tabs, Row, Col } from 'vant'
import playAll from '../components/play-all/play-all.vue'
import musicList from '../components/musicList/musicList'
import BScroll from 'better-scroll'
import {prefixStyle} from '../common/js/utils.js'
const transform = prefixStyle('transform')
export default {
  data() {
    return {
      data: Object,
      bg: '',
      songs: [],
      scroll: Object
    }
  },

  components: {
    back,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col,
    playAll,
    musicList,
    BScroll
  },

  methods: {
    onScroll: function(pos) {
      if (pos.y > 0) {
        // this.$refs.bgImg.style.height = this.$refs.bgImg.offsetHeight + pos.y + 'px'
        let scale = (pos.y / this.$refs.bgImg.offsetHeight).toFixed(2) * 2 + 1
        this.$refs.bgImg.style[transform] = `scale(${scale})`
        // console.log(this.$refs.bgImg.offsetHeight + pos.y)
      }
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
      }).catch((err) => {
        console.log('getSongList:', err)
      })
  },
  mounted() {
    let self = this
    this.$nextTick(() => {
      setTimeout(() => {
        /* eslint-disable no-new */
        self.scroll = new BScroll(this.$refs.BScroll, {
          probeType: 2
        })
        self.scroll.on('scroll', this.onScroll)
        console.log(this.scroll)
      }, 10)
    })
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.disc-detail
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background-color $color-background
    &.left-slide-enter-active, &.left-slide-leave-active
        transition all 0.3s
    &.left-slide-enter, &.left-slide-leave-to
        transform translateX(100%)
    /deep/ .van-row
        margin-top 10px
        position absolute
        width 100%
        z-index: 1
        .disc-title
            width 100%
            text-align center
            height 30px
            line-height 30px
    .bg-img
        height 40%
        overflow hidden
        position: relative;
        .mask
            position absolute
            width 100%
            height 100%
            background rgba(0, 0, 0, 0.4)
        img
            width 100%
            object-fit cover
            height 100%
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
        position absolute
        width 100%
        bottom 20px
        height 60%
        .song-list
            width 90%
            margin 0 auto
            padding-top 30px
</style>
