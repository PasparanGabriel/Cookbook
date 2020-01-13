import { apiKey } from '../../config/apiKey'
import { vegetarianRecipes } from '../../config/urls'

const vegetarianRecipesUrl = vegetarianRecipes + apiKey

export const vegetarianRecipesActions = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_VEGETARIANRECIPES_LOADING' })
    fetch(vegetarianRecipesUrl)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_VEGETARIANRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_VEGETARIANRECIPES_ERROR', error })
    })
  }
}
