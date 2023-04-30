import React, { useState } from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

function AddPhotoForm (props) {
  const [pathInput, setPathInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const handleAdd = event => {
    event.preventDefault()

    props.addPhoto({ path: pathInput, description: descriptionInput })
  }

  return (
    <form onSubmit={handleAdd}>
      <TextField variant="outlined" label={'Path'} value={pathInput} onChange={event => setPathInput(event.target.value)} />
      <TextField variant="outlined" label={'Description'} value={descriptionInput} onChange={event => setDescriptionInput(event.target.value)} />
      <Button variant="contained" type="submit">Add photo</Button>
    </form>
  )
}

AddPhotoForm.propTypes = {
  addPhoto: PropTypes.func.isRequired
}

export default AddPhotoForm
