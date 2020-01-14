import { connect } from 'react-redux'
import { maxCaloriesRecipesActions } from '../../../store/actions/maxCaloriesRecipesAction'
import { MaxCaloriesRecipes } from './MaxCaloriesRecipes'

const mapStateToProps = state => ({
  error: state.maxCaloriesRecipes.maxCaloriesError,
  loading: state.maxCaloriesRecipes.maxCaloriesLoading,
  maxCaloriesRecipes: state.maxCaloriesRecipes.maxCaloriesRecipes
})

const mapDispatchToProps = dispatch => ({
  maxCaloriesRecipesActions: dispatch(maxCaloriesRecipesActions())
})

export const MaxCaloriesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(MaxCaloriesRecipes)
