<!-- 音乐播放页面 -->
<template>
    <div class="play-music">
        <transition name="" mode="in-out">
            <music-title title="qwewe" rotate="-90"></music-title>
        </transition>
        <transition name="">
            <div class="body">

            </div>
        </transition>
        <transition name="">
            <div class="footer">

            </div>
        </transition>
    </div>
</template>

<script>
import musicTitle from '../components/musicTitle/musicTitle'

export default {
  data() {
    return {}
  },

  components: {
    musicTitle
  },

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
        transition: all 0.3s
    &.left-slide-enter, &.left-slide-leave-to
        transform: translateX(100%)
    .back
        position absolute
        top 10px
        left 10px
        transform rotate(-90deg)
</style>
