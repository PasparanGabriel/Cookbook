import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (maxCaloriesRecipes && maxCaloriesRecipes.length) {
      return (
        <React.Fragment>
          <Category category={maxCaloriesRecipes} openModal={this.openModal} title='Under 500 calories' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </React.Fragment>
      )
    } else { 
      return null
    }
  }
}

MaxCaloriesRecipes.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  maxCaloriesRecipes: PropTypes.array.isRequired
}
