<!-- 听歌记录页面 -->
<template>
  <transition name="left-slide">
    <div class="user">
      <van-row>
        <van-col span="4">
          <back></back>
        </van-col>
        <van-col span="16">
          <x-tab :line-width="0" bar-active-color="#333" :animate="false">
            <x-tab-item selected @click.native="handleClick(0)">我喜欢的</x-tab-item>
            <x-tab-item @click.native="handleClick(1)">最近听的</x-tab-item>
          </x-tab>
        </van-col>
      </van-row>
      <play-all></play-all>
      <div class="music-list">
          <div v-if="historyMsc.length>0">
            <div class="tab-swiper vux-center" v-for="(h,i) in historyMsc" :key="i">{{h}}</div>
          </div>
          <div v-else>暂无</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Row, Col } from 'vant'
import { Tab as XTab, TabItem as XTabItem } from 'vux' // TODO:tip: 关键字as,使用as给组件取别名
import playAll from '../components/play-all/play-all'
import back from '../components/back/back.vue'
export default {
  data() {
    return {
      index: 0,
      historyMsc: []
    }
  },

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    playAll,
    XTab,
    XTabItem,
    back
  },

  computed: {},

  mounted() {},

  methods: {
    handleClick(item) {
      // 我喜欢的
      if (item === 0) {
        this.historyMsc.push('我喜欢的')
      } else {
        // 最近听的
        this.historyMsc.push('最近听的')
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.user
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color $color-background
  transform translate3d(0,0,0)
  &.left-slide-enter-active, &.left-slide-leave-active
    transition all 0.3s
  &.left-slide-enter, &.left-slide-leave-to
    transform translate3d(100%,0,0)
  /deep/ .van-row
    margin-top 10px
    vuxTabStyle()
</style>
