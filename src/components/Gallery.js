import React, { useState, useEffect, useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { clear, fetchArticle } from '../reduxSlice/articleSlice'
import { AJAX_STATUES_LOADING } from '../reduxSlice/fetchStatus'

import { useWindowSize } from 'react-use'

import GradientScrollable from './GradientScrollable'
import NavTabs from './NavTabs'
import PicGrid from './PicGrid'
import Loading from './Loading'

import * as vars from '../utils/constants'

/**
 * Filter articles with selected tags
 * @articles : list of article objects retrieved from server
 * @tags     : a dictionary(object) with true/false values,
 *             the names of tags(str) being the keys.
 */
function filterArticle(articles, tags) {
  if(!tags) return articles

  let keys = Object.keys(tags)
  if (keys.map((k) => tags[k]).reduce((a, b) => a || b, false) === false)
    return articles

  return articles.filter((a) => {
    if (!a['tags']) return false

    for (let t of a['tags']) { // for every tag str of the article
      if(tags[t]) return true
    }
    return false
  })
}

function Gallery(props) {

  const {width, height} = useWindowSize();

  // redux
  const {articles, tags:allTags, next, status} = useSelector(state => state.article)
  const dispatch = useDispatch()

  const [scroll, setScroll] = useState([0, 0])
  const cats = vars.categories

  // selected category/tags
  const [cat, setCat] = useState(-1) // :int
  const [tags, setTags] = useState(null) // :object

  // filtered data
  const filtered = useMemo(() => filterArticle(articles, tags), [articles, tags])

  // init
  useEffect(() => {
    dispatch(fetchArticle({
      start: 0,
      category: "", // load all
      length: vars.ARTICLE_BATCH_LEN,
    }))
  }, [])

  // helper functions
  const doLoadArticles = (start, category) => {
    dispatch(fetchArticle({
      start: start,
      category: category,
      length: vars.ARTICLE_BATCH_LEN,
    }))
  }


  // handlers
  const loadMoreArticles = () => {
    doLoadArticles(next, cat === -1 ? "" : cats[cat].title)
  }

  const onSelect = (idx) => {

    // clear articles and reload every time switching category
    dispatch(clear())

    if(cat !== idx) { // if switch category
      setCat(idx)
      if (cats[idx].tags) {
        let obj = {}
        cats[idx].tags.map((t) => { obj[t] = false })
        setTags(obj)
      } else {
        setTags(null)
      }
      doLoadArticles(0, cats[idx].title)
    }
    else {
      setCat(-1)
      setTags(null)
      doLoadArticles(0, "")
    }
  }

  const onTagSelect = (t, idx) => {
    setTags({...tags, [t]: !tags[t]})
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
          items={filtered}
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

