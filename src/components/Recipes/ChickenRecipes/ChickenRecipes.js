import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const ChickenRecipes = props => {
  const { baseUri, chickenRecipes, error, loading } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (chickenRecipes) {
    return (
      <Category category='Chicken'>
        { chickenRecipes && chickenRecipes.map(chickenRecipe =>
            <ItemCategory
              alt={chickenRecipe.image}
              key={chickenRecipe.id}
              onClick={() => alert('Working in progress!')}
              servings={chickenRecipe.servings}
              src={baseUri + chickenRecipe.image}
              readyInMinutes={chickenRecipe.readyInMinutes}
              title={chickenRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}
