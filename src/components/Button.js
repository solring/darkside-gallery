import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

function Button(props) {
  const { onClick } = props

  return (
    <button
      className={`btn ${styles['base']} ${props.className}`}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button

