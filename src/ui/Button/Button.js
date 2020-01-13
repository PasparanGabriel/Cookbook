import React from 'react'
import './Button.css'

const Button = props => {
  let className = 'btn', onClick

  className += props.borderRadius ? ' borderRadius' : ''
  className += props.type ? ' ' + props.type : ''
  className += props.position ? ' ' + props.position : ''
  className += props.size ? ' ' + props.size : ''
  onClick = props.onClick

  return (
    <button 
      className={className}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

export { Button }
