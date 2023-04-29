import './App.css'
import * as DummyAPI from '../../api/dummy'
import React, { useEffect, useState } from 'react'
import GallaryList from '../GallaryList/GallaryList'

function App () {
  const getGallary = DummyAPI.getGallary
  const addLike = DummyAPI.addLike

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
