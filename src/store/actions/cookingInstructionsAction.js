import { apiKey } from '../../config/apiKey'
import { stepsRecipesById } from '../../config/urls'

export const cookingInstructionsAction = id => {
  const stepsRecipesByIdUrl = stepsRecipesById(id) + apiKey
  
  return dispatch => {
    dispatch({ type: 'FETCH_COOKINGINSTRUCTIONS_LOADING' })
    fetch(stepsRecipesByIdUrl)
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
