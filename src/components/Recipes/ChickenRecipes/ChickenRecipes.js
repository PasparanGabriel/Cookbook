import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
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
    const { chickenRecipes, error, loading } = this.props

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (chickenRecipes && chickenRecipes.length) {
      return (
        <React.Fragment>
          <Category category={chickenRecipes} openModal={this.openModal} title='Chicken'/>
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

ChickenRecipes.propTypes = {
  chickenRecipes: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}
