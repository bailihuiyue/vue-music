// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import { LoadingPlugin } from 'vux'
import { Toast } from 'vant'
import store from './store'
import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(LoadingPlugin)
Vue.use(Toast)
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

Vue.prototype.log = console.log

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
