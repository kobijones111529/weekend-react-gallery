const id = (function * () {
  for (let i = 1; ; i++) {
    yield i
  }
})()

let data = [
  {
    path: 'images/goat_small.jpg',
    description: 'A image',
    likes: 0
  }
]
  .map(image => {
    return { ...image, id: id.next().value }
  })

export const getGallery = async () => data

export const addLike = async id => {
  data = data.map(item =>
    item.id === id
      ? { ...item, likes: item.likes + 1 }
      : item
  )
}

export const addPhoto = async photo => {
  data = [...data, { ...photo, id: id.next().value, likes: 0 }]
}
