import { connect } from 'react-redux'
import { turkeyRecipesActions } from '../../../store/actions/turkeyRecipesAction'
import { TurkeyRecipes } from './TurkeyRecipes'

const mapStateToProps = state => ({
  baseUri: state.turkeyRecipes.turkeyBaseUri,
  error: state.turkeyRecipes.turkeyError,
  loading: state.turkeyRecipes.turkeyLoading,
  turkeyRecipes: state.turkeyRecipes.turkeyRecipes
})

const mapDispatchToProps = dispatch => ({
  turkeyRecipesActions: dispatch(turkeyRecipesActions())
})

export const TurkeyRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TurkeyRecipes)
