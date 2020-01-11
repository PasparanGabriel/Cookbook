import React from 'react'
import PropTypes from 'prop-types'
import './Error.css'

export const Error = props => (
  <h1 className='err'>{props.err}</h1>
)

Error.propTypes = {
  err: PropTypes.string.isRequired
}
