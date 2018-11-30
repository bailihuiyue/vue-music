<!-- 用户中心全部播放按钮 -->
<template>
  <div class="play-all" :class="gold?'gold':''">
    <i class="ico" :class="ico"></i>
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    gold: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '随机播放全部'
    },
    ico: {
      type: String,
      default: 'icon-play'
    }
  },
  components: {},

  methods: {},

  computed: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.play-all
  border 1px solid $color-text-l
  color $color-text-l
  border-radius 50px
  width 120px
  padding 7px
  margin 20px auto
  font-size 0
  text-align center
  .ico
    vertical-align middle
    font-size $font-size-medium-x
    display inline-block
    margin-right 6px
  .text
    vertical-align middle
    font-size $font-size-medium
    display inline-block
.gold
  border 1px solid $color-theme
  color $color-theme
</style>
