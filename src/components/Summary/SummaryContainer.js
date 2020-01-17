import { connect } from 'react-redux'
import { Summary } from './Summary'

const mapStateToProps = state => ({
  error: state.summary.error,
  loading: state.summary.loading,
  summary: state.summary.results
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary)
