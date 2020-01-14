import { connect } from 'react-redux'
import { beefRecipesActions } from '../../../store/actions/beefRecipesAction'
import { BeefRecipes } from './BeefRecipes'

const mapStateToProps = state => ({
  baseUri: state.beefRecipes.beefBaseUri,
  beefRecipes: state.beefRecipes.beefRecipes,
  error: state.beefRecipes.beefError,
  loading: state.beefRecipes.beefLoading
})

const mapDispatchToProps = dispatch => ({
  beefRecipesActions: dispatch(beefRecipesActions())
})

export const BeefRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(BeefRecipes)
