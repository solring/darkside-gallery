import articleSlice from './reduxSlice/articleSlice'
import { configureStore } from '@reduxjs/toolkit'

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      article: articleSlice,
    }
  })
  return store
}

