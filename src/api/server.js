import axios from 'axios'

export const getGallary = () => axios({
  method: 'GET',
  url: '/gallery'
})
  .then(response => response.data)

export const addLike = id => axios({
  method: 'PUT',
  url: `/gallery/like/${id}`
})
