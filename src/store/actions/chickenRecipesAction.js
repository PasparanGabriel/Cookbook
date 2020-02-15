export const chickenRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_CHICKENRECIPES_LOADING' })
    fetch('data/chickenRecipes.json')
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_CHICKENRECIPES_SUCCESS', resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_CHICKENRECIPES_ERROR', error })
    })
  }
}
