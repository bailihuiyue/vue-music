<!-- 轮播图 -->
<template>
  <!-- TODO:bug:更换vux轮播图后仍然会导致keep-alive失效,原因未知 -->
  <div>
    <swiper auto class="text-scroll" dots-position="center" dots-class="dot" :aspect-ratio="0.4">
      <swiper-item v-for="(s, i) in slider" :key="i">
        <!-- <a :href="s.linkUrl"> TODO:todo:该链接点击跳转到qq音乐页面,目前未抓获该接口信息,因此轮播图不跳转,待后期完善
          <img v-lazy="s.picUrl" />
        </a> -->
        <img :src="s.picUrl" style="width:100%"/>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'
import {getRecommend} from '../../api/recommend.js'
export default {
  data() {
    return {
      slider: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },

  methods: {},

  computed: {},
  created() {
    getRecommend().then(res => {
      if (res.code === 0) {
        this.slider = res.data.slider
      } else {
        this.$toast('getRecommend调用失败')
      }
    })
  },
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
/deep/ .vux-icon-dot
  margin 0 4px
  width 8px !important
  height 8px !important
  background $color-text-l !important
  &.active
    width 20px !important
    border-radius 5px !important
    background $color-text-ll !important
</style>
