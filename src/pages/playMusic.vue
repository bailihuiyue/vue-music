<!-- 音乐播放页面 -->
<template>
    <transition name="player" mode="in-out">
        <div class="play-music">
          <img class="background-img" :src="this.songDetail.pic">
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
import { songDetail } from '../api/song.js'
export default {
  data() {
    return {
      title: '',
      background: Object,
      songDetail: Object
    }
  },
  components: {
    musicTitle
  },

  methods: {},

  computed: {},
  created() {
    // songDetail还是放store里面吧
    this.songDetail = this.$route.query.data
    if (!this.songDetail) {
      songDetail(this.$route.params.id).then(res => {
        this.songDetail = res.data.data
      })
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
  .background-img
    width 100%
    height 100%
    filter:blur(20px)
</style>
