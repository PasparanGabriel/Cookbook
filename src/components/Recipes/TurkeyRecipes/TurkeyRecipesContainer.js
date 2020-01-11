import { connect } from 'react-redux'
import { turkeyRecipesActions } from '../../../store/actions/turkeyRecipesActions'
import { TurkeyRecipes } from './TurkeyRecipes'

const mapStateToProps = state => ({
  baseUri: state.turkeyRecipesReducer.turkeyBaseUri,
  turkeyRecipes: state.turkeyRecipesReducer.turkeyRecipes,
  error: state.turkeyRecipesReducer.turkeyError,
  loading: state.turkeyRecipesReducer.turkeyLoading
})

const mapDispatchToProps = dispatch => ({
  turkeyRecipesActions: dispatch(turkeyRecipesActions())
})

const TurkeyRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TurkeyRecipes)

export { TurkeyRecipesContainer }
