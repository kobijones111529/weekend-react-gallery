const id = (function * () {
  for (let i = 1; ; i++) {
    yield i
  }
})()

let galleryItems = [
  { path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 }
]
  .map(photo => {
    return { ...photo, id: id.next().value }
  })

export const getGallery = async () => galleryItems

export const addLike = async id => {
  galleryItems = galleryItems.map(photo =>
    photo.id === id
      ? { ...photo, likes: photo.likes + 1 }
      : photo
  )
}

export const addPhoto = async photo => {
  galleryItems = [...galleryItems, { ...photo, id: id.next().value, likes: 0 }]
}
