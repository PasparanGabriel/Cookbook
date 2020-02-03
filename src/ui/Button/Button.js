import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = props => {
  let className = 'btn'

  className += props.borderRadius ? ' borderRadius' : ''
  className += props.position ? ' ' + props.position : ''
  className += props.size ? ' ' + props.size : '' 
  className += props.type ? ' ' + props.type : ''

  return (
    <button 
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  borderRadius: false,
  position: '',
  size: '',
}

Button.propTypes = {
  borderRadius: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string.isRequired
}
