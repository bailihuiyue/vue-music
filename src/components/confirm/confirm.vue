<!-- 弹窗 -->
<template>
  <confirm
    v-model="show"
    :title="txt"
    @on-cancel="onCancel"
    @on-confirm="onConfirm"
    @on-show="onShow"
    @on-hide="onHide"
    :confirm-text="confirmText"
    :cancel-text="cancelText"
  >
  </confirm>
</template>

<script>
import { Confirm } from 'vux'
export default {
  data() {
    return {
      show: this.showConfirm
    }
  },
  props: {
    showConfirm: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    txt: {
      type: String,
      default: '确认执行操作?'
    },
    hasCancelEvent: {
      type: Boolean,
      default: false
    },
    hasConfirmEvent: {
      type: Boolean,
      default: false
    },
    hasShowEvent: {
      type: Boolean,
      default: false
    },
    hasHideEvent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Confirm
  },

  methods: {
    onCancel() {
      if (this.hasCancelEvent) {
        this.$emit('onCancel')
      }
    },
    onConfirm() {
      if (this.hasConfirmEvent) {
        this.$emit('onConfirm')
      }
    },
    onShow() {
      if (this.hasShowEvent) {
        this.$emit('onShow')
      }
    },
    onHide() {
      if (this.hasHideEvent) {
        this.$emit('onHide')
      }
    }
  },

  computed: {},
  created() {},
  mounted() {},
  watch: {
    showConfirm() {
      this.show = this.showConfirm
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'

.vux-confirm
  .weui-dialog
    width 70%
    background-color $color-highlight-background
    border-radius 13px
    .weui-dialog__hd
      padding-bottom 1em
    .weui-dialog__title
      color $color-text-l !important
    .weui-dialog__bd
      display none
    .weui-dialog__btn
      color $color-text-d
    .weui-dialog__btn:after,.weui-dialog__ft:after
      border-color $color-background-d
      transform scale(1)
</style>
