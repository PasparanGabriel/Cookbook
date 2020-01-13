import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../ui/Button'
import { Image } from '../../ui/Image'
import servingsImg from '../../image/servings.png'
import readyInMinutesImg from '../../image/readyInMinutes.png'
import './ItemCategory.css'

class ItemCategory extends PureComponent {
  render() {
    const { alt, title, onClick, servings, src, readyInMinutes } = this.props

    return (
      <div className='colCategory'>
        <Image src={src} alt={alt} type='category' />

        <div className='lineCategory'></div>
        
        <div className='viewDetails'>
          <Button
            borderRadius
            onClick={onClick}
            position='center'
            type='infoOutline'
          >
            View details
          </Button>
        </div>

        <div className='detailsCategory'>
          <p className='titleCategory'>{title}</p>
          { (servings || readyInMinutes) &&
            <div className='infoCategory'>
              { servings &&
                <div>
                  <Image src={servingsImg} alt='servings' />
                  <span> {servings} servings</span>
                </div>
              }
              { readyInMinutes &&
                <div className='readyInMinutesImg'>
                  <Image src={readyInMinutesImg} alt='readyInMinutes' />
                  <span> {readyInMinutes} mins</span>
                </div>
              }
            </div>
          }
        </div>  
      </div>
    )
  }
}

ItemCategory.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  servings: PropTypes.number,
  src: PropTypes.string.isRequired,
  readyInMinutes: PropTypes.number,
  title: PropTypes.string.isRequired
}

export { ItemCategory }
