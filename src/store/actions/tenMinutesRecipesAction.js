export const tenMinutesRecipesAction = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_TENMINUTESRECIPES_LOADING' })
    fetch('data/tenMinutesRecipes.json')
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
