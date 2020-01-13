import React from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'

export const TenMinutesRecipes = props => {
  const { error, loading, tenMinutesRecipes } = props

  if (error)
    return <Error err={error} />

  if (loading)
    return <Loading />

  if (tenMinutesRecipes) {
    return (
      <Category category='10 Minutes'>
        { tenMinutesRecipes && tenMinutesRecipes.map(tenMinutesRecipe =>
            <ItemCategory
              alt={tenMinutesRecipe.image}
              key={tenMinutesRecipe.id}
              onClick={() => alert('Working in progress!')}
              src={tenMinutesRecipe.image}
              title={tenMinutesRecipe.title}
            />
          )
        }
      </Category>
    )
  } else {
    return <Loading />
  }
}
