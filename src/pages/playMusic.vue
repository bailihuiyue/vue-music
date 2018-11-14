<!-- 音乐播放页面 -->
<template>
    <transition name="left-slide" mode="in-out">
        <div class="play-music">

        </div>
    </transition>
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
@import '~common/stylus/mixin'
.play-music
    full-page()
    &.left-slide-enter-active, &.left-slide-leave-active
        transition all 0.3s
    &.left-slide-enter, &.left-slide-leave-to
        transform translateX(100%)
</style>
