/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Chen Hongwei
 *
 * Created at     : 2018-09-27 16:58:04
 * Last modified  : 2018-11-01 16:22:43
 */

export const common = {
  // 设置cookie
  setCookie: function (cname, value, expires) {
    let date = new Date()
    date.setTime(date.getTime() + expires * 60 * 1000)
    document.cookie = cname + '=' + escape(value) + ';expires=' + date.toUTCString()
  },
  // 获取cookie
  getCookie: function (cname) {
    if (document.cookie.length > 0) {
      let cstart = document.cookie.indexOf(cname + '=')
      if (cstart !== -1) {
        cstart = cstart + cname.length + 1
        let cend = document.cookie.indexOf(';', cstart)
        if (cend === -1) {
          cend = document.cookie.length
        }
        return unescape(document.cookie.substring(cstart, cend))
      }
    }
    return ''
  },
  // 删除cookie
  delCookie: function (cname, value, expires) {
    this.setCookie(cname, '', -1)
  },
  // 数组中匹配单个字符串
  searchStr: function (str, arr) {
    let newList = []
    let startChar = str.charAt(0)
    let strLength = str.length
    for (let i = 0; i < arr.length; i++) {
      let isExist = false
      let obj = arr[i]
      for (let key in obj) {
        if (typeof (obj[key]) === 'function') {
          obj[key]()
        } else {
          let keyValue = ''
          if (obj[key] !== null && typeof (obj[key]) === 'string') {
            keyValue = obj[key]
          } else if (obj[key] !== null && typeof (obj[key]) !== 'string') {
            keyValue = JSON.stringify(obj[key])
          }
          for (let j = 0; j < keyValue.length; j++) {
            if (keyValue.charAt(j) === startChar) {
              if (keyValue.substring(j).substring(0, strLength) === str) {
                isExist = true
                break
              }
            }
          }
        }
      }
      if (isExist === true) {
        newList.push(obj)
      }
    }
    return newList
  },
  // 数组中匹配多个字符串
  searchMoreStr: function (str, table) {
    let searchList = str.split('&')
    let newList = []
    searchList.map((item, index) => {
      if (index === 0) {
        newList = this.searchStr(item, table)
      } else {
        newList = this.searchStr(item, newList)
      }
    })
    return newList
  },
  // 日期格式化为 xxxx-xx-xx
  transferDate: function (date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    return year + '-' + month + '-' + day
  },
  // 日期格式化为 xxxx-xx-xx xx:xx:xx
  formatDateTime: function (theDate) {
    var _year = theDate.getFullYear()
    var _month = theDate.getMonth() + 1
    var _date = theDate.getDate()
    var _hour = theDate.getHours()
    var _minute = theDate.getMinutes()
    var _second = theDate.getSeconds()
    if (_month < 10) { _month = '0' + _month }
    if (_date < 10) { _date = '0' + _date }
    if (_hour < 10) { _hour = '0' + _hour }
    if (_minute < 10) { _minute = '0' + _minute }
    if (_second < 10) { _second = '0' + _second }
    return _year + '-' + _month + '-' + _date + ' ' + _hour + ':' + _minute + ':' + _second
  },
  // 网络请求失败处理
  httpError: function (error) {
    console.log('错误信息', error)
  }
}
