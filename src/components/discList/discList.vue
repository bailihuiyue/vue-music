<!-- 热门歌单推荐 -->
<template>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
    <div class="disc-list">
        <div class="song-list-title">
            热门歌单推荐
        </div>
        <div class="song-list-wrap" v-if="list.length>0">
            <router-link v-for="(l,i) in list" :key="i" :to="'discDetail/'+l.id" class="song-list-item">
                <img v-lazy="l.pic" class="avatar">
                <div class="info-wrap">
                    <div class="title">{{l.creator}}</div>
                    <div class="text">{{l.name}}</div>
                </div>
            </router-link>
        </div>
    </div>
    <!-- </van-pull-refresh> -->
</template>

<script>
// import { PullRefresh } from 'vant'
import { getDiscList } from '../../api/recommend.js'
export default {
  data() {
    return {
      list: [],
      isLoading: false
    }
  },

  components: {
    // [PullRefresh.name]: PullRefresh
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    }
  },

  computed: {},
  created() {
    getDiscList().then(res => {
      this.list = res.data
    }).catch((err) => {
      console.log('getDiscList:', err)
    })
  },
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.disc-list
    .song-list-title
        color $color-theme
        text-align center
        margin 20px
        font-size $font-size-medium
    .song-list-wrap
        .song-list-item
            display block
            padding 0 15px 15px 15px
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
                    margin-bottom 10px
                .text
                    color $color-text-l
                    font-size $font-size-small-s
                    padding-bottom 5px
</style>
