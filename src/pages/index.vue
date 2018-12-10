<!--  -->
<template>
  <div class="index">
    <div class="main-header">
      <m-header></m-header>
      <tab
        prevent-default
        v-model="tabIndex"
        selected
        @on-before-index-change="switchTabItem"
        active-color="#ffcd32"
        custom-bar-width="35px"
      >
        <tab-item>推荐</tab-item>
        <tab-item>歌手</tab-item>
        <tab-item>排行</tab-item>
        <tab-item>搜索</tab-item>
      </tab>
    </div>
    <div class="main-body">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MHeader from '../components/header/m-header.vue'
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      tabIndex: 0
    }
  },

  components: {
    MHeader,
    Tab,
    TabItem
  },

  methods: {
    switchTabItem(index) {
      console.log('on-before-index-change', index)
      switch (index) {
        case 0:
          this.$router.push('/')
          break
        case 1:
          this.$router.push('/singers')
          break
      }
      this.$vux.loading.show()
      setTimeout(() => {
        this.$vux.loading.hide()
        this.tabIndex = index
      }, 100)
    }
  },

  computed: {},
  created() {},
  mounted() {}
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.index
    height 100%
    display flex
    flex-direction column
    .main-header
    /deep/ .vux-tab
        background-color: transparent
        .vux-tab-item
            background: none
    .main-body
        flex 1
        overflow hidden
</style>
