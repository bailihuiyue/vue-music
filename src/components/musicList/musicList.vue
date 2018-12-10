<!-- 单条音乐播放条目 -->
<template>
    <div class="music-list" v-if="name||singer">
        <img v-if="pic" v-lazy="pic" class="avatar">
        <i v-if="icon" :class="icon" class="icon"></i>
        <div class="info-wrap">
            <div v-if="searchSongStyle">
                <div class="name search-song-style" v-if="name">{{name+' - '+singer}}</div>
            </div>
            <div v-else>
                <div class="name" v-if="name" :class="searchSongStyle?'search-song-style':''">{{name}}</div>
                <div class="singer" v-if="singer">{{singer}}</div>
            </div>
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
      required: true,
      default: ''
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
    @import '~common/stylus/mixin'
.music-list
    margin 15px 10px
    width 100%
    display flex
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
        flex 1
        width 0
        display inline-block
        // vertical-align middle
        .name
            color $color-text
            font-size $font-size-medium
            ellipsis()
        .singer
            color $color-text-l
            font-size $font-size-medium
            margin-top 6px
            ellipsis()
            // padding-bottom 5px
        .search-song-style
            font-size $font-size-medium
            color $color-text-d
</style>
