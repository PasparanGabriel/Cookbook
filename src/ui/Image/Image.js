import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Image.css'

class Image extends PureComponent {
  render() {
    const { src, alt, type, id } = this.props
    return (
      <img
        src={src}
        alt={alt}
        className={type}
        id={id}
      />
    )
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export { Image }
