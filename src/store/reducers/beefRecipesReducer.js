const initialState = {
  beefBaseUri: '',
  beefError: null,
  beefLoading: false,
  beefRecipes: []
}

export const beefRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BEEFRECIPES_LOADING': 
      return {
        ...state,
        beefLoading: true
      }

    case 'FETCH_BEEFRECIPES_SUCCESS':
      return {
        ...state,
        beefLoading: false,
        beefBaseUri: action.resp.baseUri,
        beefRecipes: action.resp.results
      }

    case 'FETCH_BEEFRECIPES_ERROR':
      return {
        ...state,
        beefLoading: false,
        beefRecipes: [],
        beefError: action.error
      }

    default: 
      return state
  }
}
