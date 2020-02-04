import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class TenMinutesRecipes extends PureComponent {
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
    const { error, loading, tenMinutesRecipes } = this.props

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (tenMinutesRecipes && tenMinutesRecipes.length) {
      return (
        <React.Fragment>
          <Category baseUri='' category={tenMinutesRecipes} openModal={this.openModal} title='10 Minutes' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

TenMinutesRecipes.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  tenMinutesRecipes: PropTypes.array.isRequired
}
