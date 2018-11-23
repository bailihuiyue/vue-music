import { key } from './config'
import { getData, getText } from '../common/js/utils'

export function getLyric(url) {
  return getText(url, 'lyric')
}

export function getSongDetail(id) {
  const url = 'https://api.bzqll.com/music/tencent/song'

  return getData(url, {
    key,
    id
  }, 'songDetail')
}
