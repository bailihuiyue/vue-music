import Vue from 'vue'
import Router from 'vue-router'

// import MHeader from '../components/header/m-header.vue'
import User from '../pages/user.vue'
import Recommend from '../pages/recommend.vue'
import DiscDetail from '../pages/discDetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history', // 路由使用#还是pushState
  routes: [
    {
      path: '/',
      name: 'index',
      component: Recommend
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/recommend/:id',
      name: 'index',
      component: DiscDetail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
