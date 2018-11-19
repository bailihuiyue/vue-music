import * as types from './mutation-types'

export default {
  [types.SET_SONG_DETAIL](state, songDetail) {
    state.stateSongDetail = songDetail
  }
}
