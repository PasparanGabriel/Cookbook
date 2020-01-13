import React from 'react'
import { Redirect } from 'react-router-dom'
import { BeefRecipes } from '../Recipes/BeefRecipes'
import { ChickenRecipes } from '../Recipes/ChickenRecipes'
import { PorkRecipes } from '../Recipes/PorkRecipes'
import { TurkeyRecipes } from '../Recipes/TurkeyRecipes'
import { VegetarianRecipes } from '../Recipes/VegetarianRecipes'

const Cookbook = props => {
  const { auth } = props
  
  if (!auth.uid)
    return <Redirect to='/sign-in' /> 

  return (
    <div>
      <BeefRecipes />
      <ChickenRecipes />
      <PorkRecipes />
      <TurkeyRecipes />
      <VegetarianRecipes />
    </div>
  )
}

export { Cookbook }
