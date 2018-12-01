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
    <play-music ref="playMusic"></play-music>
  </div>
</template>

<script>
import MHeader from './components/header/m-header.vue'
import playMusic from './pages/playMusic'
import { Tab, TabItem } from 'vux'
// import { mapState } from 'vuex'
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
  mounted() {
    // debugger
    // 预加载计算playMusic组件中body的高度
    let playMusic = this.$refs.playMusic.$el.getElementsByClassName('play-music')[0]
    let body = this.$refs.playMusic.$el.getElementsByClassName('body')[0]
    let footer = this.$refs.playMusic.$el.getElementsByClassName('footer')[0]

    playMusic.style.display = 'block'
    playMusic.style.zIndex = '-100'
    let bodyTop = body.getBoundingClientRect().top
    let footerTop = footer.getBoundingClientRect().top
    //                                             20 * 2:上下的margin距离
    body.style.height = footerTop - bodyTop - 10 - 20 * 2 + 'px'
    playMusic.style.display = 'none'
    playMusic.style.zIndex = '2'
  },
  computed: {

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
