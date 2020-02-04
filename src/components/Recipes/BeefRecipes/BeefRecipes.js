import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
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

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (beefRecipes && beefRecipes.length) {
      return (
        <React.Fragment>
          <Category baseUri={baseUri} category={beefRecipes} openModal={this.openModal} title='Beef' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

BeefRecipes.propTypes = {
  baseUri: PropTypes.string.isRequired,
  beefRecipes: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}
