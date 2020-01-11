const initialState = {
  chickenBaseUri: '',
  chickenError: null,
  chickenLoading: false,
  chickenRecipes: []
}

export const chickenRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CHICKENRECIPES_LOADING': 
      return {
        ...state,
        chickenLoading: true
      }

    case 'FETCH_CHICKENRECIPES_SUCCESS':
      return {
        ...state,
        chickenLoading: false,
        chickenBaseUri: action.resp.baseUri,
        chickenRecipes: action.resp.results
      }

    case 'FETCH_CHICKENRECIPES_ERROR':
      return {
        ...state,
        chickenLoading: false,
        chickenRecipes: [],
        chickenError: action.error
      }

    default: 
      return state
  }
}
