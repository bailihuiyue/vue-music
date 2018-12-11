<!-- 排行页面 -->
<template>
  <div class="rank">
      <scroll v-if="topList.length" :data="topList" style="overflow:hidden">
        <div class="top-list">
          <router-link v-for="item in topList" :key="item.id" class="top-item" :to="'/discDetail/'+item.id">
              <img :src="item.pic" alt="">
              <div class="song-info">
                  <div class="song">{{item.name}}</div>
                  <div class="song">作者:{{item.creator}}</div>
                  <div class="song">播放次数:{{":"+item.playCount}}</div>
              </div>
          </router-link>
        </div>
      </scroll>
  </div>
</template>

<script>
import {getTopList} from '../api/rank.js'
import scroll from '../components/scroll/scroll'
export default {
  data () {
    return {
      topList: []
    }
  },

  components: {
    scroll
  },

  methods: {},

  computed: {},
  created() {
    getTopList().then((res) => {
      if (res.code === 200) {
        this.topList = res.data
      } else {
        this.$toast('获取排行失败,请重试!')
      }
    })
  },
  mounted() {}
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.rank
    width $container-width
    margin auto
    height 100%
    .top-list
        padding 10px 0 1px 0
        .top-item
            display flex
            margin auto
            margin-bottom 20px
            img
                width 100px
                height 100px
            .song-info
                flex 1
                display flex
                flex-direction column
                align-items center
                padding 10px 20px
                background-color $color-highlight-background
                color: $color-text-d
                font-size: $font-size-small
                text-align left
                .song
                    flex 1
                    width 100%
                    display flex
                    align-items center
</style>
