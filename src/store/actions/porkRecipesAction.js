import { porkRecipes } from '../../config/urls'

export const porkRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_PORKRECIPES_LOADING' })
    fetch(porkRecipes)
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
