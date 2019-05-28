# vue-music

> vue音乐播放器,使用qq音乐接口
>UI:http://ustbhuangyi.com/music/#/recommend
>技术：vue全家桶,懒加载,代理,eslint配置,vue-lazy-load,图片预加载,flex 布局,mixin,better-scroll等等
>UI库:vant,vux

![图1](https://github.com/bailihuiyue/vue-music/raw/master/doc/1.png)
![图2](https://github.com/bailihuiyue/vue-music/raw/master/doc/2.png)
![图3](https://github.com/bailihuiyue/vue-music/raw/master/doc/3.png)
![图4](https://github.com/bailihuiyue/vue-music/raw/master/doc/4.png)

[DEMO预览](https://bailihuiyue.github.io/vue-music/doc/index.html) 请使用chrome浏览器点击f12模拟手机查看

#### 制作目的: 在开发一个有实用功能的webapp的同时再次熟悉vue,探索着同时使用两个ui库进行开发,过程中也遇到了不少问题所有内容都标记在槽点.txt中

> 提示:项目中有部分注释,方便理解,标注TODO的是自己了解的一些心得,TODO分为四种类型:bug,problem,info,warning
#### info 表示一些提示信息,不是很重要
#### bug表示目前代码编写中发现的问题,但是时间问题,还没有及时修改
#### problem 表示遇到的困难,或者是对angular不了解的情况下写出的代码,解决方案不是很好
#### warning 也表示需要修改的代码

>尚未完成的功能:
    1.目前无法通过地址栏url转发歌曲
    2.随机播放全部功能未开发
    3.部分使用假接口,比较忙没时间抓接口了

>目前bug:
    1.歌曲搜索页面中出现迷你播放器时scroll位置没有刷新
    2.刚刚开发完成大部分功能,bug较多,由于工作原因尚未修复,后期会完善这个webapp的
    3.项目初始化时playMusic.vue会报错Uncaught (in promise) DOMException,听离线音乐时需要点一下暂停再播放

### ~~已经上传node_modules依赖包~~,防止依赖包版本升级导致项目运行出错

######  下载node_modules包请移步:https://github.com/bailihuiyue/node-packages/blob/master/vue-music.rar