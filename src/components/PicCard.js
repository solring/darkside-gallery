import React from 'react'
import PropTypes from 'prop-types'

import styles from './PicCard.module.scss'

function PicCard(props) {
  const {img, height, title, desc, tags} = props

  const style={
    height: `${height}px`,
  }

  return (
    <article className={styles.card} style={style}>
      <img
        src={img}
        alt={title}
      />
      <div className={styles.overlay}>
        <div className={`p-3 ${styles.text}`}>
          <h6>{title}</h6>
          <p className={styles.subtitle}>{desc}</p>
          <div>
            {tags.map((t, i) => (
              <small key={i} className="me-1">{t}</small>
            ))}
          </div>
        </div>
      </div>

    </article>
  )
}

PicCard.propTypes = {
  img: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string,
  dest: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default PicCard

