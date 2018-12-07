<!-- 添加歌曲到列表页面 -->
<template>
  <transition name="left-slide">
    <div class="add-song-wrap">
      <div class="add-song">
        <music-title
          title="添加歌曲到列表"
          :isShowAddSong="true"
            ></music-title>
        <search placeholder="搜索歌曲"  @query="searchMusic"></search>
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
        <div class="s-wrap">
          <search-result v-if="songList" :songList="songList"></search-result>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import musicTitle from '../musicTitle/musicTitle'
import search from '../search/search'
import searchResult from '../searchResult/searchResult'
import { searchSong } from '../../api/song.js'
import { Tab, TabItem } from 'vux'
export default {
  data() {
    return {
      songList: ''
    }
  },

  components: {
    musicTitle,
    Tab,
    TabItem,
    search,
    searchResult
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
    },
    searchMusic(music) {
      if (music) {
        searchSong(music).then((res) => {
          if (res.code === 200) {
            this.songList = res.data
          }
        })
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
    display flex
    flex-direction column
    width $container-width
    margin auto
    height 100%
    .search-box
      flex 0 0 40px
      margin-top 30px
    .vux-tab-wrap
      width 80%
      margin 20px auto auto auto
      flex 0 0 20px
    .s-wrap
      flex 1
      // TODO:learn:即使设置flex 1 高度也会被撑开,百度说需要加下面代码
      // 内容高度不固定，无法出现滚动条(本项目为被撑爆)，然后在容器中添加height：0，出现滚动条，
      // 个人猜想为设置height：0后，将默认的盒子模型高度设置为空，让flex设置的高度生效；
      // https://www.cnblogs.com/strangerqt/p/6090173.html
      height 0
      margin-bottom 20px
</style>
