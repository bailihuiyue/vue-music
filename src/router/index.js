import Vue from 'vue'
import Router from 'vue-router'

// import MHeader from '../components/header/m-header.vue'
import User from '../pages/user.vue'
import Recommend from '../pages/recommend.vue'
import DiscDetail from '../pages/discDetail.vue'
import Singers from '../pages/singers.vue'
import Index from '../pages/index.vue'
import Rank from '../pages/rank.vue'
import SearchSongs from '../pages/searchSongs.vue'
Vue.use(Router)

export default new Router({
  mode: 'history', // 路由使用#还是pushState
  routes: [
    {
      path: '/',
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
          component: Singers,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/rank',
          name: 'rank',
          component: Rank,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/searchSongs',
          name: 'searchSongs',
          component: SearchSongs,
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
      component: DiscDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        keepAlive: true
      }
    }
  ]
})
