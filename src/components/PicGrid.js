import React, { useMemo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useMedia, useIntersection } from 'react-use'

import PicCard from './PicCard'

import {BS_BREAKPOINT_SM, BS_BREAKPOINT_MD, BS_BREAKPOINT_LG} from '../utils/constants'

/**
 * assignRows:
 * Assign each picture item a row using greedy policy.
 * @items : a list of picture items
 * @rowNum : number of rows to assign items to
 */
function assignRows(items, rowNum) {
  if(!items || !rowNum) return []

  let rows = Array(rowNum).fill(0).map(() => [])
  let rowH = Array(rowNum).fill(0)

  // can use min heap but there are only 4 rows at most
  function getShortestRow(){
    if(rowNum === 1) return 0

    let res = 0
    let min = rowH[0]
    for (let i = 1; i < rowH.length; i++) {
      const h = rowH[i];
      if (h < min) {
        min = h
        res = i
      }
    }
    return res
  }

  for (let i = 0; i < items.length; i++) {
    const ele = items[i]
    const r = getShortestRow()
    rows[r].push(ele)
    rowH[r] += ele.height
  }

  return rows
}

function PicGrid(props) {
  const { items, onExausted } = props

  const lastEle = useRef()
  const intersection = useIntersection(lastEle, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  const ratio = intersection ? intersection.intersectionRatio : 0;

  const isPhone = useMedia(`(max-width: ${BS_BREAKPOINT_SM})`)
  const isTablet = useMedia(`(max-width: ${BS_BREAKPOINT_MD})`)
  const isScreen = useMedia(`(max-width: ${BS_BREAKPOINT_LG})`)

  const rowNum = isPhone ? 1
                  : isTablet ? 2
                  : isScreen ? 3 : 4

  const rows = useMemo(() => assignRows(items, rowNum), [items, rowNum])

  // monitor intersection to load more pictures
  useEffect(() => {
    console.log(`ratio: ${ratio}`)
    if (ratio === 1) {
      if(onExausted) onExausted()
    }
  }, [ratio])

  if(!items || items.length === 0) return <div></div>

  return (
    <div className="row g-3 my-3 mx-sm-3">
      {rows.map((row, i) => (
        <div key={i} className="col" >
          {row.map((item, j) => {
            // if last element: register intersection observer
            if (item === items[items.length-1]) {
              return <div ref={lastEle}><PicCard className="mb-3" {...item} /></div>
            }
            return <PicCard className="mb-3" {...item} />
          })}
        </div>
      ))}
    </div>
  )
}

PicGrid.propTypes = {
  items: PropTypes.array.isRequired,
  onExausted: PropTypes.func,
}

export default PicGrid

