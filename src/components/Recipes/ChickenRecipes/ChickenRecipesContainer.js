import { connect } from 'react-redux'
import { chickenRecipesActions } from '../../../store/actions/chickenRecipesAction'
import { ChickenRecipes } from './ChickenRecipes'

const mapStateToProps = state => ({
  baseUri: state.chickenRecipes.chickenBaseUri,
  chickenRecipes: state.chickenRecipes.chickenRecipes,
  error: state.chickenRecipes.chickenError,
  loading: state.chickenRecipes.chickenLoading
})

const mapDispatchToProps = dispatch => ({
  chickenRecipesActions: dispatch(chickenRecipesActions())
})

export const ChickenRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(ChickenRecipes)
