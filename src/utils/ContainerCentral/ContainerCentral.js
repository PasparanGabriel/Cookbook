import React from 'react'
import './ContainerCentral.css'

const ContainerCentral = (props) => {
  return (
    <div className='containerCentral'>
      {props.children}
    </div>
  )
}

export { ContainerCentral }
