import { connect } from 'react-redux'
import { porkRecipesAction } from '../../../store/actions/porkRecipesAction'
import { PorkRecipes } from './PorkRecipes'

const mapStateToProps = state => ({
  baseUri: state.porkRecipes.baseUri,
  error: state.porkRecipes.error,
  loading: state.porkRecipes.loading,
  porkRecipes: state.porkRecipes.results
})

const mapDispatchToProps = dispatch => ({
  porkRecipesActions: dispatch(porkRecipesAction())
})

export const PorkRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(PorkRecipes)
