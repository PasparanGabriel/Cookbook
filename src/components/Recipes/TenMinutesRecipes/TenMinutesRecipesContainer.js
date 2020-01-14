import { connect } from 'react-redux'
import { tenMinutesRecipesActions } from '../../../store/actions/tenMinutesRecipesAction'
import { TenMinutesRecipes } from './TenMinutesRecipes'

const mapStateToProps = state => ({
  error: state.tenMinutesRecipes.beefError,
  loading: state.tenMinutesRecipes.beefLoading,
  tenMinutesRecipes: state.tenMinutesRecipes.tenMinutesRecipes
})

const mapDispatchToProps = dispatch => ({
  tenMinutesRecipesActions: dispatch(tenMinutesRecipesActions())
})

export const TenMinutesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TenMinutesRecipes)
