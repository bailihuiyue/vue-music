<!-- 添加歌曲到列表页面 -->
<template>
  <transition name="left-slide">
    <div class="add-song-wrap">
      <div class="add-song">
        <music-title
          title="添加歌曲到列表"
          :isShowAddSong="true"
            ></music-title>
        <search></search>
        <tab
          :line-width="0"
          bar-active-color="#333"
          :animate="false"
        >
          <tab-item
            selected
            @click.native="addSongTab(0)"
          >最近播放</tab-item>
          <tab-item @click.native="addSongTab(1)">搜索历史</tab-item>
        </tab>
      </div>
    </div>
  </transition>
</template>

<script>
import musicTitle from '../musicTitle/musicTitle'
import search from '../search/search'
import { Tab, TabItem } from 'vux'
export default {
  data() {
    return {}
  },

  components: {
    musicTitle,
    Tab,
    TabItem,
    search
  },

  methods: {
    addSongTab(type) {
      switch (type) {
        case 0:
          this.log(0)
          break
        case 1:
          this.log(1)
          break
        default:
          this.log(-1)
      }
    }
  },

  computed: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.left-slide-enter-active, .left-slide-leave-active
  transition: all 0.3s
.left-slide-enter, .left-slide-leave-to
  transform: translate3d(100%, 0, 0)
.add-song-wrap
  full-page()
  // TODO:bug:vux-popup-mask vux-popup-show 的z-index太高,得降点
  // 降不下去,还是把add-song的index升高吧
  z-index: 999
  vuxTabStyle()
  .add-song
    width $container-width
    margin auto
</style>
