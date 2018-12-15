import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Recommend from '../pages/recommend.vue'
Vue.use(Router)

export default new Router({
  // TODO:tip:感觉pushState适合网址路径为根路径的网站,想github这种嵌套比较多的,会出现很多问题
  mode: 'history', // 路由使用#还是pushState
  routes: [
    {
      // TODO:learn:路由问题:初始路径:要写初始的url,比如网址是localhost,那么就写成/,如果是www.123.com/vue,那么就写成/vue
      path: '/doc',
      name: 'index',
      component: Index,
      redirect: '/recommend',
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend,
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
    },
    {
      path: '*',
      redirect: '/recommend',
      meta: {
        keepAlive: true
      }
    }
  ]
})
