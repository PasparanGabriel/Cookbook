const initialState = {
  error: null,
  loading: false,
  results: []
}

export const ingredientsRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_INGREDIENTSRECIPES_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_INGREDIENTSRECIPES_SUCCESS':
      const newResults = {...state.results}
      newResults[action.id] = action.resp.ingredients

      return {
        ...state,
        loading: false,
        results: newResults
      }

    case 'FETCH_INGREDIENTSRECIPES_ERROR':
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
