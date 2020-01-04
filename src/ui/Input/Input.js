import React from 'react'
import './Input.css'
import hide from '../../image/hide.png'
import view from '../../image/view.png'

const Input = (props) => {
  let className, label
  className = props.children ? 'input wrongValue' : 'input'
  label = (props.value !== '') ? 'label' : 'labelOff'

  return (
    <div className='group'>
      <label className={label}>{props.placeholder}</label>
      <input
        className={className}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
      {props.name === 'password' && <ViewPassword />}
    </div>
  )
}

const ChangeType = () => {
  const name = document.getElementById('password')
  const img = document.getElementById('imgPassword')

  if (name.type === 'password') {
    return (
      img.src = hide,
      img.alt = 'hide',
      name.type = 'text'
    )
  } else {
    return (
      img.src = view,
      img.alt = 'view',
      name.type = 'password'
    )
  }
}

const ViewPassword = () => {
  return (
    <span className='viewPassword' onClick={ChangeType}><img src={view} alt='view' id='imgPassword' /></span>
  )
}

export { Input }
