import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../ui/Image'
import './ItemCategory.css'

class ItemCategory extends PureComponent {
  render() {
    const { src, alt, title } = this.props

    return (
      <div className='colCategory'>
        <Image src={src} alt={alt} type='category' />
        <p className='titleCategory'>{title}</p>
      </div>
    )
  }
}

ItemCategory.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export { ItemCategory }
