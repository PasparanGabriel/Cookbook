import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class BeefRecipes extends PureComponent {
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
    const { baseUri, beefRecipes, error, loading } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (beefRecipes) {
      return (
        <div>
          <Category category='Beef'>
            { beefRecipes && beefRecipes.map(beefRecipe =>
                <ItemCategory
                  alt={beefRecipe.image}
                  key={beefRecipe.id}
                  onClick={() => this.openModal(beefRecipe.id)}
                  servings={beefRecipe.servings}
                  src={baseUri + beefRecipe.image}
                  readyInMinutes={beefRecipe.readyInMinutes}
                  title={beefRecipe.title}
                />
              )
            }
          </Category>
          <div>
            <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
