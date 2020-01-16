import React from 'react'
import { Button } from '../../ui/Button'
import { CookingInstructions } from '../CookingInstructions'
import { Ingredients } from '../Ingredients'
import './ViewDetails.css'

export const ViewDetails = props => {
  const { show } = props

  const closeModal = () => {
    props.close && props.close()
  }

  return (
    show &&
    <div className='viewDetailsModal'>
      <div className='viewDetailsModalContent'>
        <div className='viewDetailsModalPadding'>
          <h1>
            View Details
            <Button type='danger' position='right' onClick={closeModal}>X</Button>
          </h1>
          <Ingredients id={props.id} />
          <CookingInstructions id={props.id} />
        </div>
      </div>
    </div>
  )
}
