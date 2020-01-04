import React from 'react'
import { Button } from '../../../ui/Button'

const SignOut = (props) => {
  return (
    <Button type='info' position='right' onClick={props.signOut}>Sign Out</Button>
  )
}

export { SignOut }
