import React from 'react'
import { Redirect } from 'react-router-dom'
import { ChickenRecipes } from '../Recipes/ChickenRecipes'

const Cookbook = props => {
  const { auth } = props
  
  if (!auth.uid)
    return <Redirect to='/sign-in' /> 

  return (
    <ChickenRecipes />
  )
}

export { Cookbook }
