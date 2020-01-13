import { apiKey } from '../../config/apiKey'
import { instructions } from '../../config/urls'

export const instructionRecipesActions = id => {
  const instructionRecipesUrl = instructions(id) + apiKey
  return dispatch => {
    dispatch({ type: 'FETCH_INSTRUCTIONRECIPES_LOADING' })
    fetch(instructionRecipesUrl)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_INSTRUCTIONRECIPES_SUCCESS', id, resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_INSTRUCTIONRECIPES_ERROR', error })
    })
  }
}
