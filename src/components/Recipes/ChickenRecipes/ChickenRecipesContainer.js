import { connect } from 'react-redux'
import { chickenRecipesAction } from '../../../store/actions/chickenRecipesAction'
import { ChickenRecipes } from './ChickenRecipes'

const mapStateToProps = state => ({
  baseUri: state.chickenRecipes.baseUri,
  chickenRecipes: state.chickenRecipes.results,
  error: state.chickenRecipes.error,
  loading: state.chickenRecipes.loading
})

const mapDispatchToProps = dispatch => ({
  chickenRecipesActions: dispatch(chickenRecipesAction())
})

export const ChickenRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(ChickenRecipes)
