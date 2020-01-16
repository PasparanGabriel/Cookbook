import React, { PureComponent } from 'react'
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

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (tenMinutesRecipes) {
      return (
        <div>
          <Category baseUri='' category={tenMinutesRecipes} openModal={this.openModal} title='10 Minutes' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </div>
      )
    } else {
      return null
    }
  }
}
