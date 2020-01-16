import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class PorkRecipes extends PureComponent {
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
    const { baseUri, error, loading,porkRecipes } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (porkRecipes) {
      return (
        <div>
          <Category category='Pork'>
            { porkRecipes && porkRecipes.map(porkRecipe =>
                <ItemCategory
                  alt={porkRecipe.image}
                  key={porkRecipe.id}
                  onClick={() => this.openModal(porkRecipe.id)}
                  servings={porkRecipe.servings}
                  src={baseUri + porkRecipe.image}
                  readyInMinutes={porkRecipe.readyInMinutes}
                  title={porkRecipe.title}
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
