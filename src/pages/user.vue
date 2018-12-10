<!-- 听歌记录页面 -->
<template>
  <transition name="left-slide" mode="out-in">
    <div class="user">
      <van-row>
        <van-col span="4">
          <back></back>
        </van-col>
        <van-col span="16">
          <x-tab :line-width="0" bar-active-color="#333" :animate="false">
            <x-tab-item @click.native="handleClick(his)">最近听的</x-tab-item>
            <x-tab-item selected @click.native="handleClick(fav)">我喜欢的</x-tab-item>
          </x-tab>
        </van-col>
      </van-row>
      <play-all></play-all>
      <song-history :songType="songType"></song-history>
    </div>
  </transition>
</template>

<script>
import { Row, Col } from 'vant'
import { Tab as XTab, TabItem as XTabItem } from 'vux' // TODO:tip: 关键字as,使用as给组件取别名
import playAll from '../components/play-all/play-all'
import back from '../components/back/back.vue'
import songHistory from '../components/songHistory/songHistory'
import {history, fav} from '../common/js/utils.js'
export default {
  data() {
    return {
      index: 0,
      songType: fav,
      fav: fav,
      his: history
    }
  },

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    playAll,
    XTab,
    XTabItem,
    back,
    songHistory
  },

  computed: {},

  mounted() {},

  methods: {
    handleClick(type) {
      this.songType = type
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.user
  background-color $color-background
  transform translate3d(0,0,0)
  display flex
  flex-direction column
  z-index 1
  &.left-slide-enter-active, &.left-slide-leave-active
    transition all .3s
    full-page()
  &.left-slide-enter, &.left-slide-leave-to
    transform translate3d(100%,0,0)
  /deep/ .van-row
    margin auto
    margin-top 10px
    width $container-width
    vuxTabStyle()
    .back
      text-align left
    .vux-tab
      background-color transparent
  .song-history
    width $container-width !important
    margin auto
    flex 1
    margin-bottom 20px
</style>
