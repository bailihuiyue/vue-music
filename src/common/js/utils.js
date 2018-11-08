import axios from 'axios'
export const getData = (url, data) => {
  // TODO:learn:了解两种封装方式的区别
//   axios.get(url, {
//     params: data
//   }).then((res) => {
//     if (res.code === 200) {
//       Promise.resolve(res.data)
//     } else {
//       Promise.reject(res.msg)
//     }
//   }).catch((err) => {
//     Promise.reject(err)
//   })

  return new Promise(function(resolve, reject) {
    axios.get(url, {
      params: data
    }).then((res) => {
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res.msg)
      }
    }).catch((err) => {
      reject(err)
    })
  })
}
