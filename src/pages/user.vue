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
          <x-tab :line-width="0" bar-active-color="#333" :animate="false" v-model="index">
            <x-tab-item selected>我喜欢的</x-tab-item>
            <x-tab-item>最近听的</x-tab-item>
          </x-tab>
        </van-col>
      </van-row>
      <play-all></play-all>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item>
          <div class="tab-swiper vux-center">Container</div>
        </swiper-item>
      </swiper>
    </div>
  </transition>
</template>

<script>
import { Tab, Tabs, Row, Col } from 'vant'
import { Tab as XTab, TabItem as XTabItem } from 'vux' // TODO:tip: 关键字as,使用as给组件取别名
import playAll from '../components/play-all/play-all'
export default {
  data() {
    return {
      index: 0
    }
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
    .back
      margin-top 3px
    .icon-back
      display block
      margin-left 10px
      font-size $font-size-large-x
      color $color-theme
    .vux-tab-container
      height 30px
      .vux-tab
        height 30px
      .vux-tab-item
        border-color $color-highlight-background !important
        background-color $color-background
        border-right 1px solid $color-highlight-background
        color $color-text-d
        border none !important
        background-size 0
        line-height 30px
        &.vux-tab-selected
          background-color $color-highlight-background
          color $color-text
          border none
</style>
