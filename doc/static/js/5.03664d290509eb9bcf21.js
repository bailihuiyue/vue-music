webpackJsonp([5],{"4Bsh":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("Zrlr"),i("woOf"),i("Gak4");var a=i("T452"),e=i("fdFc");function n(){return Object(e.d)("https://api.bzqll.com/music/tencent/hotSongList",{key:a.b,categoryId:"165",sortId:"3",limit:"10"},"getTopList")}var o=i("bh5B"),c=(o.a,{data:function(){return{topList:[]}},components:{scroll:o.a},methods:{},computed:{},created:function(){var t=this;n().then(function(s){200===s.code?t.topList=s.data:t.$toast("获取排行失败,请重试!")})},mounted:function(){}}),r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"rank"},[t.topList.length?i("scroll",{staticStyle:{overflow:"hidden"},attrs:{data:t.topList}},[i("div",{staticClass:"top-list"},t._l(t.topList,function(s){return i("router-link",{key:s.id,staticClass:"top-item",attrs:{to:"/discDetail/"+s.id}},[i("img",{attrs:{src:s.pic,alt:""}}),t._v(" "),i("div",{staticClass:"song-info"},[i("div",{staticClass:"song"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"song"},[t._v("作者:"+t._s(s.creator))]),t._v(" "),i("div",{staticClass:"song"},[t._v("播放次数:"+t._s(":"+s.playCount))])])])}))]):t._e()],1)},staticRenderFns:[]};var l=i("VU/8")(c,r,!1,function(t){i("SvVN")},"data-v-4e4a7cfb",null);s.default=l.exports},SvVN:function(t,s){}});
//# sourceMappingURL=5.03664d290509eb9bcf21.js.map