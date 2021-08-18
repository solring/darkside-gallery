import fetchSlicer from './baseFetchSlicer'
import { GetArticles } from '../api/api'

const articleslicer = fetchSlicer('articles')

export const fetchArticle = articleslicer.createFetchApi(GetArticles)

export const articleslice = articleslicer.createFetchSlice(
  {
    tags: [],
    articles: [],
    next: 0,
    exhausted: false,
  },
  {
    clear: state => {
      state.tags = []
      state.articles = []
      state.next = 0
      state.exhausted = false
    }
  },
  (state, payload) => {
    let articles = payload.data.list
    state.tags = payload.data.tags
    state.articles = state.articles.concat(articles)
    state.next = payload.data.next
    if (articles.length === 0) state.exhausted = true
  },
)

export const { reset, clear } = articleslice.actions
export default articleslice.reducer