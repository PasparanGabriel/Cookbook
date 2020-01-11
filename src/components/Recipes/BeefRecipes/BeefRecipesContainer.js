import { connect } from 'react-redux'
import { beefRecipesActions } from '../../../store/actions/beefRecipesActions'
import { BeefRecipes } from './BeefRecipes'

const mapStateToProps = state => ({
  baseUri: state.beefRecipesReducer.beefBaseUri,
  beefRecipes: state.beefRecipesReducer.beefRecipes,
  error: state.beefRecipesReducer.beefError,
  loading: state.beefRecipesReducer.beefLoading
})

const mapDispatchToProps = dispatch => ({
  beefRecipesActions: dispatch(beefRecipesActions())
})

const BeefRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(BeefRecipes)

export { BeefRecipesContainer }
