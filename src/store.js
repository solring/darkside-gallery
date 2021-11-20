import articleSlice from './reduxSlice/articleSlice'
import postSlice from './reduxSlice/postSlice'
import { configureStore } from '@reduxjs/toolkit'

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      article: articleSlice,
      post: postSlice,
    },
    preloadedState
  })
  return store
}

