import { stepsRecipesById } from '../../config/urls'

export const cookingInstructionsAction = id => {
  return dispatch => {
    dispatch({ type: 'FETCH_COOKINGINSTRUCTIONS_LOADING' })
    fetch(stepsRecipesById(id))
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_COOKINGINSTRUCTIONS_SUCCESS', id, resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_COOKINGINSTRUCTIONS_ERROR', error })
    })
  }
}
