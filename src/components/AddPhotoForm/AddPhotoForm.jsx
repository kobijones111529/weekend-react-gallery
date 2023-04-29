import React, { useState } from 'react'

function AddPhotoForm () {
  const [pathInput, setPathInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const handleAdd = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleAdd}>
      <input placeholder={'Path'} value={pathInput} onChange={event => setPathInput(event.target.value)} />
      <input placeholder={'Description'} value={descriptionInput} onChange={event => setDescriptionInput(event.target.value)} />
      <button type="submit">Add photo</button>
    </form>
  )
}

export default AddPhotoForm
