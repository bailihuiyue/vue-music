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
      return Promise.reject(new Error(name + ':' + res.data.msg))
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
