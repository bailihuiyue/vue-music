<!-- 音乐播放页面 -->
<template>
    <transition name="player" mode="in-out">
        <div class="play-music" :style="background">
            <div class="header">
                <music-title :title="title" rotate="-90"></music-title>
            </div>
            <div class="body">

            </div>
            <div class="footer">

            </div>
        </div>
    </transition>
</template>

<script>
import musicTitle from '../components/musicTitle/musicTitle'
export default {
  data() {
    return {
      title: '',
      background: Object
    }
  },
  props: {
    data: Object
  },
  components: {
    musicTitle
  },

  methods: {},

  computed: {},
  created() {
    debugger
    let a = this.$route.params
    console.log(a)
    this.background = {
      background: `url(${this.data.pic})`
    }
  },
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.play-music
    full-page()
    &.player-enter-active, &.player-leave-active
        transition all 0.5s
    &.player-enter, &.player-leave-to
        transform scale(0.5)
    .back
        position absolute
        top 10px
        left 10px
        transform rotate(-90deg)
</style>
