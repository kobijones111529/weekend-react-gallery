import './App.css'
// import * as DummyAPI from '../../api/dummy'
import * as ServerAPI from '../../api/server'
import React, { useEffect, useState } from 'react'
import AddPhotoForm from '../AddPhotoForm/AddPhotoForm'
import GalleryList from '../GalleryList/GalleryList'
import Stack from '@mui/material/Stack'

function App () {
  const getGallery = ServerAPI.getGallery
  const addLike = ServerAPI.addLike
  const addPhoto = ServerAPI.addPhoto

  const [gallery, setGallery] = useState([])

  const handleAddLike = id => {
    addLike(id)
      .then(getGallery)
      .then(gallery => {
        setGallery(gallery)
      })
  }

  const handleAddPhoto = photo => {
    addPhoto(photo)
      .then(getGallery)
      .then(gallery => {
        setGallery(gallery)
      })
  }

  useEffect(() => async () => {
    const gallery = await getGallery()
    setGallery(gallery)
  }, [])

  return (
    <Stack className="App" spacing={4}>
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <AddPhotoForm addPhoto={handleAddPhoto} />
      <GalleryList gallery={gallery} addLike={handleAddLike} />
    </Stack>
  )
}

export default App
