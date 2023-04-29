import GallaryItem from '../GallaryItem/GallaryItem'
import PropTypes from 'prop-types'
import React from 'react'

function GallaryList (props) {
  return (
    <ul>
      {props.gallary.map(item =>
        <li key={item.id}>
          <GallaryItem
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

GallaryList.propTypes = {
  gallary: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLike: PropTypes.func.isRequired
}

export default GallaryList
