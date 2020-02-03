const initialState = {
  error: '',
  loading: false,
  results: []
}

export const summaryReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_SUMMARY_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_SUMMARY_SUCCESS':
      const newResults = {...state.results}
      newResults[action.id] = action.resp

      return {
        ...state,
        loading: false,
        results: newResults
      }

    case 'FETCH_SUMMARY_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
        results: []
      }

    default: 
      return state
  }
}
