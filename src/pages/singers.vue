<!-- 歌手页面 -->
<template>
  <div class="singers">
    <b-scroll ref="scroll" :probeType="3" :listenScroll="true" @scroll="scroll">
      <div class="g-wrapper">
        <div class="group" v-for="(group,i) in singerList" :key="i">
          <div class="title-wrap">
            <div class="title" :id="i" ref="title">{{changeKeys(i)}}</div>
          </div>
          <div class="singer" v-for="singer in group" :key="singer.Fsinger_name" @click="toDiscDetail(singer.Fsinger_name,singer.Fsinger_mid)">
            <img v-lazy="`https://y.gtimg.cn/music/photo_new/T001R300x300M000${singer.Fsinger_mid}.jpg?max_age=2592000`">
            <div class="name">{{singer.Fsinger_name}}</div>
          </div>
        </div>
      </div>
    </b-scroll>
    <div class="touch-bar" @touchmove="moveTouchbar">
      <div class="letter" v-for="(group,i) in singerList" :key="i" @click="scrollTo($event,i)"
      :class="changeKeys(i)==activeIndex?'active':''" >
        {{changeKeys(i)}}
      </div>
    </div>
    <div class="title-box" v-show="titleboxshow" ref="titleBox">
      <div class="title">{{changeKeys(activeIndex)}}</div>
    </div>
  </div>
</template>

<script>
import {getSingerList} from '../api/singer.js'
import bScroll from '../components/scroll/scroll'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      singerList: {},
      activeIndex: '热',
      resetTitlePos: 0,
      singerIndex: [],
      titleOffsetTop: [],
      titleOffsetTopTxt: [],
      titleboxshow: false,
      titleOffsetHeight: 0
    }
  },

  components: {
    bScroll
  },

  methods: {
    changeKeys(e) {
      return e === '#' ? '热' : e
    },
    scrollTo(e, index) {
      let ele = document.getElementById(index)
      this.$refs.scroll.scrollToElement(ele, 0)
      this.activeIndex = this.changeKeys(index)
    },
    scroll(pos) {
      let topNo = -pos.y
      if (topNo < 0) {
        this.titleboxshow = false
      } else {
        for (let i = 0, len = this.titleOffsetTop.length; i < len; i++) {
          //  滚动距离                                  热,a,b,c的高度
          if (topNo > this.titleOffsetTop[i] - this.titleOffsetHeight && topNo < this.titleOffsetTop[i]) {
            this.$refs.titleBox.style.transform = `translate3d(0px, ${((this.titleOffsetTop[i] - this.titleOffsetHeight - topNo))}px, 0px)`
          } else {
            if ((topNo > this.titleOffsetTop[i] && topNo < this.titleOffsetTop[i + 1]) || topNo > this.titleOffsetTop[len - 1]) {
              this.$refs.titleBox.style.transform = `translate3d(0px, 0px, 0px)`
              if (this.activeIndex !== this.titleOffsetTopTxt[i]) {
                this.activeIndex = this.titleOffsetTopTxt[i]
                // this.singLetterCrt = i
              }
            }
          }
        }
        this.titleboxshow = true
      }
    },
    moveTouchbar(e) {
    // TODO:info:Touchmove获取当前触摸的Dom节点 百度查到的代码
      var touchedLocation = e.changedTouches[0]
      let realTarget = document.elementFromPoint(touchedLocation.clientX, touchedLocation.clientY).innerText
      this.activeIndex = realTarget
      let ele = document.getElementById(realTarget)
      this.$refs.scroll.scrollToElement(ele)
    },
    toDiscDetail(singer, img) {
      this.$router.push({name: 'discDetail', params: {id: singer + '-' + img}})
    }
  },

  computed: {},
  created() {
    this.singerList = getSingerList()
    for (let i in this.singerList) {
      this.singerIndex.push(i)
    }
  },
  mounted() {
    let arr = []
    let arrTxt = []
    let self = this
    this.$nextTick(() => {
      setTimeout(() => {
        let hot = document.getElementById('#')
        self.resetTitlePos = hot.getBoundingClientRect().top

        self.$refs.title.forEach((v, i) => {
          arr.push(v.offsetTop)
          arrTxt.push(v.innerText)
          if (!self.titleOffsetHeight) {
            self.titleOffsetHeight = v.clientHeight
          }
        })
        self.titleOffsetTop = arr
        this.titleOffsetTopTxt = arrTxt
      }, 200)
    })
  }
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.singers
  height 100%
  overflow hidden
  position relative
  .b-scroll
    overflow hidden
    .g-wrapper
      padding 1px 0
      .group
        .singer
          width $container-width
          margin 20px auto
          display flex
          align-items center
          img
            border-radius 50%
            width 50px
            flex 0 0 50px
          .name
            flex 1
            display flex
            align-items center
            margin-left 20px
            font-size $font-size-medium-x
            color $color-text-l
  .title-box
    position absolute
    z-index 2
    top -1px
    left 0
    width 100%
  .touch-bar
    position fixed
    top 60%
    transform translateY(-50%)
    right 5px
    background-color $color-background-d
    padding 10px 0
    border-radius 20px
    .letter
      color $color-text-l
      text-align center
      font-size $font-size-small
      padding 3px
      &.active
        color $color-theme
.title-wrap,.title-box
  overflow hidden
  width 100%
  background-color $color-highlight-background
  .title
    width $container-width
    margin 5px auto
    padding 5px 0
    font-size $font-size-medium
    color $color-text-l
</style>
