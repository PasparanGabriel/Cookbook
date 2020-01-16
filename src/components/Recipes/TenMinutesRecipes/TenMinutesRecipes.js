import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { ItemCategory } from '../../ItemCategory'
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
          <Category category='10 Minutes'>
            { tenMinutesRecipes && tenMinutesRecipes.map(tenMinutesRecipe =>
                <ItemCategory
                  alt={tenMinutesRecipe.image}
                  key={tenMinutesRecipe.id}
                  onClick={() => this.openModal(tenMinutesRecipe.id)}
                  src={tenMinutesRecipe.image}
                  title={tenMinutesRecipe.title}
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
