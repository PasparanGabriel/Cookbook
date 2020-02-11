import { summaryRecipesById } from '../../config/urls'

export const summaryAction = id => {
  return dispatch => {
    dispatch({ type: 'FETCH_SUMMARY_LOADING' })
    fetch(summaryRecipesById(id))
    .then(resp => resp.json())
    .then(resp => {
      if (resp.error) {
        throw(resp.error)
      }
      dispatch({ type: 'FETCH_SUMMARY_SUCCESS', id, resp })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_SUMMARY_ERROR', error })
    })
  }
}
