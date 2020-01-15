import { connect } from 'react-redux'
import { turkeyRecipesAction } from '../../../store/actions/turkeyRecipesAction'
import { TurkeyRecipes } from './TurkeyRecipes'

const mapStateToProps = state => ({
  baseUri: state.turkeyRecipes.baseUri,
  error: state.turkeyRecipes.error,
  loading: state.turkeyRecipes.loading,
  turkeyRecipes: state.turkeyRecipes.results
})

const mapDispatchToProps = dispatch => ({
  turkeyRecipesActions: dispatch(turkeyRecipesAction())
})

export const TurkeyRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TurkeyRecipes)
