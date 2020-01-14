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
    const { cookingInstructions, error, loading } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (cookingInstructions[this.props.id]) {
      return (
        <div>
          <h1 className='containerCookingText'>Cooking Instructions</h1>
          { cookingInstructions[this.props.id] && cookingInstructions[this.props.id].map(cookingInstruction =>
             <div className='containerCookingInstruction' key={cookingInstruction.number}>
               <div className='cookingInstructionNumber'>{cookingInstruction.number}</div>
               <div className='cookingInstructionStep'>{cookingInstruction.step}</div>
             </div>
            )
          }
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

CookingInstructions.propsType ={
  id: PropTypes.number.isRequired
}
