<!-- 轮播图 -->
<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(s, i) in slider" :key="i">
        <!-- <a :href="s.linkUrl"> TODO:todo:该链接点击跳转到qq音乐页面,目前未抓获该接口信息,因此轮播图不跳转,待后期完善
          <img v-lazy="s.picUrl" />
        </a> -->
        <img :src="s.picUrl" style="width:100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import * as api from '../../api/recommend.js'
export default {
  data() {
    return {
      slider: []
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

  methods: {},

  computed: {},
  created() {
    api.getRecommend().then(res => {
      if (res.code === 0) {
        this.slider = res.data.slider
        console.log(res.data.slider)
      } else {
        this.$toast('getRecommend调用失败')
      }
    })
  },
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
