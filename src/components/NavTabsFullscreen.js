import React from 'react'
import PropTypes from 'prop-types'

import { Accordion } from 'react-bootstrap'
import FullScreenCollapse from './FullscreenCollapse'
import Icon from './Icon'
import Tag from './Tag'

import styles from './NavTabsFullscreen.module.scss'

function NavTabsFullscreen(props) {
  const { toggle, items, selected, selectedTags, onSelect, onTagSelect, onClose } = props

  const tags = (selected >= 0 && selected < items.length) ?
                items[selected].tags : []

  if (!items) return <div></div>

  return (
    <FullScreenCollapse
      toggle={toggle}
      onClose={onClose}
      title={
        <span className="text-uppercase">
          <Icon name="filter_list" className="align-middle me-2"/>
          Filter
        </span>
      }
    >
      <div className={styles.wrapper + " shadow-down"}>
        <Accordion>
          { items.map((item, idx) => (
            <Accordion.Item key={idx} eventKey={idx}>
              <Accordion.Header onClick={() => onSelect(idx)}>
                <h6 className="text-uppercase" >{item.title}</h6>
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
      </div>

    </FullScreenCollapse>
  )
}

NavTabsFullscreen.propTypes = {
  toggle: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  selectedTags: PropTypes.object,
  onSelect: PropTypes.func,
  onTagSelect: PropTypes.func,
  onClose: PropTypes.func.isRequired,
}

export default NavTabsFullscreen

