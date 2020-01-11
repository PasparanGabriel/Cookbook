const initialState = {
  turkeyBaseUri: '',
  turkeyError: null,
  turkeyLoading: false,
  turkeyRecipes: []
}

export const turkeyRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TURKEYRECIPES_LOADING': 
      return {
        ...state,
        turkeyLoading: true
      }

    case 'FETCH_TURKEYRECIPES_SUCCESS':
      return {
        ...state,
        turkeyLoading: false,
        turkeyBaseUri: action.resp.baseUri,
        turkeyRecipes: action.resp.results
      }

    case 'FETCH_TURKEYRECIPES_ERROR':
      return {
        ...state,
        turkeyLoading: false,
        turkeyRecipes: [],
        turkeyError: action.error
      }

    default: 
      return state
  }
}
