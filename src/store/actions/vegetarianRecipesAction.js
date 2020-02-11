import { vegetarianRecipes } from '../../config/urls'

export const vegetarianRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_VEGETARIANRECIPES_LOADING' })
    fetch(vegetarianRecipes)
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
