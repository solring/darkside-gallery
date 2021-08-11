import React from 'react'
import PropTypes from 'prop-types'

import gradient from '../utils/gradient'

function GradientWord({color1, color2, ...props}) {

  const style = {
    display: "inline-block",
    background: gradient(color1, color2),
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

GradientWord.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
}

export default GradientWord

