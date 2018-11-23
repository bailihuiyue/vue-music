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
    <play-music v-if="stateShowPlayMusic"></play-music>
  </div>
</template>

<script>
import MHeader from './components/header/m-header.vue'
import playMusic from './pages/playMusic'
import { Tab, TabItem } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    TabItem,
    playMusic
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
  mounted() {},
  computed: {
    ...mapState(['stateShowPlayMusic'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
/deep/ .vux-tab
  background-color transparent
  .vux-tab-item
    background none
</style>
