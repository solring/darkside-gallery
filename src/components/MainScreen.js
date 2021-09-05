import React, { useState } from 'react'
import { useMedia } from 'react-use'

import Sidebar from './Sidebar'
import Gallery from './Gallery'
import Switch from './Switch'
import ThemeContext, { themes } from '../context/ThemeContext'
import Icon from './Icon'

import * as vars from '../utils/constants'

function MainScreen() {

  const [dark, setDark] = useState(false)

  const isPhone = useMedia(`(max-width: ${vars.BS_BREAKPOINT_MD})`)

  return (
    <ThemeContext.Provider value={dark ? themes.dark : themes.default}>
      <div className="row g-0 disable-select">
        <div className="col-md-3">
          <Sidebar fullscreen={isPhone} footer={
            <Switch
              val={dark}
              setVal={setDark}
              style={{ zIndex: 1070 }}
              txt={
                <Icon name="dark_mode" size="lg"/>
              }
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

