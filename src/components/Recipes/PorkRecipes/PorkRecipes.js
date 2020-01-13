import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const PorkRecipes = props => {
  const { baseUri, porkRecipes, error, loading } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (porkRecipes) {
    return (
      <Category category='Pork'>
        { porkRecipes && porkRecipes.map(porkRecipe =>
            <ItemCategory
              alt={porkRecipe.image}
              key={porkRecipe.id}
              onClick={() => alert(porkRecipe.id)}
              servings={porkRecipe.servings}
              src={baseUri + porkRecipe.image}
              readyInMinutes={porkRecipe.readyInMinutes}
              title={porkRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}
