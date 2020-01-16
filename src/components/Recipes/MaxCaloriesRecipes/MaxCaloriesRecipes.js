import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
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
          <Category baseUri='' category={maxCaloriesRecipes} openModal={this.openModal} title='Under 500 calories' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </div>
      )
    } else { 
      return null
    }
  }
}
