<!-- 歌单详情页 -->
<template>
    <transition name="left-slide">
        <div class="disc-detail">
            <van-row>
                <van-col span="4">
                    <back></back>
                </van-col>
                <van-col span="16">
                    <div class="disc-title">{{data.title}}</div>
                </van-col>
            </van-row>
        </div>
    </transition>
</template>

<script>
import { getSongList } from '../api/recommend.js'
import back from '../components/back/back.vue'
import { Tab, Tabs, Row, Col } from 'vant'
export default {
  data() {
    return {
      data: Object
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
    let discid = this.$route.params.id
    getSongList(discid).then(res => {
      this.data = res.data
    }).catch((err) => {
      console.log('getSongList:', err)
    })
  },
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.disc-detail
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    padding-top 10px
    background-color $color-background
    &.left-slide-enter-active, &.left-slide-leave-active
        transition all 0.3s
    &.left-slide-enter, &.left-slide-leave-to
        transform translateX(100%)
    .disc-title
        width 100%
        text-align center
</style>
