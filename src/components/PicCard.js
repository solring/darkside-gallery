import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Reveal } from 'react-reveal'

import useLongPress from '../hooks/useLongPress'

import styles from './PicCard.module.scss'

function PicCard(props) {
  const {data, onClick} = props
  const {title, img, desc, tags} = data

  const ref = useRef(null)

  let longPress = useLongPress(ref)

  const article = (
    <article ref={ref} className={`shadow-btn ${styles.card} ${props.className}`}>

      <img
        src={img}
        alt={title}
      />

      <div className={styles.overlay} data-longpress={longPress}>
        <div className={`p-3 ${styles.text}`}>
          <h6>{title}</h6>
          <p className={styles.subtitle}>{desc}</p>
          <div className="text-wrap">
            {tags && tags.map((t, i) => (
              <small key={i} className="me-1">#{t}</small>
            ))}
          </div>
        </div>
      </div>

    </article>
  )

  if (onClick) {
    return (
      <Reveal effect="fadeInUp" duration={1000}>
        <button className={styles.btn + " d-block"} onClick={() => onClick(data)}>
          {article}
        </button>
      </Reveal>
    )
  } else {
      <Reveal effect="fadeInUp" duration={1000}>
        {article}
      </Reveal>
  }

}

PicCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  onClick: PropTypes.func,
}

export default PicCard

