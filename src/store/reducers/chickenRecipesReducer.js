const initialState = {
  error: '',
  loading: false,
  results: []
}

export const chickenRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CHICKENRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_CHICKENRECIPES_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.resp.results
      }

    case 'FETCH_CHICKENRECIPES_ERROR':
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
