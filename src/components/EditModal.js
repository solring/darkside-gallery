import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Modal, Button } from 'react-bootstrap'

import { newArticle } from '../reduxSlice/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AJAX_STATUES_FAILED, AJAX_STATUES_LOADING, AJAX_STATUES_SUCCESS } from '../reduxSlice/fetchStatus'

export default function EditModal(props) {
  const { toggle, setToggle } = props

  // Redux
  const dispatch = useDispatch()
  const {ok, status} = useSelector(state => state.post)

  // Form data
  const [title, setTitle] = useState("")
  const [img, setImg] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")

  const disableForm = (status === AJAX_STATUES_LOADING || status === AJAX_STATUES_SUCCESS)
  const postSuccess = (status === AJAX_STATUES_SUCCESS && ok)
  const postFail = (status === AJAX_STATUES_FAILED || (status === AJAX_STATUES_SUCCESS && !ok))

  const handleClose = useCallback(() => {
    setTitle("")
    setImg("")
    setDesc("")
    setCategory("")
    setTags([])

    setToggle(false)
  }, [setToggle])

  const handleSubmit = useCallback(() => {
    console.log("submit: create new article");
    const tagsArr = tags.replaceAll(" ", "").split(",")
    dispatch(newArticle({
      title, img, desc, category, tags: tagsArr
    }))
  }, [title, img, desc, category, tags, dispatch])

  return (
    <Modal show={toggle} onHide={handleClose} backdrop="static">
    <form className="bg-light card shadow-lg">
      <Modal.Header className="text-primary" closeButton>
        <Modal.Title>Create New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { postSuccess &&
          <p className="text-primary">Created article successfully!</p>
        }
        { postFail &&
          <p className="text-danger">Creating article failed! Please try again later.</p>
        }
        <div className="mb-3">
          <label for="newArticleTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="newArticleTitle" placeholder="Title"
            value={title} onChange={(e) => setTitle(e.target.value)} disabled={disableForm}/>
        </div>
        <div className="mb-3">
          <label for="newArticleDescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="newArticleDescription" placeholder="Description"
            value={desc} onChange={(e) => setDesc(e.target.value)} disabled={disableForm}/>
        </div>
        <div className="mb-3">
          <label for="newArticleImage" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="newArticleImage" placeholder="Image URL"
            value={img} onChange={(e) => setImg(e.target.value)} disabled={disableForm}/>
        </div>
        <div className="mb-3">
          <label for="newArticleCategory" className="form-label">Category</label>
          <input type="text" className="form-control" id="newArticleCategory" placeholder="Category"
            value={category} onChange={(e) => setCategory(e.target.value)} disabled={disableForm}/>
        </div>
        <div className="mb-3">
          <label for="newArticleTags" className="form-label">Tags</label>
          <input type="text" className="form-control" id="newArticleTags" placeholder="Tags"
            value={tags} onChange={(e) => setTags(e.target.value)} disabled={disableForm}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={handleSubmit} disabled={disableForm}>
          Create
        </Button>
      </Modal.Footer>
    </form>
    </Modal>
  )
}

EditModal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func,
}