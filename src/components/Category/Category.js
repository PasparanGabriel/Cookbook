import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Category.css'

export class Category extends PureComponent {
  render() {
    const { category, children } = this.props

    return (
      <div className='containerCategory'>
        <h1 className='textCategory'>{category}</h1>
        <div className='rowCategory'>
          {children}
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired
}
