import { key } from './config'
import { getData, getText } from '../common/js/utils'
import { getLyricMock, searchSongMock, isOnLine, mockData } from '../api/mock'
export function getLyric(url) {
  if (!isOnLine) {
    return mockData(getLyricMock)
  }
  return getText(url, 'lyric')
}

export function getSongDetail(id) {
  const url = 'https://api.bzqll.com/music/tencent/song'

  return getData(url, {
    key,
    id
  }, 'songDetail')
}

export function searchSong(name) {
  const url = 'https://api.bzqll.com/music/tencent/search'
  if (!isOnLine) {
    return mockData(searchSongMock)
  }
  return getData(url, {
    key,
    s: name,
    limit: 60,
    type: 'song',
    offset: 0
  }, 'songDetail')
}
