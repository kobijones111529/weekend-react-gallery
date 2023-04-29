import './App.css'
import * as ServerAPI from '../../api/server'
import React, { useEffect, useState } from 'react'
import GalleryList from '../GalleryList/GalleryList'

function App () {
  const getGallery = ServerAPI.getGallery
  const addLike = ServerAPI.addLike

  const [gallery, setGallery] = useState([])

  const handleAddLike = id => {
    addLike(id)
      .then(() => getGallery())
      .then(gallery => {
        setGallery(gallery)
      })
  }

  useEffect(() => async () => {
    const gallery = await getGallery()
    setGallery(gallery)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList gallery={gallery} addLike={handleAddLike} />
    </div>
  )
}

export default App
