import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import ThemeContext from '../context/ThemeContext'

function Switch({name, val, setVal, ...props}) {
  const {color} = useContext(ThemeContext)
  return (
    <div  {...props}>
      <div className="form-check form-switch d-flex align-items-center" >
        <input
          className="form-check-input me-2"
          type="checkbox"
          id={`switch_${name}`}
          value={val}
          onChange={(e) => setVal(e.target.checked)}
          style={{
            width: "4rem",
            height: "2rem",
          }}
        />
        <label
          className="form-check-label theme-transition"
          htmlFor={`switch_${name}`}
          style={{color}}
        >
          Dark mode
        </label>
      </div>
    </div>
  )
}

Switch.propTypes = {
  val: PropTypes.bool.isRequired,
  setVal: PropTypes.func.isRequired,
}

export default Switch

