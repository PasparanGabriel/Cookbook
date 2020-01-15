import { connect } from 'react-redux'
import { tenMinutesRecipesAction } from '../../../store/actions/tenMinutesRecipesAction'
import { TenMinutesRecipes } from './TenMinutesRecipes'

const mapStateToProps = state => ({
  error: state.tenMinutesRecipes.error,
  loading: state.tenMinutesRecipes.loading,
  tenMinutesRecipes: state.tenMinutesRecipes.results
})

const mapDispatchToProps = dispatch => ({
  tenMinutesRecipesActions: dispatch(tenMinutesRecipesAction())
})

export const TenMinutesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TenMinutesRecipes)
