import { connect } from 'react-redux'
import { maxCaloriesRecipesActions } from '../../../store/actions/maxCaloriesRecipesActions'
import { MaxCaloriesRecipes } from './MaxCaloriesRecipes'

const mapStateToProps = state => ({
  maxCaloriesRecipes: state.maxCaloriesRecipesReducer.maxCaloriesRecipes,
  error: state.maxCaloriesRecipesReducer.beefError,
  loading: state.maxCaloriesRecipesReducer.beefLoading
})

const mapDispatchToProps = dispatch => ({
  maxCaloriesRecipesActions: dispatch(maxCaloriesRecipesActions())
})

const MaxCaloriesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(MaxCaloriesRecipes)

export { MaxCaloriesRecipesContainer }
