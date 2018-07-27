import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import Home from '../components/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    // 当用户输入的路径不存在时，利用redirect会跳转到主页
    {path: '*', redirect: '/'}
  ],
  mode: 'hash'
})
