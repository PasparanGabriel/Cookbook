import { connect } from 'react-redux'
import { porkRecipesActions } from '../../../store/actions/porkRecipesAction'
import { PorkRecipes } from './PorkRecipes'

const mapStateToProps = state => ({
  baseUri: state.porkRecipesReducer.porkBaseUri,
  error: state.porkRecipesReducer.porkError,
  loading: state.porkRecipesReducer.porkLoading,
  porkRecipes: state.porkRecipesReducer.porkRecipes
})

const mapDispatchToProps = dispatch => ({
  porkRecipesActions: dispatch(porkRecipesActions())
})

const PorkRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(PorkRecipes)

export { PorkRecipesContainer }
