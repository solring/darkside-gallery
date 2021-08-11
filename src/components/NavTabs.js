import React, {useState} from 'react'
import PropTypes from 'prop-types'

import styles from './NavTabs.module.scss'
import { Collapse } from 'react-bootstrap'

import Tag from './Tag'

const trangle = (
  <svg height="24" width="32" xmlns="http://www.w3.org/2000/svg">
		<polygon points="16,0 0,24 32,24" className={styles.markerSVG}/>
  </svg>
)

function NavTabs(props) {
  const { items, onClick } = props

  const [toggle, setToggle] = useState(false)
  const [tags, setTags] = useState([])
  const [active, setActive] = useState(-1)


  const tabOnClick = (item, idx) => {
    if (!item.tags || item.tags.length === 0) {
      setActive(-1)
      setToggle(false)
      setTags([])
    } else {
      setActive(idx)
      setTags(item.tags)
      setToggle(true)
    }
  }

  return (
    <nav className={styles.navtabs}>

      <ul role="tablist" className={styles.inner}>
        {items.map((item, idx) => (
          <li key={idx} role="tab" className="d-inline-block">
            <a className={styles.item}
              onClick={() => tabOnClick(item, idx)}>
              {item.title}
            </a>
            <div className={styles.markerWrap}>
              <div className={`
                text-center
                ${styles.marker}
                ${active === idx ? styles.show : ""}
              `}>
                {trangle}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Collapse in={toggle} role="tabpanel" className="bg-primary">
        <div>{/* Empty div is essential */}

        <div className="container">
          <div className="d-flex flex-wrap justify-content-center py-3">
            {tags.map((t, idx) => (
              <Tag
                className="me-3"
                key={idx} active={false}
                onClick={() => onClick(t)}
              >
                {t}
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
  onClick: PropTypes.func,
}

export default NavTabs

