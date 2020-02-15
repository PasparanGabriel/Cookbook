export const beefRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_BEEFRECIPES_LOADING' })
    fetch('data/beefRecipes.json')
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
