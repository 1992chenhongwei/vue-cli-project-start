import axios from 'axios'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
})
// var qs = require('qs')
// axios 配置
axios.defaults.timeout = 6000000
// axios.defaults.baseURL = 'http://localhost:8088'; //本地服务器

axios.defaults.baseURL = window.location.protocol + '//' + window.location.host

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
    ElementUI.Message({
      message: '网络错误,请联系管理员',
      type: 'error'
    })
    return Promise.reject(error)
  }
)
//   /*得到代办人/
export function httpFindAllSignature () {
  return axios({
    url: '/apmsg/findAllSignature',
    method: 'get'
  })
}

// export function httpFindMessageRecording(pageNum, pageSize, messagerId) {
//     let data = {
//       pageNum,
//       pageSize,
//       messagerId
//     };
//     return axios({
//       url: "/apmsg/findMessageRecording",
//       method: "post",
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded'
//       },
//       data: qs.stringify(data)
//     })
//   }
