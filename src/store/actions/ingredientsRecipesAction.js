import { apiKey } from '../../config/apiKey'
import { ingredientsRecipesById } from '../../config/urls'


export const ingredientsRecipesAction = id => {
  const ingredientsRecipesByIdUrl = ingredientsRecipesById(id) + apiKey
  
  return dispatch => {
    dispatch({ type: 'FETCH_INGREDIENTSRECIPES_LOADING' })
    fetch(ingredientsRecipesByIdUrl)
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
