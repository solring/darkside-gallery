import React from 'react'
import GradientWord from './GradientWord'

import * as vars from '../utils/constants'
//import vars from '../assets/style/configs/_variables.scss'
import styles from './Sidebar.module.scss'

function Sidebar(props) {

  const socialMedia = [
    ["github", "https://github.com/solring"],
    ["twitter", "https://twitter.com/burntgoldfish"],
    ["tumblr", "https://sunburnt-goldfish.tumblr.com"],
  ]

  return (
    <nav className={styles.sidebar}>
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
      <ul className="mt-4">
        {socialMedia.map(([name, link], idx) => (
          <li key={idx} className="d-inline-block me-3">
            <a className={`icon icon-${name}`} href={link}></a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar

