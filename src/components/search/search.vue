<!-- 搜索框 -->
<template>
  <van-search
    ref="search"
    background="#333"
    :show-action="true"
    v-model="text"
  >
   <i slot="action" @click="empty" v-show="text"></i>
  </van-search >
</template>

<script>
import { Search } from 'vant'
export default {
  data() {
    return {
        text:''
    }
  },

  components: {
    [Search.name]: Search
  },

  methods: {
    changeTxt(e) {
      this.log(e)
    }
  },

  computed: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
.van-search
    padding 5px 10px
    border-radius 10px
    /deep/ .van-cell
        background-color $color-highlight-background
        .van-icon-search
            color $color-background
        .van-field__control
            color $color-text
</style>
