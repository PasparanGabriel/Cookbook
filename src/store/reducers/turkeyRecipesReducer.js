const initialState = {
  error: '',
  loading: false,
  results: []
}

export const turkeyRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TURKEYRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_TURKEYRECIPES_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.resp.results
      }

    case 'FETCH_TURKEYRECIPES_ERROR':
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
