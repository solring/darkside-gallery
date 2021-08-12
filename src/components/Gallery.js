import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchArticle } from '../reduxSlice/articleSlice'
import { AJAX_STATUES_LOADING } from '../reduxSlice/fetchStatus'

import { useWindowSize } from 'react-use'

import GradientScrollable from './GradientScrollable'
import NavTabs from './NavTabs'
import PicGrid from './PicGrid'
import Loading from './Loading'

import * as vars from '../utils/constants'


function Gallery(props) {

  const {width, height} = useWindowSize();

  // redux
  const {articles, tags:allTags, next, status} = useSelector(state => state.article)
  const dispatch = useDispatch()

  const [scroll, setScroll] = useState([0, 0])
  const cats = vars.categories

  // selected category/tags
  const [cat, setCat] = useState(-1)
  const [tags, setTags] = useState(null)

  // init
  useEffect(() => {
    dispatch(fetchArticle({
      start: 0,
      category: "", // load all
      length: vars.ARTICLE_BATCH_LEN,
    }))
  }, [])


  // handlers
  const loadMoreArticles = () => {
    dispatch(fetchArticle({
      start: next,
      category: cats[cat], // current category
      length: vars.ARTICLE_BATCH_LEN,
    }))
  }

  const loadCategory = (category) => {
    // switch category
    dispatch(fetchArticle({
      start: 0,
      category: category,
      length: vars.ARTICLE_BATCH_LEN,
    }))
  }

  const onSelect = (idx) => {
    if(cat !== idx) { // if switch category
      setCat(idx)
      if (cats[idx].tags) {
        setTags(Array(cats[idx].tags.length).fill(false))
      } else {
        setTags(null)
      }
      loadCategory(cats[cat])
    }
    else {
      setCat(-1)
      setTags(null)
    }
  }

  const onTagSelect = (idx) => {
    let arr = tags.slice()
    arr[idx] = !arr[idx]
    setTags(arr)
  }

  const onScroll = (x, y) => {
    setScroll([x, y])
  }


  return (
    <div className="vh-100" >
      <GradientScrollable
        color1={vars.GRADIENT_COLOR1}
        color2={vars.GRADIENT_COLOR2}
        height={height}
        onScroll={onScroll}>

        <NavTabs
          items={cats}
          selected={cat}
          selectedTags={tags}
          onSelect={onSelect}
          onTagSelect={onTagSelect}
          scrollPos={scroll[1]}
        />

        <PicGrid
          items={articles}
          onExausted={loadMoreArticles}
        />
        {status === AJAX_STATUES_LOADING &&
          <Loading />
        }
      </GradientScrollable>
    </div>
  )
}

export default Gallery

