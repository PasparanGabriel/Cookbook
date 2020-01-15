import { connect } from 'react-redux'
import { maxCaloriesRecipesAction } from '../../../store/actions/maxCaloriesRecipesAction'
import { MaxCaloriesRecipes } from './MaxCaloriesRecipes'

const mapStateToProps = state => ({
  error: state.maxCaloriesRecipes.error,
  loading: state.maxCaloriesRecipes.loading,
  maxCaloriesRecipes: state.maxCaloriesRecipes.results
})

const mapDispatchToProps = dispatch => ({
  maxCaloriesRecipesActions: dispatch(maxCaloriesRecipesAction())
})

export const MaxCaloriesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(MaxCaloriesRecipes)
