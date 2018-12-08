<!-- 推荐页面 -->
<template>
  <div class="recommend">
    <scroll>
      <div>
        <swipe></swipe>
        <disc-list></disc-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from '../components/scroll/scroll.vue'
import swipe from '../components/swipe/swipe.vue'
import discList from '../components/discList/discList.vue'
export default {
  data() {
    return {}
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
.recommend
  height 100%
</style>
