import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const TurkeyRecipes = props => {
  const { baseUri, turkeyRecipes, error, loading } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (turkeyRecipes) {
    return (
      <Category category='Turkey'>
        { turkeyRecipes && turkeyRecipes.map(turkeyRecipe =>
            <ItemCategory
              alt={turkeyRecipe.image}
              key={turkeyRecipe.id}
              onClick={() => alert(turkeyRecipe.id)}
              servings={turkeyRecipe.servings}
              src={baseUri + turkeyRecipe.image}
              readyInMinutes={turkeyRecipe.readyInMinutes}
              title={turkeyRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}
