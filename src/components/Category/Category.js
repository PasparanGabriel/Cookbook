import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../ui/Button'
import { Image } from '../../ui/Image'
import servingsImg from '../../image/servings.png'
import readyInMinutesImg from '../../image/readyInMinutes.png'
import './Category.css'

export const Category = props => {
  const { baseUri, category, openModal, title } = props

  return (
    <div className='containerCategory'>
      <h1 className='titleCategory'>{title}</h1>
      <div className='rowCategory'>
        { category && category.map(item =>
            <div className='colCategory' key={item.id}>
              <div className='imgCategory'>
                <Image src={baseUri + item.image} alt={item.image} type='category' />
              </div>

              <hr className='lineCategory'/>
              
              <div className='viewDetails'>
                <Button
                  borderRadius
                  onClick={() => openModal(item.id)}
                  position='center'
                  type='viewDetailsBtn'
                >
                  View details
                </Button>
              </div>

              <div className='detailsCategory'>
                <p className='textCategory'>{item.title}</p>
                { (item.servings || item.readyInMinutes) &&
                  <div>
                    { item.servings &&
                      <div>
                        <Image src={servingsImg} alt='servings' />
                        <span> {item.servings} servings</span>
                      </div>
                    }
                    { item.readyInMinutes &&
                      <div className='readyInMinutesImg'>
                        <Image src={readyInMinutesImg} alt='readyInMinutes' />
                        <span> {item.readyInMinutes} mins</span>
                      </div>
                    }
                  </div>
                }
              </div>  
            </div>
          )
        }
      </div>
    </div>
  )
}

Category.propTypes = {
  baseUri: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
