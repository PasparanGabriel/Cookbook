import { connect } from 'react-redux'
import { porkRecipesActions } from '../../../store/actions/porkRecipesActions'
import { PorkRecipes } from './PorkRecipes'

const mapStateToProps = state => ({
  baseUri: state.porkRecipesReducer.porkBaseUri,
  porkRecipes: state.porkRecipesReducer.porkRecipes,
  error: state.porkRecipesReducer.porkError,
  loading: state.porkRecipesReducer.porkLoading
})

const mapDispatchToProps = dispatch => ({
  porkRecipesActions: dispatch(porkRecipesActions())
})

const PorkRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(PorkRecipes)

export { PorkRecipesContainer }
