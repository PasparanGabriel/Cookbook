import { apiKey } from '../../config/apiKey'
import { equipmentRecipesById } from '../../config/urls'

export const equipmentAction = id => {
  const equipmentRecipesByIdUrl = equipmentRecipesById(id) + apiKey
  return dispatch => {
    dispatch({ type: 'FETCH_EQUIPMENT_LOADING' })
    fetch(equipmentRecipesByIdUrl)
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
