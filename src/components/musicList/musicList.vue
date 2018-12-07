<!-- 单条音乐播放条目 -->
<template>
    <div class="music-list">
        <img v-if="pic" v-lazy="pic" class="avatar">
        <i v-if="icon" :class="icon" class="icon"></i>
        <div class="info-wrap">
            <div class="singer" v-if="singer">{{singer}}</div>
            <div class="name" :class="searchSongStyle?'search-song-style':''">{{name}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: null
    },
    pic: {
      type: String,
      required: false
    },
    singer: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    searchSongStyle: {
      type: Boolean,
      required: false,
      default: false
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
    .icon
        color $color-text-d
        margin-right 15px
    .info-wrap
        display inline-block
        vertical-align middle
        .singer
            color $color-text
            font-size $font-size-small
            margin-bottom 5px
        .name
            color $color-text-l
            font-size $font-size-small-s
            padding-bottom 5px
        .search-song-style
            font-size $font-size-medium
            color $color-text-d
</style>
