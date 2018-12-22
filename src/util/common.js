/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Chen Hongwei
 *
 * Created at     : 2018-09-27 16:58:04
 * Last modified  : 2018-12-22 18:22:40
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
    // 要匹配字符串的首个字符
    let startChar = str.charAt(0)
    // 要匹配字符串的字符长度
    let strLength = str.length
    for (let i = 0; i < arr.length; i++) {
      // 默认数组arr中对象arr[i]不存在str
      let isExist = false
      let obj = arr[i]
      for (let key in obj) {
        if (typeof (obj[key]) === 'function') {
          obj[key]()
        } else {
          let keyValue = ''
          // 获取arr[i][key]的值
          if (obj[key] !== null && typeof (obj[key]) === 'string') {
            keyValue = obj[key]
          } else if (obj[key] !== null && typeof (obj[key]) !== 'string') {
            keyValue = JSON.stringify(obj[key])
          }
          // arr[i][key]中的各个位置的字符与str的0位置字符startChar对比如果相等，
          // 在arr[i][key]中从j位置截取与str长度相同的字符，对比是否相等
          for (let j = 0; j < keyValue.length; j++) {
            // 把原有数据转化为小写，输入数据也转化为纯小写，实现模糊匹配
            if (keyValue.charAt(j).toLowerCase() === startChar.toLowerCase()) {
              if (keyValue.substring(j).substring(0, strLength).toLowerCase() === str.toLowerCase()) {
                // 模糊匹配到的字符存在表示arr[i]中存在str
                isExist = true
                break
              }
            }
          }
        }
      }
      // 当arr[i]中存在str时，把arr[i]放入一个新数组
      if (isExist === true) {
        newList.push(obj)
      }
    }
    // 最后返回这个新数组
    return newList
  },
  // 利用filter实现数组中匹配单个字符串
  filterStr: function (str, arr) {
    return arr.filter((item, index) => {
      let strIn = false
      for (let key in item) {
        if (item[key].toLowerCase().match(str.toLowerCase())) {
          strIn = true
          break
        }
      }
      return strIn
    })
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
    if (_month < 10) {
      _month = '0' + _month
    }
    if (_date < 10) {
      _date = '0' + _date
    }
    if (_hour < 10) {
      _hour = '0' + _hour
    }
    if (_minute < 10) {
      _minute = '0' + _minute
    }
    if (_second < 10) {
      _second = '0' + _second
    }
    return _year + '-' + _month + '-' + _date + ' ' + _hour + ':' + _minute + ':' + _second
  },
  // 网络请求失败处理
  // httpError: function (error) {
  //   console.log('错误信息', error)
  // },
  // promise对象封装
  promise: function (response) {
    return new Promise((resolve, reject) => {
      try {
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }
}
