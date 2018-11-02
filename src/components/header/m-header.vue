<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
    <!-- TODO:warn:
      页面引入fastClick.js后，滑动H5页面的时候发现谷歌浏览器会报错,如下：
      Unable to preventDefault inside passive event listener due to target being treated as passive.
      因为Chrome及其内核浏览器更新了一项新特性
      解决方案:手动清除默认行为
        document.addEventListener(‘touchmove‘, function (event) {
            event.preventDefault();
        }, {
            passive: false
        });
        url:http://www.mamicode.com/info-detail-2389210.html
    -->
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.m-header
  position relative
  height 44px
  text-align center
  color $color-theme
  font-size 0
  .icon
    display inline-block
    vertical-align top
    margin-top 6px
    width 30px
    height 32px
    margin-right 9px
    bg-image('logo')
    background-size 30px 32px
  .text
    display inline-block
    vertical-align top
    line-height 44px
    font-size $font-size-large
  .mine
    position absolute
    top 0
    right 0
    .icon-mine
      display block
      padding 12px
      font-size 20px
      color $color-theme
</style>
