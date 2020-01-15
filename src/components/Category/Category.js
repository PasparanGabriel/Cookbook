import React from 'react'
import PropTypes from 'prop-types'
import './Category.css'

export const Category = props => {
  const { category, children } = props

  return (
    <div className='containerCategory'>
      <h1 className='textCategory'>{category}</h1>
      <div className='rowCategory'>
        {children}
      </div>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.string.isRequired
}
