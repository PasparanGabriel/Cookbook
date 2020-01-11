import React from 'react'
import { Category } from '../../Category'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { Error } from '../../../ui/Error'

export const BeefRecipes = props => {
  const { baseUri, beefRecipes, error, loading } = props

    if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  return (
    <Category category='Beef'>
      { beefRecipes.map(beefRecipe =>
          <ItemCategory
            alt={beefRecipe.image}
            key={beefRecipe.id}
            src={baseUri + beefRecipe.imageUrls[0]}
            title={beefRecipe.title}
          />
        )
      }
    </Category>
  )
}
