const initialState = {
  baseUri: '',
  error: '',
  loading: false,
  results: []
}

export const beefRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BEEFRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_BEEFRECIPES_SUCCESS':
      return {
        ...state,
        baseUri: action.resp.baseUri,
        loading: false,
        results: action.resp.results
      }

    case 'FETCH_BEEFRECIPES_ERROR':
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
