import { addLike, addPhoto, getGallery } from '../modules/gallery.data.js'
import { Router } from 'express'

const router = Router()

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  const galleryId = Number(req.params.id)
  addLike(galleryId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}) // END PUT Route

// GET Route
router.get('/', (req, res) => {
  getGallery()
    .then(gallery => {
      res.send(gallery)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}) // END GET Route

router.post('/', (req, res) => {
  const photo = req.body
  addPhoto(photo)
    .then(() => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
