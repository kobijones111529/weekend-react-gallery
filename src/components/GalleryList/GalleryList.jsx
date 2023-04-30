import GalleryItem from '../GalleryItem/GalleryItem'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import React from 'react'

function GalleryList (props) {
  return (
    <Grid container justifyContent="space-around" columnGap={2} rowGap={2}>
      {props.gallery.map(item =>
        <GalleryItem
          key={item.id}
          path={item.path}
          description={item.description}
          likes={item.likes}
          addLike={() => props.addLike(item.id)}
        />
      )}
    </Grid>
  )
}

GalleryList.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLike: PropTypes.func.isRequired
}

export default GalleryList
