import { connect } from 'react-redux'
import { vegetarianRecipesActions } from '../../../store/actions/vegetarianRecipesActions'
import { VegetarianRecipes } from './VegetarianRecipes'

const mapStateToProps = state => ({
  baseUri: state.vegetarianRecipesReducer.vegetarianBaseUri,
  error: state.vegetarianRecipesReducer.vegetarianError,
  loading: state.vegetarianRecipesReducer.vegetarianLoading,
  vegetarianRecipes: state.vegetarianRecipesReducer.vegetarianRecipes
})

const mapDispatchToProps = dispatch => ({
  vegetarianRecipesActions: dispatch(vegetarianRecipesActions())
})

const VegetarianRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(VegetarianRecipes)

export { VegetarianRecipesContainer }
