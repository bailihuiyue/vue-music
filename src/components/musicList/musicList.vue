<!-- 单条音乐播放条目 -->
<template>
    <div class="music-list">
        <img v-if="pic" v-lazy="pic" class="avatar">
        <div class="info-wrap">
            <div class="title">{{singer}}</div>
            <div class="text">{{name}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    pic: {
      type: String,
      required: false
    },
    singer: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {},

  methods: {},

  computed: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.music-list
    margin 10px
    .avatar
        width 50px
        height 50px
        margin-right 15px
        display inline-block
        vertical-align middle
    .info-wrap
        display inline-block
        vertical-align middle
        .title
            color $color-text
            font-size $font-size-small
            margin-bottom 5px
        .text
            color $color-text-l
            font-size $font-size-small-s
            padding-bottom 5px
</style>
