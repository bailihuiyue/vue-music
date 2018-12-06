<!-- 显示音乐的title + 返回按钮-->
<template>
  <van-row>
    <van-col span="3">
      <back
        :style="rotateBackBtn"
        :isShowPlayer="isShowPlayer"
        :isShowAddSong="isShowAddSong"
        v-if="!isShowAddSong"
      ></back>
      <!-- 写个&nbsp;当占位符 -->
      <div v-else>&nbsp;</div>
    </van-col>
    <van-col span="18">
      <div class="disc-title">{{title}}</div>
      <div
        class="disc-singer"
        v-if="singer&&isShowPlayer"
      >{{singer}}</div>
    </van-col>
    <van-col
      span="3"
      v-if="isShowAddSong"
    >
      <back
        :style="rotateBackBtn"
        :isShowPlayer="isShowPlayer"
        :isShowAddSong="isShowAddSong"
      ></back>
    </van-col>
  </van-row>
</template>

<script>
import { Tab, Tabs, Row, Col } from 'vant'
import back from '../back/back'

export default {
  data() {
    return {
      rotateBackBtn: ''
    }
  },
  props: {
    title: {
      type: String,
      default: '歌曲名称'
    },
    rotate: {
      type: String,
      default: '0'
    },
    singer: {
      type: String,
      default: '歌唱家'
    },
    isShowPlayer: {
      type: Boolean,
      default: false
    },
    isShowAddSong: {
      type: Boolean,
      default: false
    }
  },
  components: {
    back,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col
  },

  methods: {},

  computed: {},
  created() {
    this.rotateBackBtn = {
      transform: `rotate(${this.rotate}deg)`
    }
  },
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
.van-row
  position: relative
  width: 100%
  z-index: 3
  top: 5px
.disc-title, .disc-singer
  ellipsis()
  width: 100%
  text-align: center
  height: 30px
  line-height: 30px
.disc-singer
  font-size: $font-size-medium
</style>
