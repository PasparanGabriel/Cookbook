import React from 'react'
import './Input.css'

const Input = (props) => {
  let className, label
  className = props.children ? 'input wrongValue' : 'input'
  label = (props.value !== '') ? 'label' : 'labelOff'

  return (
    <div className='group'>
      <label className={label}>{props.placeholder}</label>
      <input
        className={className}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
    </div>
  )
}

export { Input }
