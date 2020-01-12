import React from 'react'
import { Category } from '../../Category'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { Error } from '../../../ui/Error'

export const PorkRecipes = props => {
  const { baseUri, porkRecipes, error, loading } = props

    if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  return (
    <Category category='Pork'>
      { porkRecipes.map(porkRecipe =>
          <ItemCategory
            alt={porkRecipe.image}
            key={porkRecipe.id}
            servings={porkRecipe.servings}
            src={baseUri + porkRecipe.image}
            readyInMinutes={porkRecipe.readyInMinutes}
            title={porkRecipe.title}
          />
        )
      }
    </Category>
  )
}
