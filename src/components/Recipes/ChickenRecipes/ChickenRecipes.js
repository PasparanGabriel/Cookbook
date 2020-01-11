import React from 'react'
import { Category } from '../../Category'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { Error } from '../../../ui/Error'

export const ChickenRecipes = props => {
  const { baseUri, chickenRecipes, error, loading } = props

    if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  return (
    <Category category='Chicken'>
      { chickenRecipes.map(chickenRecipe =>
          <ItemCategory
            alt={chickenRecipe.image}
            key={chickenRecipe.id}
            src={baseUri + chickenRecipe.imageUrls[0]}
            title={chickenRecipe.title}
          />
        )
      }
    </Category>
  )
}
