import React from 'react'
import { Image } from '../Image'
import hide from '../../image/hide.png'
import view from '../../image/view.png'
import './Input.css'

const Input = props => {
  let input = 'input', label
  
  input += props.children ? ' wrongValue' : ''
  label = (props.value !== '') ? 'label' : 'labelOff'

  return (
    <div className='group'>
      <label className={label}>{props.placeholder}</label>
      <input
        className={input}
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

const ViewPassword = () => (
  <span className='viewPassword' onClick={ChangeType}><Image src={view} alt='view' id='imgPassword' /></span>
)

export { Input }
