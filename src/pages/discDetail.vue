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
            <div class="bg-img">
                <div class="mask"></div>
                <img :src="data.logo">
                <div class="play-all-wrap">
                    <play-all :gold="true"></play-all>
                </div>
            </div>
            <div class="song-list-wrap" v-if="songs.length>0" >
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
export default {
  data() {
    return {
      data: Object,
      bg: '',
      songs: []
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

  methods: {},

  computed: {},
  created() {
    let discid = this.$route.params.id
    getSongList(discid)
      .then(res => {
        this.data = res.data
        this.songs = res.data.songs
        // console.log(this.data)
        this.bg = { background: `url(${res.data.logo})` }
      })
      .catch(err => {
        console.log('getSongList:', err)
      })
  },
  mounted() {
    /* eslint-disable no-new */
    new BScroll('.song-list-wrap')
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
    padding-top 10px
    background-color $color-background
    &.left-slide-enter-active, &.left-slide-leave-active
        transition all 0.3s
    &.left-slide-enter, &.left-slide-leave-to
        transform translateX(100%)
    /deep/ .van-row
        position absolute
        z-index 1
        width 100%
        .disc-title
            width 100%
            text-align center
            height 30px
            line-height 30px
    .bg-img
        position absolute
        top 0
        width 100%
        z-index 0
        height 40%
        overflow hidden
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
        height 60%
        position absolute
        bottom 0
        width 100%
        padding-top 40px
        .song-list
            width 90%
            margin 0 auto
            margin-top 30px
</style>
