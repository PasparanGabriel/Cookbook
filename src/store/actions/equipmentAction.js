import { equipmentRecipesById } from '../../config/urls'

export const equipmentAction = id => {
  return dispatch => {
    dispatch({ type: 'FETCH_EQUIPMENT_LOADING' })
    fetch(equipmentRecipesById(id))
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_EQUIPMENT_SUCCESS', id, resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_EQUIPMENT_ERROR', error })
    })
  }
}
