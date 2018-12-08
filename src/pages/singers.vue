<!-- 歌手页面 -->
<template>
  <div>
    {{a}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 0
    }
  },

  components: {},

  methods: {},

  computed: {},
  created() {
    this.a = Math.random()
  },
  mounted() {},
  activated() {

  }
}

</script>
<style scoped>

</style>
