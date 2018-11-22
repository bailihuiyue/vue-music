import * as types from './mutation-types'

export default {
  [types.SET_SONG_DETAIL](state, songDetail) {
    state.stateSongDetail = songDetail
  },
  [types.SET_SONG_LIST](state, songList) {
    state.stateSongList = songList
  },
  [types.SET_CURRENT_SONG_INDEX](state, currentSongIndex) {
    state.stateCurrentSongIndex = currentSongIndex
  }
}
