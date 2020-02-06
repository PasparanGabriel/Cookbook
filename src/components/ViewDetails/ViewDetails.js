import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../ui/Button'
import { CookingInstructions } from '../CookingInstructions'
import { Equipment } from '../Equipment'
import { Ingredients } from '../Ingredients'
import { Summary }from '../Summary'
import './ViewDetails.css'

export const ViewDetails = props => {
  const { id, show } = props

  const closeModal = () => {
    props.close && props.close()
  }

  if (show) {
    document.body.style.overflow = 'hidden'

    return (
      <div className='modalViewDetails'>
        <div className='contentViewDetails'>
          <div className='paddingViewDetails'>
            <Button type='danger' position='right' onClick={closeModal}>X</Button>
            <Summary id={id} />
            <Ingredients id={id} />
            <Equipment id={id} />
            <CookingInstructions id={id} />
          </div>
        </div>
      </div>
    ) 
  } else {
    document.body.style.overflow = 'auto'

    return null
  }
}

ViewDetails.propTypes = {
  close: PropTypes.func.isRequired,
  id: PropTypes.number,
  show: PropTypes.bool.isRequired
}
