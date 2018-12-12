<!-- 歌曲搜索页面 -->
<template>
  <div class="search-songs">
    <search
      placeholder="搜索歌曲、歌手"
      ref="search"
      @query="searchMusic"
      @clearSearch="clearSearch"
      :txt="txt"
    ></search>
    <div class="hot-key" v-show="!songList.length">
      <h1 class="title">热门搜索</h1>
      <ul>
        <li
          @click="searchMusic(item.k)"
          class="item"
          v-for="item in hotKey"
          :key="item.id"
        >
          <span>{{item.k}}</span>
        </li>
      </ul>
    </div>
    <search-result :songList="songList" v-show="songList.length"></search-result>
  </div>
</template>

<script>
import search from '../components/search/search'
import searchResult from '../components/searchResult/searchResult'
import scroll from '../components/scroll/scroll'
import { searchSong } from '../api/song.js'
import { getHotKey } from '../api/search.js'
export default {
  data() {
    return {
      songList: [],
      hotKey: '',
      txt: ''
    }
  },

  components: {
    search,
    searchResult,
    scroll
  },

  methods: {
    searchMusic(music) {
      if (music) {
        searchSong(music).then(res => {
          if (res.code === 200) {
            this.songList = res.data
          }
        })
        this.txt = music
      }
    },
    clearSearch() {
      this.songList = []
    },
    addSearch(name) {
      this.songList = name
    }
  },

  computed: {
  },
  created() {
    getHotKey().then(res => {
      if (res.code === 0) {
        this.hotKey = res.data.hotkey
      } else {
        this.$toast('获取热门搜索失败~~')
      }
    })
  },
  mounted() {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.search-songs
  width: $container-width
  display flex
  flex-direction column
  height 100%
  margin auto
  .search-box
    flex 0 0 44px
    padding: 20px 0
    /deep/ .icon-dismiss
      margin-right 10px
    /deep/ .icon-search
      margin-left 10px
  .hot-key
    margin-top: 20px
    .title
      margin-bottom: 20px
      font-size: $font-size-medium
      color: $color-text-l
    .item
      display: inline-block
      padding: 5px 10px
      margin: 0 20px 10px 0
      border-radius: 6px
      background: $color-highlight-background
      font-size: $font-size-medium
      color: $color-text-d
  .serach-result
    // padding-bottom 20px
    margin 20px 0
    /deep/ .b-scroll
      // flex 1
      // height 0
      // margin-top 20px
      // margin 20px 0
      overflow hidden
</style>
