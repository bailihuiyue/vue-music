<!-- 轮播图 -->
<template>
  <!-- TODO:bug:更换vux轮播图后仍然会导致keep-alive失效,原因未知 -->
  <div>
    <swiper
      ref="mySwiper"
      :options="swiperOption"
      v-if="slider.length"
    >
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="(s,index) in slider" :key="index">
        <img :src="s.picUrl" style="width:100%"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getRecommend } from '../../api/recommend.js'
export default {
  data() {
    return {
      slider: [],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
  },

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
  mounted() {},
  activated() {
    if (this.$refs.mySwiper) {
      this.$refs.mySwiper.swiper.autoplay.start()
    }
  },
  deactivated() {
    this.$refs.mySwiper.swiper.autoplay.stop()
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
/deep/ .swiper-pagination-bullet
  margin: 0 4px
  width: 8px
  height: 8px
  background: $color-text-ll
  opacity 0.7
  &.swiper-pagination-bullet-active
    width: 20px
    border-radius: 5px
    background: $color-text-ll
    opacity 1
</style>
