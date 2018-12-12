<!-- 搜素结果显示页面 -->
<template>
  <div class="serach-result">
    <scroll :data="songList" ref="scroll">
      <div class="scroll-wrap" v-if="songList.length>0">
        <div
          v-for="song in songList"
          :key=song.id
        >
          <music-list :searchSongStyle="true" :name="song.name" :singer="song.singer" icon="icon-music" @click.stop.native="addSong(song)"></music-list>
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
import { getItemIndex, addToStorage, searchHistory } from '../../common/js/utils.js'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  props: {
    songList: {
      type: Array,
      required: true
    }
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
      addToStorage(searchHistory, songDeatil)
      this.$refs.notify.show()
      this.setSongDetail(songDeatil)
      this.showPlayMusic(true)
    },
    ...mapMutations({
      setSongList: 'SET_SONG_LIST',
      setSongDetail: 'SET_SONG_DETAIL',
      showPlayMusic: 'SHOW_PLAY_MUSIC'
    })
  },

  computed: {
    ...mapState([
      'stateSongList'
    ]),
    ...mapGetters([
      'isMiniPlayShow'
    ])
  },
  watch: {
    isMiniPlayShow() {
      this.$nextTick(() => {
        this.log(1)
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.serach-result
  height 100%
  overflow hidden
  .scroll
    overflow hidden
  .else
    width 100%
    margin 30px auto
    color $color-text
    font-size $font-size-medium
    text-align center
</style>
