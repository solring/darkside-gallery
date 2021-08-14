import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

import styles from './PicModal.module.scss'

function PicModal(props) {
  const {toggle, onClose, data} = props

  const renderContent = () => {
    if (!data) {
      return (
        <div className="alert alert-warning p-6 mb-0">
          <h6>Oops...There was nothing to load.</h6>
        </div>
      )
    } else {
      return (
        <React.Fragment>
        <img
          src={data.img}
          alt={data.title}
        />
        <div className={styles.textBlk}>
          <h5>{data.title}</h5>
          <p className="mb-1">{data.desc}</p>
          <div className="text-wrap">
            {data.tags && data.tags.map((t, i) => (
              <small key={i} className="me-2">#{t}</small>
            ))}
          </div>
        </div>
        </React.Fragment>
      )
    }
  }

  return (
    <Modal show={toggle} onHide={onClose}>
      <Modal.Body className="p-0 overflow-hidden position-relative">
        {renderContent()}
      </Modal.Body>
    </Modal>
  )
}

PicModal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default PicModal

