import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const BeefRecipes = props => {
  const { baseUri, beefRecipes, error, loading } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (beefRecipes) {
    return (
      <Category category='Beef'>
        { beefRecipes && beefRecipes.map(beefRecipe =>
            <ItemCategory
              alt={beefRecipe.image}
              key={beefRecipe.id}
              onClick={() => alert('Working in progress!')}
              servings={beefRecipe.servings}
              src={baseUri + beefRecipe.image}
              readyInMinutes={beefRecipe.readyInMinutes}
              title={beefRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}
