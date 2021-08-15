import React from 'react'
import PropTypes from 'prop-types'

import { hexToRGBAStr } from '../utils/colorUtils'
import { GRADIENT_COLOR1, GRADIENT_COLOR2 } from '../utils/constants'

import styles from './NavTabs.module.scss'
import { Accordion } from 'react-bootstrap'
import FullScreenCollapse from './FullscreenCollapse'

import Tag from './Tag'

function NavTabsFullscreen(props) {
  const { toggle, items, selected, selectedTags, onSelect, onTagSelect, onClose } = props

  const tags = (selected >= 0 && selected < items.length) ?
                items[selected].tags : []

  if (!items) return <div></div>

  const idx = 1
  return (
    <FullScreenCollapse
      toggle={toggle}
      onClose={onClose}
      title="Categories"
    >
      <Accordion>
        { items.map((item, idx) => (
          <Accordion.Item key={idx} eventKey={idx}>
            <Accordion.Header onClick={() => onSelect(idx)}>
              {item.title}
            </Accordion.Header>
            <Accordion.Body className="text-center" >
              {tags && tags.map((t, idx) => (
                <Tag
                  className="my-2"
                  key={idx} active={selectedTags && selectedTags[t]}
                  onClick={() => onTagSelect(t, idx)}
                >
                  {`#${t}`}
                </Tag>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        )) }
      </Accordion>

    </FullScreenCollapse>
  )
}

NavTabsFullscreen.propTypes = {
  toggle: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  selectedTags: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onTagSelect: PropTypes.func,
  onClose: PropTypes.func.isRequired,
}

export default NavTabsFullscreen

