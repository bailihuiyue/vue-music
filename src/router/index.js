import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // 路由使用#还是pushState
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../pages/index.vue'], resolve),
      redirect: '/recommend',
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: resolve => require(['../pages/recommend.vue'], resolve),
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/singers',
          name: 'singers',
          component: resolve => require(['../pages/singers.vue'], resolve),
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/rank',
          name: 'rank',
          component: resolve => require(['../pages/rank.vue'], resolve),
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/searchSongs',
          name: 'searchSongs',
          component: resolve => require(['../pages/searchSongs.vue'], resolve),
          meta: {
            keepAlive: true
          }
        }
      ]
      // TODO:learn:理论上不应该加/discDetail应该是discDetail,前面加/是一种简便写法
      // 参看网址:https://www.jianshu.com/p/6304fd09c515
      // children: [
      //   {
      //     path: 'discDetail/:id',
      //     component: DiscDetail
      //   }
      // ]
    },
    {
      path: '/discDetail/:id',
      name: 'discDetail',
      component: resolve => require(['../pages/discDetail.vue'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['../pages/user.vue'], resolve),
      meta: {
        keepAlive: true
      }
    }
  ]
})
