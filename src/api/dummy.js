const id = (function * () {
  for (let i = 1; ; i++) {
    yield i
  }
})()

const data = [
  {
    path: 'images/goat_small.jpg',
    description: 'A image',
    likes: 0
  }
]
  .map(image => {
    return { id: id.next().value, ...image }
  })

export const getGallary = async () => data

export const addLike = async id => {
  const index = data.findIndex(item => item.id === id)

  if (index < 0) return

  data[index].likes += 1
}
