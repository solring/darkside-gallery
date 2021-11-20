import fetchSlicer from './baseFetchSlicer'
import { NewArticle } from '../api/api'

const postSlicer = fetchSlicer('post')

export const newArticle = postSlicer.createFetchApi(NewArticle)

export const postSlice = postSlicer.createFetchSlice(
  {
    ok: false
  },
  {
    clear: state => {
      state.ok = false
    }
  },
  (state, payload) => {
    state.ok = payload.ok
  },
)

export const { reset, clear } = postSlice.actions
export default postSlice.reducer