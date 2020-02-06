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
    const { ingredientsRecipes, error, id, loading } = this.props
    let item = 0

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (ingredientsRecipes[id]) {
      return (
        <React.Fragment>
          { !!ingredientsRecipes[id] && <h1 className='titleIngredients'>Ingredients</h1> }
          <div className='containerIngredients'>
            { ingredientsRecipes[id] && ingredientsRecipes[id].map(ingredientsRecipe =>
                <div className='containerIngredient' key={item++}>
                  <div className='imgEquipment'>
                    <Image
                      src={'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientsRecipe.image}
                      alt={ingredientsRecipe.image}
                      type='ingredient'
                    />
                  </div>
                  <div className='detailsIngredient'>
                    <div className='nameIngredient'>
                      {ingredientsRecipe.name}
                    </div>
                    <div className='quantityingredient'>
                      {ingredientsRecipe.amount.metric.value + ' ' + ingredientsRecipe.amount.metric.unit}
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

Ingredients.propsType = {
  error: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  ingredientsRecipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
