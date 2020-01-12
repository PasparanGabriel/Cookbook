import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../ui/Image'
import servingsImg from '../../image/servings.png'
import readyInMinutesImg from '../../image/readyInMinutes.png'
import './ItemCategory.css'

class ItemCategory extends PureComponent {
  render() {
    const { alt, title, servings, src, readyInMinutes } = this.props

    return (
      <div className='colCategory'>
        <Image src={src} alt={alt} type='category' />
        <div className='detailsCategory'>
          <p className='titleCategory'>{title}</p>
          <div>
            <Image src={servingsImg} alt='servings' />
            <span> {servings} servings</span>
          </div>
          <div>
            <Image src={readyInMinutesImg} alt='readyInMinutes' />
            <span> {readyInMinutes} mins</span>
          </div>
        </div>  
      </div>
    )
  }
}

ItemCategory.propTypes = {
  alt: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export { ItemCategory }
