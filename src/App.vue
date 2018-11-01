<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/header/m-header.vue'
export default {
  name: 'App',
  components: {
    MHeader
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style>
</style>
