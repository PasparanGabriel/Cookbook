import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../ui/Button'

export const SignOut = props => (
  <Button type='info' position='right' onClick={props.signOut}>Sign out</Button>
)

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired
}
