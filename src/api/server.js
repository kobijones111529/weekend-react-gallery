import axios from 'axios'

export const getGallery = () => axios({
  method: 'GET',
  url: '/gallery'
})
  .then(response => response.data)

export const addLike = id => axios({
  method: 'PUT',
  url: `/gallery/like/${id}`
})

export const addPhoto = photo => axios({
  method: 'POST',
  url: '/gallery',
  data: photo
})
