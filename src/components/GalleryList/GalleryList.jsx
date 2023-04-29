import GalleryItem from '../GalleryItem/GalleryItem'
import PropTypes from 'prop-types'
import React from 'react'

function GalleryList (props) {
  return (
    <ul>
      {props.gallery.map(item =>
        <li key={item.id}>
          <GalleryItem
            path={item.path}
            description={item.description}
            likes={item.likes}
            addLike={() => props.addLike(item.id)}
          />
        </li>
      )}
    </ul>
  )
}

GalleryList.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLike: PropTypes.func.isRequired
}

export default GalleryList
