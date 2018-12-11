import jsonp from 'common/js/jsonp'
import {commonParams, options, key} from './config'
import {getData} from '../common/js/utils'
export function getTopList() {
  return getData('https://api.bzqll.com/music/tencent/hotSongList', {
    key,
    categoryId: '165',
    sortId: '3',
    limit: '10'
  }, 'getTopList')
}

// 下面的接口都用不上了,因为QQ改了防盗链,没时间解析了,有空再说吧
export function getRankList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

// import {getLyric} from 'api/song'
// import {ERR_OK} from 'api/config'
// import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  // getLyric() {
  //   if (this.lyric) {
  //     return Promise.resolve(this.lyric)
  //   }

  //   return new Promise((resolve, reject) => {
  //     getLyric(this.mid).then((res) => {
  //       if (res.retcode === ERR_OK) {
  //         this.lyric = Base64.decode(res.lyric)
  //         resolve(this.lyric)
  //       } else {
  //         reject('no lyric')
  //       }
  //     })
  //   })
  // }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`
  })
}

export function getSongToken(musicData) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    format: 'json205361747',
    platform: 'yqq',
    cid: '205361747',
    songmid: '003lghpv0jfFXG',
    filename: `C400${musicData.mid}.m4a`,
    guid: '126548448'
  })

  return jsonp(url, data, options)
}

export function getSongs(musicData) {
  return getSongToken(musicData).then(res => {
    const url = `http://ws.stream.qqmusic.qq.com/C400${musicData.mid}.m4a`

    const data = Object.assign({}, commonParams, {
      fromtag: '0',
      guid: '126548448',
      vkey: getSongToken(musicData)
    })

    return jsonp(url, data, options)
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
