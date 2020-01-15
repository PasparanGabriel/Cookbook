const initialState = {
  error: null,
  loading: false,
  results: []
}

export const tenMinutesRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TENMINUTESRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_TENMINUTESRECIPES_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.resp.results
      }

    case 'FETCH_TENMINUTESRECIPES_ERROR':
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
