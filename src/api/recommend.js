import jsonp from 'common/js/jsonp'
import { commonParams, options, key } from './config'
// import axios from 'axios'
import { getData } from '../common/js/utils'
import { getRecommendMock, getDiscListMock, getSongListMock, isOnLine, mockData } from '../api/mock'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  if (!isOnLine) {
    return mockData(getRecommendMock)
  }
  return jsonp(url, data, options)
}

// 热歌列表  流派/最热
export function getDiscList() {
  const url = 'https://api.bzqll.com/music/tencent/hotSongList'
  const data = {
    key,
    categoryId: '6',
    sortId: '3',
    limit: '60'
  }
  if (!isOnLine) {
    return mockData(getDiscListMock)
  }
  return getData(url, data)
}

// 歌曲列表(热歌的内容)
export function getSongList(id) {
  const url = 'https://api.bzqll.com/music/tencent/songList'
  const data = { key, id }
  if (!isOnLine) {
    return mockData(getSongListMock)
  }
  return getData(url, data)
}
