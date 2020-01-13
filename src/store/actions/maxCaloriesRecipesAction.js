import { apiKey } from '../../config/apiKey'
import { maxCaloriesRecipes } from '../../config/urls'

const maxCaloriesRecipesUrl = maxCaloriesRecipes + apiKey

export const maxCaloriesRecipesActions = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_MAXCALORIESRECIPES_LOADING' })
    fetch(maxCaloriesRecipesUrl)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_MAXCALORIESRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_MAXCALORIESRECIPES_ERROR', error })
    })
  }
}
