import { connect } from 'react-redux'
import { chickenRecipesActions } from '../../../store/actions/chickenRecipesAction'
import { ChickenRecipes } from './ChickenRecipes'

const mapStateToProps = state => ({
  baseUri: state.chickenRecipesReducer.chickenBaseUri,
  chickenRecipes: state.chickenRecipesReducer.chickenRecipes,
  error: state.chickenRecipesReducer.chickenError,
  loading: state.chickenRecipesReducer.chickenLoading
})

const mapDispatchToProps = dispatch => ({
  chickenRecipesActions: dispatch(chickenRecipesActions())
})

const ChickenRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(ChickenRecipes)

export { ChickenRecipesContainer }
