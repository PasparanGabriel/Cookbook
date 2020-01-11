const initialState = {
  porkBaseUri: '',
  porkError: null,
  porkLoading: false,
  porkRecipes: []
}

export const porkRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PORKRECIPES_LOADING': 
      return {
        ...state,
        porkLoading: true
      }

    case 'FETCH_PORKRECIPES_SUCCESS':
      return {
        ...state,
        porkLoading: false,
        porkBaseUri: action.resp.baseUri,
        porkRecipes: action.resp.results
      }

    case 'FETCH_PORKRECIPES_ERROR':
      return {
        ...state,
        porkLoading: false,
        porkRecipes: [],
        porkError: action.error
      }

    default: 
      return state
  }
}
