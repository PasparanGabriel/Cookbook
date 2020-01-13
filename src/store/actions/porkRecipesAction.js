import { apiKey } from '../../config/apiKey'
import { porkRecipes } from '../../config/urls'

const porkRecipesUrl = porkRecipes + apiKey

export const porkRecipesActions = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_PORKRECIPES_LOADING' })
    fetch(porkRecipesUrl)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_PORKRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_PORKRECIPES_ERROR', error })
    })
  }
}
