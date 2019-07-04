import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import Home from '../components/home/Home.vue'
import Table from '../components/container/Table.vue'
import Table1 from '../components/container/Table1.vue'
import Progress from '../components/container/Progress.vue'
import D3 from '../components/container/D3.vue'
import D3Graph from '../components/container/D3Graph.vue'
import Echarts from '../components/container/Echarts.vue'
import Websocket from '../components/container/Websocket.vue'
import Graph from '../components/graph/Graph.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '/table', name: 'table', component: Table},
        {path: '/table1', name: 'table1', component: Table1},
        {path: '/progress', name: 'progress', component: Progress},
        {path: '/d3_demo', name: 'd3_demo', component: D3},
        {path: '/echarts_graph', name: 'echarts_graph', component: D3Graph},
        { path: '/websocket', name: 'websocket', component: Websocket},
        {path: '/echarts_demo', name: 'echarts_demo', component: Echarts}
        // {path: '*', redirect: '/table'}
      ]},
    {path: '/graph', name: 'graph', component: Graph},
    // 当用户输入的路径不存在时，利用redirect会跳转到主页
    {path: '*', redirect: '/'}
  ],
  mode: 'hash'
})
