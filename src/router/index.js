import Vue from 'vue'
import Router from 'vue-router'

// import MHeader from '../components/header/m-header.vue'
import User from '../pages/user.vue'
import Recommend from '../pages/recommend.vue'
import DiscDetail from '../pages/discDetail.vue'
import PlayMusic from '../pages/playMusic.vue'
Vue.use(Router)

export default new Router({
  mode: 'history', // 路由使用#还是pushState
  routes: [
    {
      path: '/',
      name: 'index',
      component: Recommend,
      // TODO:learn:理论上不应该加/discDetail应该是discDetail,前面加/是一种简便写法
      // 参看网址:https://www.jianshu.com/p/6304fd09c515
      children: [
        {
          path: '/discDetail/:id',
          component: DiscDetail,
          children: [
            {
              path: '/playMusic/:id',
              component: PlayMusic
            }
          ]
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
