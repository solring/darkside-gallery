import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchSlicer from './baseFetchSlicer'
import { GetArticles } from '../api/api'

// mock data
import * as mock from '../utils/mockdata'

const articleslicer = fetchSlicer('articles')

export const fetchArticle = articleslicer.createFetchApi(GetArticles)

export const articleslice = articleslicer.createFetchSlice(
  {
    tags: [],
    articles: [],
    next: 0,
  },
  {
    clear: state => {
      state.tags = []
      state.articles = []
      state.next = 0
    }
  },
  (state, payload) => {
    state.tags = payload.data.tags
    state.articles = state.articles.concat(payload.data.list)
    state.next = payload.data.next
  },
)

export const { reset, clear } = articleslice.actions
export default articleslice.reducer