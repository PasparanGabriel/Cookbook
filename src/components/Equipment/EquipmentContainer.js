import { connect } from 'react-redux'
import { Equipment } from './Equipment'

const mapStateToProps = state => ({
  equipment: state.equipment.results,
  error: state.equipment.error,
  loading: state.equipment.loading
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export const EquipmentContainer = connect(mapStateToProps, mapDispatchToProps)(Equipment)
