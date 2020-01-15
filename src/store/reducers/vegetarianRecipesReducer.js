const initialState = {
  baseUri: '',
  error: null,
  loading: false,
  results: []
}

export const vegetarianRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_VEGETARIANRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_VEGETARIANRECIPES_SUCCESS':
      return {
        ...state,
        baseUri: action.resp.baseUri,
        loading: false,
        results: action.resp.results
      }

    case 'FETCH_VEGETARIANRECIPES_ERROR':
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
