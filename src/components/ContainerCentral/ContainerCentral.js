import React from 'react'
import PropTypes from 'prop-types'
import './ContainerCentral.css'

export const ContainerCentral = props => (
  <div className='containerCentral'>
    {props.children}
  </div>
)

ContainerCentral.prototype = {
  children: PropTypes.element.isRequired
}
