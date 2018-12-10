import { mapMutations } from 'vuex'
export const playMusicMixin = {
  computed: {
  },
  mounted() {

  },
  activated() {

  },
  watch: {

  },
  methods: {
    ...mapMutations({
      setSongDetail: 'SET_SONG_DETAIL',
      setCurrnetSongIndex: 'SET_CURRENT_SONG_INDEX',
      showPlayMusic: 'SHOW_PLAY_MUSIC'
    }),
    preLoadImg(src, cb) {
      this.$vux.loading.show()
      let image = new Image()
      image.onload = () => {
        cb()
        this.$vux.loading.hide()
      }
      image.onerror = function() {
        this.$toast('背景图片加载失败!')
        this.$vux.loading.hide()
      }
      image.src = src
    },
    playMusic(songDetail, i) {
      this.preLoadImg(
        songDetail.pic,
        () => {
          console.log(this)
          this.setSongDetail(songDetail)
          this.setCurrnetSongIndex(i)
          this.showPlayMusic(true)
        })
    }
  }
}
