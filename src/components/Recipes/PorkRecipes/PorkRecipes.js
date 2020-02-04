import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
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
    const { baseUri, error, loading, porkRecipes } = this.props

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (porkRecipes && porkRecipes.length) {
      return (
        <React.Fragment>
          <Category baseUri={baseUri} category={porkRecipes} openModal={this.openModal} title='Pork' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

PorkRecipes.propTypes = {
  baseUri: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  porkRecipes: PropTypes.array.isRequired
}
