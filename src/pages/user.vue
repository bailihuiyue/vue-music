<!-- 听歌记录页面 -->
<template>
  <transition name="left-slide">
    <div class="user">
      <van-row>
        <van-col span="4">
          <div class="back" @click="back">
            <i class="icon-back"></i>
          </div>
        </van-col>
        <van-col span="16">
          <x-tab>
            <x-tab-item selected>我喜欢的</x-tab-item>
            <x-tab-item>最近听的</x-tab-item>
          </x-tab>
          <van-tabs type="card">
            <van-tab title="我喜欢的" style="padding-left:100px;">
              <play-all></play-all>
            </van-tab>
            <van-tab title="最近听的">
              <play-all></play-all>
            </van-tab>
          </van-tabs>
        </van-col>
      </van-row>
    </div>
  </transition>
</template>

<script>
import { Tab, Tabs, Row, Col } from 'vant'
import { Tab as XTab, TabItem as XTabItem } from 'vux' // TODO:tip: 关键字as,使用as给组件取别名
import playAll from '../components/play-all/play-all'
export default {
  data() {
    return {}
  },

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col,
    playAll,
    XTab,
    XTabItem
  },

  computed: {},

  mounted() {},

  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.user
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color $color-background
  transform translateX(0)
  &.left-slide-enter-active, &.left-slide-leave-active
    transition all 0.3s
  &.left-slide-enter, &.left-slide-leave-to
    transform translateX(100%)
  /deep/ .van-row
    margin-top 10px
    .icon-back
      display block
      margin-left 10px
      font-size $font-size-large-x
      color $color-theme
    .van-tabs__nav--card
      border-color $color-highlight-background
    .van-tab
      background-color $color-background
      border-right 1px solid $color-highlight-background
      color $color-text-d
      &.van-tab--active
        background-color $color-highlight-background
        color $color-text
</style>
