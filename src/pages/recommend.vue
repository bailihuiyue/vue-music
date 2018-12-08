<!-- 推荐页面 -->
<template>
  <scroll style="overflow:initial">
    <div class="recommend">
      <swipe></swipe>
      <disc-list></disc-list>
      <router-view></router-view>
    </div>
  </scroll>
</template>

<script>
import scroll from '../components/scroll/scroll.vue'
import swipe from '../components/swipe/swipe.vue'
import discList from '../components/discList/discList.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    swipe,
    discList,
    scroll
  },

  methods: {},

  computed: {},
  created() {},
  mounted() {}
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
