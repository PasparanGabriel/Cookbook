import { connect } from 'react-redux'
import { vegetarianRecipesActions } from '../../../store/actions/vegetarianRecipesAction'
import { VegetarianRecipes } from './VegetarianRecipes'

const mapStateToProps = state => ({
  baseUri: state.vegetarianRecipes.vegetarianBaseUri,
  error: state.vegetarianRecipes.vegetarianError,
  loading: state.vegetarianRecipes.vegetarianLoading,
  vegetarianRecipes: state.vegetarianRecipes.vegetarianRecipes
})

const mapDispatchToProps = dispatch => ({
  vegetarianRecipesActions: dispatch(vegetarianRecipesActions())
})

export const VegetarianRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(VegetarianRecipes)
