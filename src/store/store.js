
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

// 在Vue中使用Vuex
Vue.use(Vuex)
Vue.use(ElementUI)
export const store = new Vuex.Store({
  state: {
    // 设置属性
    loading: Object,
    defaultAside: {}
  },
  getters: {
    // 获取属性状态
  },
  mutations: {
    // 改变属性的状态
    startloading (state) {
      state.loading = ElementUI.Loading.service({
        lock: true,
        text: '正在拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.5)',
        customClass: 'loadingsize'
      })
    },
    setAside (state, data) {
      state.defaultAside = data
    }
  },
  actions: {
    // 应用mutations
  }
})
