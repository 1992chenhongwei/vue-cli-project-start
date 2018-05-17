// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import './css/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store.js'

// 配置axios的默认路径，请求时无需加上这一部分
axios.defaults.baseURL = 'URL'

// 配置Vue原型，（在任何组件中都可以使用 $axios 来指向axios）
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 实例中应用router，store
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 全局守卫to 代表将要跳转的路由，from代表跳转来源，
// next可以指定跳转的路由对象，为空时代表点击对象，也可指定
// router.beforeEach((to, from, next) => {
// alert('还没有登陆，请先登录')
// console.log(to)
// next()

// 判断store.getters.isLogin === false
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     alert('还没有登陆，请先登录')
//     next('/login')
//   }
// })
