import React from 'react'
import PropTypes from 'prop-types'

import { hexToRGBAStr } from '../utils/colorUtils'
import { GRADIENT_COLOR1, GRADIENT_COLOR2 } from '../utils/constants'

import styles from './NavTabs.module.scss'
import { Collapse } from 'react-bootstrap'

import Tag from './Tag'

const trangle = (
  <svg height="24" width="32" xmlns="http://www.w3.org/2000/svg">
		<polygon points="16,0 0,24 32,24" className={styles.markerSVG}/>
  </svg>
)

function NavTabs(props) {
  const { items, selected, selectedTags, onSelect, onTagSelect, scrollPos = 0 } = props

  const tags = (selected >= 0 && selected < items.length) ?
                items[selected].tags : []
  const toggle = tags && tags.length > 0;

  // styles
  const PADDING_TOP = 48
  const opacity = Math.max( (Math.min(scrollPos, PADDING_TOP)/PADDING_TOP).toFixed(2) - 0.2 , 0)

  const bg = {
    background: `linear-gradient(${hexToRGBAStr(GRADIENT_COLOR1, opacity)}, ${hexToRGBAStr(GRADIENT_COLOR2, opacity)})`,
  }

  if (!items) return <div></div>

  return (
    <nav className={styles.navtabs} style={bg}>

      <ul role="tablist" className={styles.inner}>
        {items.map((item, idx) => (
          <li key={idx} role="tab" className="d-inline-block">

            <a className={`
              hvr-underline-from-center
              ${styles.item}
              ${selected === idx ? "active" : ""}
            `}
              onClick={() => onSelect(idx)}>
              {item.title}
            </a>

            <div className={styles.markerWrap}>
              <div className={`
                text-center
                ${styles.marker}
                ${selected === idx && toggle ? styles.show : ""}
              `}>
                {trangle}
              </div>
            </div>

          </li>
        ))}
      </ul>
      <Collapse in={toggle} role="tabpanel" className="bg-light">
        <div>{/* Empty div is essential */}

        <div className="container">
          <div className="d-flex flex-wrap justify-content-center py-3">
            {tags && tags.map((t, idx) => (
              <Tag
                className="me-3"
                key={idx} active={selectedTags && selectedTags[t]}
                onClick={() => onTagSelect(t, idx)}
              >
                {`#${t}`}
              </Tag>
            ))}
          </div>
        </div>

        </div>
      </Collapse>

    </nav>
  )
}

NavTabs.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  selectedTags: PropTypes.object,
  onSelect: PropTypes.func,
  onTagSelect: PropTypes.func,
  scollPos: PropTypes.number,
}

export default NavTabs

