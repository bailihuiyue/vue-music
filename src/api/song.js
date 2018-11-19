import {commonParams, key} from './config'
import {getData} from '../common/js/utils'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongDetail(id) {
  const url = 'https://api.bzqll.com/music/tencent/song'

  return getData(url, {
    key,
    id
  }, 'songDetail')
}
