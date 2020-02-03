import React from 'react'
import PropTypes from 'prop-types'
import './Image.css'

export const Image = props => {
  const { alt, id, src, type } = props

  return (
    <img src={src} alt={alt} className={type} id={id} />
  )
}

Image.defaultProps = {
  id: '0',
  type: ''
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  type: PropTypes.string
}
