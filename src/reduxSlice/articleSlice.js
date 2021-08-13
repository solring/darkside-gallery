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
    articles: [
      {
        ...mock.mockItem,
        img: "https://64.media.tumblr.com/7df3508436bb9f00689a1dfcf6659580/f0c42c2ea6115e7f-69/s2048x3072/a54dd182628ab7ae787dd184167a5b3b82c88efd.jpg",
        height: 120
      },
      {
        ...mock.mockItem,
        img: "https://64.media.tumblr.com/cd1303e066ab9f2fbee1208b9ac6ee18/f9e8a418e50bad19-86/s2048x3072/6827e7ed8053cb0ddccbe47719c68ced44c4e417.jpg",
        height: 320
      }
    ],
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