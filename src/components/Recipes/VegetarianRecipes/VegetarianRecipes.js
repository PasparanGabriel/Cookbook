import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class VegetarianRecipes extends PureComponent {
  state = {
    id: 0,
    show: false
  }

  openModal = id => {
    this.setState({
      id: id,
      show: !this.state.show
    })
  }

  render() {
    const { baseUri, error, loading, vegetarianRecipes } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (vegetarianRecipes) {
      return (
        <div>
          <Category category='Vegetarian'>
            { vegetarianRecipes && vegetarianRecipes.map(vegetarianRecipe =>
                <ItemCategory
                  alt={vegetarianRecipe.image}
                  key={vegetarianRecipe.id}
                  onClick={() => this.openModal(vegetarianRecipe.id)}
                  servings={vegetarianRecipe.servings}
                  src={baseUri + vegetarianRecipe.image}
                  readyInMinutes={vegetarianRecipe.readyInMinutes}
                  title={vegetarianRecipe.title}
                />
              )
            }
          </Category>
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </div>
      )
    } else {
      return null
    }
    
  }
}
