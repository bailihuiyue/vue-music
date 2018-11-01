<!-- 听歌记录页面 -->
<template>
  <div>
    <div></div>
    <van-row>
      <van-col span="4">
        <div class="back" @click="back">
          <i class="icon-back"></i>
        </div>
      </van-col>
      <van-col span="16">
        <van-tabs type="card">
          <van-tab title="我喜欢的">我喜欢的</van-tab>
          <van-tab title="最近听的">最近听的</van-tab>
        </van-tabs>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// import {
//   Tab,
//   Tabs,
//   Row,
//   Col
// } from 'vant'

export default {
  data() {
    return {}
  },

  // components: {
  //   [Tab.name]: Tab,
  //   [Tabs.name]: Tabs,
  //   [Row.name]: Row,
  //   [Col.name]: Col
  // },

  computed: {},

  mounted() {},

  methods: {
    back() {}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

/deep/ .van-row
  margin-top :10px
  .icon-back
    display: block
    margin-left 10px
    font-size: $font-size-large-x
    color: $color-theme
  .van-tabs__nav--card
    border-color:$color-highlight-background
  .van-tab
    background-color:$color-background
    border-right:1px solid $color-highlight-background
    color:$color-text-d
    &.van-tab--active
        background-color:$color-highlight-background
        color:$color-text
</style>
