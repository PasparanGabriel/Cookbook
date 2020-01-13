import { connect } from 'react-redux'
import { tenMinutesRecipesActions } from '../../../store/actions/tenMinutesRecipesAction'
import { TenMinutesRecipes } from './TenMinutesRecipes'

const mapStateToProps = state => ({
  error: state.tenMinutesRecipesReducer.beefError,
  loading: state.tenMinutesRecipesReducer.beefLoading,
  tenMinutesRecipes: state.tenMinutesRecipesReducer.tenMinutesRecipes
})

const mapDispatchToProps = dispatch => ({
  tenMinutesRecipesActions: dispatch(tenMinutesRecipesActions())
})

const TenMinutesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TenMinutesRecipes)

export { TenMinutesRecipesContainer }
