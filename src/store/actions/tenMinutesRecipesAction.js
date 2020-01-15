import { apiKey } from '../../config/apiKey'
import { tenMinutesRecipes } from '../../config/urls'

const tenMinutesRecipesUrl = tenMinutesRecipes + apiKey

export const tenMinutesRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_TENMINUTESRECIPES_LOADING' })
    fetch(tenMinutesRecipesUrl)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_TENMINUTESRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_TENMINUTESRECIPES_ERROR', error })
    })
  }
}
