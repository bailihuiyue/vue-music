<!-- 推荐页面 -->
<template>
  <div>
    <swipe></swipe>
    <disc-list></disc-list>
    <router-view></router-view>
  </div>
</template>

<script>
import swipe from '../components/swipe/swipe.vue'
import discList from '../components/discList/discList.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    swipe,
    discList
  },

  methods: {},

  computed: {},
  created() {},
  mounted() {}
}

</script>
<style scoped>

</style>
