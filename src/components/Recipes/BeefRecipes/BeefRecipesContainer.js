import { connect } from 'react-redux'
import { beefRecipesAction } from '../../../store/actions/beefRecipesAction'
import { BeefRecipes } from './BeefRecipes'

const mapStateToProps = state => ({
  beefRecipes: state.beefRecipes.results,
  error: state.beefRecipes.error,
  loading: state.beefRecipes.loading
})

const mapDispatchToProps = dispatch => ({
  beefRecipesActions: dispatch(beefRecipesAction())
})

export const BeefRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(BeefRecipes)
