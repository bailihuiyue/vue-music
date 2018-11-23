<!-- 返回按钮 -->
<template>
    <div class="back" @click="back">
        <i class="icon-back"></i>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {}
  },
  props: {
    isShowPlayer: {
      type: Boolean,
      default: false
    }
  },
  components: {},

  methods: {
    ...mapMutations({
      showPlayMusic: 'SHOW_PLAY_MUSIC'
    }),
    back() {
      if (this.isShowPlayer) {
        this.showPlayMusic(false)
      } else {
        this.$router.back()
      }
    }
  },
  computed: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.back
  text-align center
  .icon-back
    height: 30px;
    line-height: 30px;
    display block
    font-size $font-size-large-x
    color $color-theme
</style>
