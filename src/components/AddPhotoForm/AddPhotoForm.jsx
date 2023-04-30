import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddPhotoForm (props) {
  const [pathInput, setPathInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const handleAdd = event => {
    event.preventDefault()

    props.addPhoto({ path: pathInput, description: descriptionInput })
  }

  return (
    <form onSubmit={handleAdd}>
      <input placeholder={'Path'} value={pathInput} onChange={event => setPathInput(event.target.value)} />
      <input placeholder={'Description'} value={descriptionInput} onChange={event => setDescriptionInput(event.target.value)} />
      <button type="submit">Add photo</button>
    </form>
  )
}

AddPhotoForm.propTypes = {
  addPhoto: PropTypes.func.isRequired
}

export default AddPhotoForm
