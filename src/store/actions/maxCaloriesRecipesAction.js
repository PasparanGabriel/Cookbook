export const maxCaloriesRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_MAXCALORIESRECIPES_LOADING' })
    fetch('data/maxCaloriesRecipes.json')
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
