<!-- 最近播放/搜索历史 -->
<template>
  <scroll class="song-history" :data="historyMsc" v-if="historyMsc.length">
    <div v-if="historyMsc.length>0">
        <div
            class="tab-swiper vux-center"
            v-for="(h,i) in historyMsc"
            :key="h.name+h.singer"
        >
        <music-list :singer="h.singer||''" :name="h.name||''" @click.native="playMusic(h,i)"></music-list>
        </div>
    </div>
    <div v-else>暂无</div>
  </scroll>
</template>

<script>
import { Row, Col } from 'vant'
import { Tab, TabItem } from 'vux' // TODO:tip: 关键字as例如 Tab as XTab, TabItem as XTabItem ,使用as给组件取别名
import scroll from '../scroll/scroll'
import musicList from '../musicList/musicList'
import {getSongsFromLocalStorage, history} from '../../common/js/utils.js'
import {playMusicMixin} from '../../common/js/mixins.js'
export default {
  mixins: [playMusicMixin],
  data() {
    return {
      index: 0,
      historyMsc: []
    }
  },
  props: {
    songType: {
      type: String,
      default: history
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    Tab,
    TabItem,
    scroll,
    musicList
  },

  computed: {},

  mounted() {},

  methods: {
  },
  created() {
    this.historyMsc = getSongsFromLocalStorage(this.songType)
  },
  watch: {
    songType() {
      this.historyMsc = getSongsFromLocalStorage(this.songType)
      this.log(this.historyMsc)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.song-history
    overflow hidden
    .tab-swiper
        /deep/ .music-list
            margin 20px auto
            /deep/ .name,.singer
                font-size $font-size-medium
            /deep/ .name
                margin-bottom 10px
</style>
