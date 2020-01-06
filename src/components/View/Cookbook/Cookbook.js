import React from 'react'
import { Redirect } from 'react-router-dom'

const Cookbook = props => {
  const { auth } = props
  
  if (!auth.uid)
    return <Redirect to='/sign-in' /> 

  return (
    <h1>Cookbook</h1>
  )
}

export { Cookbook }
