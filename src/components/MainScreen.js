import React from 'react'

import Sidebar from './Sidebar'
import Gallery from './Gallery'

function MainScreen(props) {

  return (
    <div className="row g-0">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Gallery />
      </div>
    </div>
  )
}

export default MainScreen

