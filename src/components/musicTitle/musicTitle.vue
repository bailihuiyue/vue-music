<!-- 显示音乐的title + 返回按钮-->
<template>
    <van-row>
        <van-col span="3">
            <back :style="rotateBackBtn"></back>
        </van-col>
        <van-col span="18">
            <div class="disc-title">{{title}}</div>
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
    title: String,
    rotate: {
      type: String,
      default: '0'
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
.van-row
    position absolute
    width 100%
    z-index 3
    top 5px
.disc-title
    ellipsis()
    width 100%
    text-align center
    height 30px
    line-height 30px
</style>
