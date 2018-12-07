<template>
  <transition name="drop">
    <div
      class="notify"
      v-show="showFlag"
      @click.stop="hide"
    >
      <div class="notify-title">
        <i :class="icon" class="icon"></i>
        <span class="text">{{tipTxt}}</span>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    delay: {
      type: Number,
      default: 2000
    },
    icon: {
      type: String,
      default: 'icon-ok'
    },
    tipTxt: {
      type: String,
      default: '提示~~'
    }
  },
  data() {
    return {
      showFlag: false
    }
  },
  methods: {
    show() {
      this.showFlag = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.hide()
      }, this.delay)
    },
    hide() {
      this.showFlag = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.notify
  position: fixed
  top 0
  left 0
  width 100%
  z-index 500
  background $color-dialog-background
  &.drop-enter-active, &.drop-leave-active
    transition all 0.3s
  &.drop-enter, &.drop-leave-to
    transform translate3d(0, -100%, 0)
  .notify-title
      text-align center
      padding 18px 0
      font-size 0
      .icon
        font-size $font-size-medium
        color $color-theme
        margin-right 4px
      .text
        font-size $font-size-medium
        color $color-text
</style>
