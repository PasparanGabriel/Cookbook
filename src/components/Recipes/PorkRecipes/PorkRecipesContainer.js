import { connect } from 'react-redux'
import { porkRecipesActions } from '../../../store/actions/porkRecipesAction'
import { PorkRecipes } from './PorkRecipes'

const mapStateToProps = state => ({
  baseUri: state.porkRecipes.porkBaseUri,
  error: state.porkRecipes.porkError,
  loading: state.porkRecipes.porkLoading,
  porkRecipes: state.porkRecipes.porkRecipes
})

const mapDispatchToProps = dispatch => ({
  porkRecipesActions: dispatch(porkRecipesActions())
})

export const PorkRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(PorkRecipes)
