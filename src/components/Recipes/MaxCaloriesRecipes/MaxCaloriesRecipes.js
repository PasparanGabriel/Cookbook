import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class MaxCaloriesRecipes extends PureComponent {
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
    const { error, loading, maxCaloriesRecipes } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (maxCaloriesRecipes) {
      return (
        <div>
          <Category category='Under 500 calories'>
            { maxCaloriesRecipes && maxCaloriesRecipes.map(maxCaloriesRecipe =>
                <ItemCategory
                  alt={maxCaloriesRecipe.image}
                  key={maxCaloriesRecipe.id}
                  onClick={() => this.openModal(maxCaloriesRecipe.id)}
                  src={maxCaloriesRecipe.image}
                  title={maxCaloriesRecipe.title}
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
