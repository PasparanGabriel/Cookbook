import { apiKey } from '../../config/apiKey'
import { beefRecipes } from '../../config/urls'

const beefRecipesUrl = beefRecipes + apiKey

export const beefRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_BEEFRECIPES_LOADING' })
    fetch(beefRecipesUrl)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_BEEFRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_BEEFRECIPES_ERROR', error })
    })
  }
}
