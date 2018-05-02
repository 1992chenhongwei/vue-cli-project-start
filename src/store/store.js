
import Vue from 'vue'
import Vuex from 'vuex'

// 在Vue中使用Vuex
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // 设置属性
    menuItems: {}
  },
  getters: {
    // 获取属性状态
  },
  mutations: {
    // 改变属性的状态
    setMenuItems (state, data) {
      state.menuItems = data
    },
    // 将匹配到的对象在menuItems数组中删除
    removeMenuItem (state, data) {
      state.menuItems.forEach((item, index) => {
        if (item === data) {
          state.menuItems.splice(index, 1)
        }
      })
    }
  },
  actions: {
    // 应用mutations
  }
})
