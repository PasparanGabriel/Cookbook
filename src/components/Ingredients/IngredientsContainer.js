import { connect } from 'react-redux'
import { Ingredients } from './Ingredients'

const mapStateToProps = state => ({
  ingredientsRecipes: state.ingredientsRecipes.results,
  error: state.ingredientsRecipes.error,
  loading: state.ingredientsRecipes.loading
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export const IngredientsContainer = connect(mapStateToProps, mapDispatchToProps)(Ingredients)
