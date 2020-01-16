import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../ui/Image'
import { Error } from '../../ui/Error'
import { Loading } from '../../ui/Loading'
import { ingredientsRecipesAction } from '../../store/actions/ingredientsRecipesAction'
import './Ingredients.css'

export class Ingredients extends PureComponent {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(ingredientsRecipesAction(this.props.id))
  }

  render() {
    const { ingredientsRecipes, error, loading } = this.props
    let item = 0

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (ingredientsRecipes[this.props.id]) {
      return (
        <div>
          <h1 className='ingredientsTitle'>Ingredients</h1>
          <div className='ingredientsContainer'>
            { ingredientsRecipes[this.props.id] && ingredientsRecipes[this.props.id].map(ingredientsRecipe =>
                <div className='ingredientContainer' key={item++}>
                  <Image
                    src={'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientsRecipe.image}
                    alt={ingredientsRecipe.image}
                    type='ingredient'
                  />
                  <div className='ingredientDetails'>
                    <div className='ingredientName'>
                      {ingredientsRecipe.name}
                    </div>
                    <div className='ingredientQuantity'>
                      {ingredientsRecipe.amount.metric.value + ' ' + ingredientsRecipe.amount.metric.unit}
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

Ingredients.propsType = {
  id: PropTypes.number.isRequired
}
