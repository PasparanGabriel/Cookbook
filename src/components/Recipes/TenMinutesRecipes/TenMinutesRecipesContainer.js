import { connect } from 'react-redux'
import { tenMinutesRecipesActions } from '../../../store/actions/tenMinutesRecipesActions'
import { TenMinutesRecipes } from './TenMinutesRecipes'

const mapStateToProps = state => ({
  tenMinutesRecipes: state.tenMinutesRecipesReducer.tenMinutesRecipes,
  error: state.tenMinutesRecipesReducer.beefError,
  loading: state.tenMinutesRecipesReducer.beefLoading
})

const mapDispatchToProps = dispatch => ({
  tenMinutesRecipesActions: dispatch(tenMinutesRecipesActions())
})

const TenMinutesRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(TenMinutesRecipes)

export { TenMinutesRecipesContainer }
