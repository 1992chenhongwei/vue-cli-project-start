import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import Home from '../components/home/Home.vue'
import ServiceDelivery from '../components/serviceDelivery/serviceDelivery.vue'

// 二级路由
import ServiceQuery from '../components/serviceDelivery/children/serviceQuery.vue'
import ServiceManagement from '../components/serviceDelivery/children/serviceManagement.vue'

// 三级路由
import ServiceQuery1 from '../components/serviceDelivery/children/serviceQuery/serviceQuery1.vue'
import ServiceQuery2 from '../components/serviceDelivery/children/serviceQuery/serviceQuery2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/serviceDelivery',
      redirect: '/serviceDelivery/serviceQuery',
      name: 'serviceDelivery',
      component: ServiceDelivery,
      // serviceDelivery的子路由
      children: [
        {path: '/serviceDelivery/serviceQuery',
          name: 'serviceQuery',
          component: ServiceQuery,
          children: [
            {path: '/serviceDelivery/serviceQuery/serviceQuery1', name: 'serviceQuery1', component: ServiceQuery1},
            {path: '/serviceDelivery/serviceQuery/serviceQuery2', name: 'serviceQuery2', component: ServiceQuery2}
          ]
        },
        {path: '/serviceDelivery/serviceManagement', name: 'serviceManagement', component: ServiceManagement}
      ]
    },
    // 当用户输入的路径不存在时，利用redirect会跳转到主页
    {path: '*', redirect: '/'}
  ],
  mode: 'hash'
  // scrollBehavior: (to, from, savedPosition) => {
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
  // }
})
