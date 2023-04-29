import './App.css'
import * as ServerAPI from '../../api/server'
import React, { useEffect, useState } from 'react'
import GallaryList from '../GallaryList/GallaryList'

function App () {
  const getGallary = ServerAPI.getGallary
  const addLike = ServerAPI.addLike

  const [gallary, setGallary] = useState([])

  const handleAddLike = id => {
    addLike(id)
      .then(() => getGallary())
      .then(gallary => {
        setGallary(gallary)
      })
  }

  useEffect(() => async () => {
    const gallary = await getGallary()
    setGallary(gallary)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GallaryList gallary={gallary} addLike={handleAddLike} />
    </div>
  )
}

export default App
