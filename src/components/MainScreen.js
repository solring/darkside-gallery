import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Gallery from './Gallery'

import Switch from './Switch'
import ThemeContext, { themes } from '../context/ThemeContext'

function MainScreen() {

  const [dark, setDark] = useState(false)

  return (
    <ThemeContext.Provider value={dark ? themes.dark : themes.default}>
      <div className="row g-0 disable-select">
        <div className="col-md-3">
          <Sidebar footer={
            <Switch
              val={dark}
              setVal={setDark}
              style={{ zIndex: 1070 }}
            />
          }/>
        </div>
        <div className="col-md-9">
          <Gallery />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default MainScreen

