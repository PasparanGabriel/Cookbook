import { connect } from 'react-redux'
import { maxCaloriesRecipesActions } from '../../../store/actions/maxCaloriesRecipesAction'
import { MaxCaloriesRecipes } from './MaxCaloriesRecipes'

const mapStateToProps = state => ({
  error: state.maxCaloriesRecipesReducer.beefError,
  loading: state.maxCaloriesRecipesReducer.beefLoading,
  maxCaloriesRecipes: state.maxCaloriesRecipesReducer.maxCaloriesRecipes
})

const mapDispatchToProps = dispatch => ({
  maxCaloriesRecipesActions: dispatch(maxCaloriesRecipesActions())
})

const MaxCaloriesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(MaxCaloriesRecipes)

export { MaxCaloriesRecipesContainer }
