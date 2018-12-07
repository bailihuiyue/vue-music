<!-- 搜素结果显示页面 -->
<template>
  <div class="serach-result">
    <scroll :data="songList">
      <div class="scroll-wrap" v-if="songList.length>0">
        <div
          v-for="song in songList"
          :key=song.id
        >
          <music-list :name="song.name" icon="icon-music" :searchSongStyle="true" @click.stop.native="addSong(song)"></music-list>
        </div>
      </div>
      <div v-else class="else">没有搜索到相关内容</div>
    </scroll>
    <notify ref="notify" tipTxt="1首歌曲已经添加到播放列表"></notify>
  </div>
</template>

<script>
import musicList from '../musicList/musicList'
import scroll from '../scroll/scroll'
import notify from '../notify/notify'
import { getItemIndex } from '../../common/js/utils.js'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  props: {
    songList: Array,
    required: true
  },
  components: {
    musicList,
    scroll,
    notify
  },

  methods: {
    addSong(songDeatil) {
      let songListTmp = JSON.parse(JSON.stringify(this.stateSongList))
      songDeatil = JSON.parse(JSON.stringify(songDeatil))
      if (getItemIndex(songListTmp, songDeatil) < 0) {
        songListTmp.unshift(songDeatil)
        this.setSongList(songListTmp)
      }
      this.$refs.notify.show()
      this.setSongDetail(songDeatil)
    },
    ...mapMutations({
      setSongList: 'SET_SONG_LIST',
      setSongDetail: 'SET_SONG_DETAIL'
    })
  },

  computed: {
    ...mapState([
      'stateSongList'
    ])
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.serach-result
  height 100%
  .else
    width 100%
    margin 30px auto
    color $color-text
    font-size $font-size-medium
    text-align center
</style>
