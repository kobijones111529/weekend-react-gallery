import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './GallaryItem.module.css'

function GallaryItem (props) {
  const [flipped, setFlipped] = useState(false)

  const showLikes = likes => {
    if (likes <= 0) return 'No people love this :('
    else if (likes === 1) return '1 person loves this!'
    else return `${likes} people love this!`
  }

  const showCard = () => {
    if (flipped) {
      return (
        <p>{props.description}</p>
      )
    } else {
      return (
        <img
          className={styles.image}
          src={props.path}
          alt={props.description}
        />
      )
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.card} onClick={() => setFlipped(!flipped)}>
        {showCard()}
      </button>
      <button onClick={props.addLike}>Love it!</button>
      <p className={styles.likes}>{showLikes(props.likes)}</p>
    </div>
  )
}

GallaryItem.propTypes = {
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  addLike: PropTypes.func.isRequired
}

export default GallaryItem
