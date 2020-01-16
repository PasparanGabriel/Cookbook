import React from 'react'
import PropTypes from 'prop-types'
import './Image.css'

export const Image = props => {
  const { src, alt, type, id } = props

  return (
    <img src={src} alt={alt} className={type} id={id} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
