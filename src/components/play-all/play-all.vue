<!-- 用户中心全部播放按钮 -->
<template>
  <div class="play-all">
    <i class="icon-play"></i>
    <span class="text">随机播放全部</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
  width 30%
  padding 7px
  margin 20px auto
  font-size 0
  text-align center
  .icon-play
    vertical-align middle
    font-size $font-size-medium-x
    display inline-block
    margin-right 6px
  .text
    vertical-align middle
    font-size $font-size-medium
    display inline-block
</style>
