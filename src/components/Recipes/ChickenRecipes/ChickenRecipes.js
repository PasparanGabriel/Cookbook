import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class ChickenRecipes extends PureComponent {
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
    const { baseUri, chickenRecipes, error, loading } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (chickenRecipes) {
      return (
        <div>
          <Category category='Chicken'>
            { chickenRecipes && chickenRecipes.map(chickenRecipe =>
                <ItemCategory
                  alt={chickenRecipe.image}
                  key={chickenRecipe.id}
                  onClick={() => this.openModal(chickenRecipe.id)}
                  servings={chickenRecipe.servings}
                  src={baseUri + chickenRecipe.image}
                  readyInMinutes={chickenRecipe.readyInMinutes}
                  title={chickenRecipe.title}
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
