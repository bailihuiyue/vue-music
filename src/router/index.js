import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '../components/header/m-header.vue'
Vue.use(Router)

export default new Router({
  mode:"history",//路由使用#还是pushState
  routes: [
    {
      path: '/user',
      name: 'user',
      component: MHeader
    }
  ]
})
