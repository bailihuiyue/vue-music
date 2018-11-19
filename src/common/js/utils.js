import axios from 'axios'
export const getData = (url, data, name) => {
  // TODO:learn:了解两种封装方式的区别
  // TODO:question:为什么 return axios.get 前面非要加个return? 因为不调用的话是getData.then(),然而getData没有then,
  // 所以无法执行,只return Promise 的话 相当于 getData(){ xxxxx },仍然没有值,必须要getData(){ return xxxxx }才行
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
    return Promise.reject(new Error(name + ': ' + err.response.data.msg))
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

// 图片预加载
export function preLoadImg(src, cb, vue) {
  vue.$vux.loading.show()
  let image = new Image()
  image.onload = () => {
    cb()
    vue.$vux.loading.hide()
  }
  image.onerror = function() {
    vue.$toast('背景图片加载失败!')
    vue.$vux.loading.hide()
  }
  image.src = src
}
