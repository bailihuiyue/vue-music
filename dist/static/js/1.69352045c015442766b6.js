webpackJsonp([1],{Mr8L:function(t,s){},ipOP:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),a=i.n(e),l=i("m40h"),n=i("9cIF"),o=i("MqHq"),r=i("RiIE"),c=i("Bkxr"),g=i("bh5B"),h=i("fdFc"),f=i("NYxO"),d=i("flXH"),u=(Object(h.k)("transform"),d.a,o.a,r.a,c.a,g.a,a()({onScroll:function(t){this.scrollY=t.y}},Object(f.c)({setSongList:"SET_SONG_LIST"}),{beforeEnter:function(){var t=this,s=this.$route.params.id;if(Number(s))Object(l.c)(s).then(function(s){t.data=s.data,t.songs=s.data.songs,t.setSongList(s.data.songs)}).catch(function(t){console.log("getSongList:",t)});else{var i=s.split("-")[0],e=s.split("-")[1];Object(n.b)(i).then(function(s){var a="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e+".jpg?max_age=2592000";t.data={title:i,logo:a},t.songs=s.data,t.setSongList(s.data)}).catch(function(s){t.log("discDetail/searchSong:",s)})}},refreshScroll:function(){this.$refs.BScroll.refresh()}}),a()({},Object(f.b)(["isMiniPlayShow"])),Object(h.k)("transform")),m={mixins:[d.a],data:function(){return{data:"",songs:[],scroll:Object,scrollY:0}},components:{musicTitle:o.a,playAll:r.a,musicList:c.a,scroll:g.a},methods:a()({onScroll:function(t){this.scrollY=t.y}},Object(f.c)({setSongList:"SET_SONG_LIST"}),{beforeEnter:function(){var t=this,s=this.$route.params.id;if(Number(s))Object(l.c)(s).then(function(s){t.data=s.data,t.songs=s.data.songs,t.setSongList(s.data.songs)}).catch(function(t){console.log("getSongList:",t)});else{var i=s.split("-")[0],e=s.split("-")[1];Object(n.b)(i).then(function(s){var a="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e+".jpg?max_age=2592000";t.data={title:i,logo:a},t.songs=s.data,t.setSongList(s.data)}).catch(function(s){t.log("discDetail/searchSong:",s)})}},refreshScroll:function(){this.$refs.BScroll.refresh()}}),computed:a()({},Object(f.b)(["isMiniPlayShow"])),created:function(){this.beforeEnter()},mounted:function(){this.imageHeight=this.$refs.bgImg.clientHeight,this.minTransalteY=-(this.imageHeight-40)},watch:{scrollY:function(t){if(this.scrollY>0){var s=1*(this.scrollY/this.$refs.bgImg.offsetHeight).toFixed(2)+1;this.$refs.bgImg.style[u]="scale("+s+")"}var i=Math.max(this.minTransalteY,t);this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",i===this.minTransalteY?(this.$refs.bgImg.style.zIndex=2,this.$refs.bgImg.style.height="40px",this.$refs.playAll.style.display="none"):(this.$refs.bgImg.style.zIndex=0,this.$refs.bgImg.style.height="40%",this.$refs.playAll.style.display="")},isMiniPlayShow:function(){var t=this;this.isMiniPlayShow&&this.$nextTick(function(){t.$refs.BScroll.refresh()})}}},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"left-slide"}},[i("div",{staticClass:"disc-detail-wrap"},[i("div",{staticClass:"disc-detail"},[i("div",{staticClass:"header"},[i("music-title",{attrs:{title:t.data.title}})],1),t._v(" "),i("div",{ref:"bgImg",staticClass:"bg-img"},[i("div",{staticClass:"mask"}),t._v(" "),i("img",{attrs:{src:t.data.logo}}),t._v(" "),i("div",{ref:"playAll",staticClass:"play-all-wrap"},[i("play-all",{attrs:{gold:!0}})],1)]),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("scroll",{ref:"BScroll",staticClass:"song-list-wrap",class:t.isMiniPlayShow?"showMiniPlayer":"",attrs:{probeType:3,listenScroll:!0},on:{scroll:t.onScroll}},[i("div",{staticClass:"song-list"},t._l(t.songs,function(s,e){return i("div",{key:e,staticClass:"song-list-item",on:{click:function(i){t.playMusic(s,e)}}},[i("music-list",{attrs:{singer:s.singer,name:s.name}})],1)}))])],1)])])},staticRenderFns:[]};var b=i("VU/8")(m,p,!1,function(t){i("Mr8L")},"data-v-c304d1e8",null);s.default=b.exports}});
//# sourceMappingURL=1.69352045c015442766b6.js.map