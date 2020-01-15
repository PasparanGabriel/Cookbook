import { connect } from 'react-redux'
import { vegetarianRecipesAction } from '../../../store/actions/vegetarianRecipesAction'
import { VegetarianRecipes } from './VegetarianRecipes'

const mapStateToProps = state => ({
  baseUri: state.vegetarianRecipes.baseUri,
  error: state.vegetarianRecipes.error,
  loading: state.vegetarianRecipes.loading,
  vegetarianRecipes: state.vegetarianRecipes.results
})

const mapDispatchToProps = dispatch => ({
  vegetarianRecipesActions: dispatch(vegetarianRecipesAction())
})

export const VegetarianRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(VegetarianRecipes)
