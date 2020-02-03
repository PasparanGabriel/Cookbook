import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Error } from '../../ui/Error'
import { Loading } from '../../ui/Loading'
import { cookingInstructionsAction } from '../../store/actions/cookingInstructionsAction'
import './CookingInstructions.css'

export class CookingInstructions extends PureComponent {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(cookingInstructionsAction(this.props.id))
  }

  render() {
    const { cookingInstructions, error, id, loading } = this.props

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (cookingInstructions[id]) {
      return (
        <React.Fragment>
          { !!cookingInstructions[id] && <h1 className='textCookingInstruction'>Cooking Instructions</h1> }
          { cookingInstructions[id] && cookingInstructions[id].map(cookingInstruction =>
              <div className='containerCookingInstruction' key={cookingInstruction.number}>
                <div className='numberCookingInstruction'>{cookingInstruction.number}</div>
                <div className='stepCookingInstruction'>{cookingInstruction.step}</div>
              </div>
            )
          }
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

CookingInstructions.propsType = {
  cookingInstructions: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}
