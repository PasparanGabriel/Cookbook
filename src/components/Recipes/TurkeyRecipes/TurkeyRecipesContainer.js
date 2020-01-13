import { connect } from 'react-redux'
import { turkeyRecipesActions } from '../../../store/actions/turkeyRecipesAction'
import { TurkeyRecipes } from './TurkeyRecipes'

const mapStateToProps = state => ({
  baseUri: state.turkeyRecipesReducer.turkeyBaseUri,
  error: state.turkeyRecipesReducer.turkeyError,
  loading: state.turkeyRecipesReducer.turkeyLoading,
  turkeyRecipes: state.turkeyRecipesReducer.turkeyRecipes
})

const mapDispatchToProps = dispatch => ({
  turkeyRecipesActions: dispatch(turkeyRecipesActions())
})

const TurkeyRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TurkeyRecipes)

export { TurkeyRecipesContainer }
