import React from 'react'
import GradientWord from './GradientWord'

import * as vars from '../utils/constants'
//import vars from '../assets/style/configs/_variables.scss'
import styles from './Sidebar.module.scss'
import SocialNetworkBtns from './SocialNetworkBtns'

function Sidebar(props) {

  return (
    <header className={styles.sidebar}>
      <GradientWord
        color1={vars.GRADIENT_COLOR1}
        color2={vars.GRADIENT_COLOR2}
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
    </header>
  )
}

export default Sidebar

