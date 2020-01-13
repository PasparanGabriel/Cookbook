import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const MaxCaloriesRecipes = props => {
  const { error, loading, maxCaloriesRecipes } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (maxCaloriesRecipes) {
    return (
      <Category category='Under 500 calories'>
        { maxCaloriesRecipes && maxCaloriesRecipes.map(maxCaloriesRecipe =>
            <ItemCategory
              alt={maxCaloriesRecipe.image}
              key={maxCaloriesRecipe.id}
              onClick={() => alert('Working in progress!')}
              src={maxCaloriesRecipe.image}
              title={maxCaloriesRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}
