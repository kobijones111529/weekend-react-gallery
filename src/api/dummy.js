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
    return { id: id.next().value, ...image }
  })

export const getGallery = async () => data

export const addLike = async id => {
  data = data.map(item =>
    item.id === id
      ? { ...item, likes: item.likes + 1 }
      : item
  )
  console.log(data)
}
