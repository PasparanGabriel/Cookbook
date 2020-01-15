const initialState = {
  error: null,
  loading: false,
  results: []
}

export const maxCaloriesRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MAXCALORIESRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_MAXCALORIESRECIPES_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.resp.results
      }

    case 'FETCH_MAXCALORIESRECIPES_ERROR':
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
