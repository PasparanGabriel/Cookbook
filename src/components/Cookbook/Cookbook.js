import React from 'react'
import { Redirect } from 'react-router-dom'
import { BeefRecipes } from '../Recipes/BeefRecipes'
import { ChickenRecipes } from '../Recipes/ChickenRecipes'
import { MaxCaloriesRecipes } from '../Recipes/MaxCaloriesRecipes'
import { PorkRecipes } from '../Recipes/PorkRecipes'
import { TenMinutesRecipes } from '../Recipes/TenMinutesRecipes'
import { TurkeyRecipes } from '../Recipes/TurkeyRecipes'
import { VegetarianRecipes } from '../Recipes/VegetarianRecipes'
import './Cookbook.css'

export const Cookbook = props => {
  const { auth } = props
  
  if (!auth.uid)
    return <Redirect to='/sign-in' /> 

  return (
    <div className='containerCookbook'>
      <BeefRecipes />
      <ChickenRecipes />
      <PorkRecipes />
      <TurkeyRecipes />
      <VegetarianRecipes />
      <TenMinutesRecipes />
      <MaxCaloriesRecipes />
    </div>
  )
}
