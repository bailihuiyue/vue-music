<template>
  <div id="app">
    <m-header></m-header>
    <tab prevent-default v-model="tabIndex" selected @on-before-index-change="switchTabItem" active-color="#ffcd32" custom-bar-width="35px">
      <tab-item>推荐</tab-item>
      <tab-item>歌手</tab-item>
      <tab-item>排行</tab-item>
      <tab-item>搜索</tab-item>
    </tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from './components/header/m-header.vue'
import { Tab, TabItem } from 'vux'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    TabItem
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    switchTabItem(index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show()
      setTimeout(() => {
        this.$vux.loading.hide()
        this.tabIndex = index
      }, 100)
    }
  },
  mounted() {}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
/deep/ .vux-tab
  background-color transparent
  .vux-tab-item
    background none
</style>
