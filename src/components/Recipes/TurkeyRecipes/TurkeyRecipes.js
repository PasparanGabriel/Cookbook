import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class TurkeyRecipes extends PureComponent {
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
    const { baseUri, error, loading, turkeyRecipes } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (turkeyRecipes) {
      return (
        <div>
          <Category category='Turkey'>
            { turkeyRecipes && turkeyRecipes.map(turkeyRecipe =>
                <ItemCategory
                  alt={turkeyRecipe.image}
                  key={turkeyRecipe.id}
                  onClick={() => this.openModal(turkeyRecipe.id)}
                  servings={turkeyRecipe.servings}
                  src={baseUri + turkeyRecipe.image}
                  readyInMinutes={turkeyRecipe.readyInMinutes}
                  title={turkeyRecipe.title}
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
