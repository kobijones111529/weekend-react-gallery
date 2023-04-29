import { Router } from 'express'
import galleryItems from '../modules/gallery.data.js'

const router = Router()

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  const galleryId = Number(req.params.id)
  for (const galleryItem of galleryItems) {
    if (galleryItem.id === galleryId) {
      galleryItem.likes += 1
    }
  }
  res.sendStatus(200)
}) // END PUT Route

// GET Route
router.get('/', (req, res) => {
  res.send(galleryItems)
}) // END GET Route

export default router
