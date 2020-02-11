import { ingredientsRecipesById } from '../../config/urls'


export const ingredientsRecipesAction = id => {
  return dispatch => {
    dispatch({ type: 'FETCH_INGREDIENTSRECIPES_LOADING' })
    fetch(ingredientsRecipesById(id))
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_INGREDIENTSRECIPES_SUCCESS', id, resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_INGREDIENTSRECIPES_ERROR', error })
    })
  }
}
