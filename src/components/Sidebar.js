import React, { useContext } from 'react'

import GradientWord from './GradientWord'
import SocialNetworkBtns from './SocialNetworkBtns'

import ThemeContext from '../context/ThemeContext'

import styles from './Sidebar.module.scss'

function Sidebar(props) {
  const { footer } = props
  const { gradient1, gradient2, background } = useContext(ThemeContext)

  return (
    <header className={styles.sidebar + " theme-transition"} style={{ background }}>
      <div className="h-100 d-flex flex-column justify-content-between">
        <div className="order-md-2">
          {footer}
        </div>
        <div className="order-md-1">
          <GradientWord
            color1={gradient1}
            color2={gradient2}
          >
            <h1 className={styles.title}>
              Welcome to my<br/>
              Rabit Hole.
            </h1>
          </GradientWord>

          <h5 className="text-muted">Personal Gallery of Solring.</h5>
          <ul className="mt-4 d-inline-block mb-3">
            <SocialNetworkBtns />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Sidebar

