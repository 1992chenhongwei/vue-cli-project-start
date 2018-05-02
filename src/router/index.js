import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'

// 二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'

// 三级路由
import Phone from '../components/about/contact/Phone'
import PhoneName from '../components/about/contact/PhoneName'

Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {path: '/',
      name: 'home',
      // 路由复用
      components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'history': History,
        'delivery': Delivery
      }
    },
    {path: '/menu', name: 'menu', component: Menu},
    {path: '/admin',
      name: 'admin',
      component: Admin
      // 路由独享守卫
      // beforeEnter: (to, from, next) => {
      // 判断store.getters.isLogin === false
      //   let isLogin = false
      //   if (isLogin) {
      //     next()
      //   } else {
      //     alert('还没有登陆，请先登录')
      //     next('/login')
      //   }
      // }
    },
    {path: '/about',
      name: 'about',
      redirect: '/about/history',
      component: About,
      children: [
      // 二级路由
      // 路由path可以不写/about,显示为localhost:8080/contact
      // {path : "/contact" , name : "contact" , component : Contact},
        {path: '/about/contact',
          name: 'contact',
          redirect: '/about/contact/phonename',
          component: Contact,
          children: [
            // 三级路由
            {path: '/about/contact/phone', name: 'phone', component: Phone},
            {path: '/about/contact/phonename', name: 'phonename', component: PhoneName}
          ]},
        {path: '/about/delivery', name: 'delivery', component: Delivery},
        {path: '/about/history', name: 'history', component: History},
        {path: '/about/orderingGuide', name: 'orderingGuide', component: OrderingGuide}
      ]},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    // 当用户输入的路径不存在时，利用redirect会跳转到主页
    {path: '*', redirect: '/'}
  ],
  mode: 'hash',
  scrollBehavior: (to, from, savedPosition) => {
    // return {x: 0, y: 100}
    // return {selector: '.btn'}
    // if (savedPosition) {
    //   return {
    //     savedPosition
    //   }
    // } else {
    //   return {
    //     x: 0, y: 0
    //   }
    // }
  }
})
