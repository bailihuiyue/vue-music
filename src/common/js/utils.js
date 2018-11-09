import axios from 'axios'
export const getData = (url, data, name) => {
  // TODO:learn:了解两种封装方式的区别
  // TODO:question:为什么 return axios.get 前面非要加个return?
  return axios.get(url, {
    params: data
  }).then((res) => {
    // debugger
    if (res.data.code === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res.data.msg)
    }
  }).catch((err) => {
    return Promise.reject(err)
  })

  // return new Promise(function(resolve, reject) {
  //   axios.get(url, {
  //     params: data
  //   }).then((res) => {
  //     if (res.code === 200) {
  //       resolve(res.data)
  //     } else {
  //       reject(res.msg)
  //     }
  //   }).catch((err) => {
  //     reject(err)
  //   })
  // })
}

// 判断是添加哪种css3类型
export function prefixStyle(style) {
  let elementStyle = document.createElement('div').style

  let vendor = (() => {
    let transformNames = {
      webkit: 'webkitTransform',
      Moz: 'MozTransform',
      O: 'OTransform',
      ms: 'msTransform',
      standard: 'transform'
    }

    for (let key in transformNames) {
      if (elementStyle[transformNames[key]] !== undefined) {
        return key
      }
    }

    return false
  })()

  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
