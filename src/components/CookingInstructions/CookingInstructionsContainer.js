import { connect } from 'react-redux'
import { CookingInstructions } from './CookingInstructions'

const mapStateToProps = state => ({
  cookingInstructions: state.cookingInstructions.cookingInstructions,
  error: state.cookingInstructions.cookingInstructionsError,
  loading: state.cookingInstructions.cookingInstructionsLoading
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export const CookingInstructionsContainer = connect(mapStateToProps, mapDispatchToProps)(CookingInstructions)
