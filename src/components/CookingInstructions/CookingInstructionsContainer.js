import { connect } from 'react-redux'
import { CookingInstructions } from './CookingInstructions'

const mapStateToProps = state => ({
  cookingInstructions: state.cookingInstructions.results,
  error: state.cookingInstructions.error,
  loading: state.cookingInstructions.loading
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export const CookingInstructionsContainer = connect(mapStateToProps, mapDispatchToProps)(CookingInstructions)
