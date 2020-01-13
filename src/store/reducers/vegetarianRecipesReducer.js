const initialState = {
  vegetarianBaseUri: '',
  vegetarianError: null,
  vegetarianLoading: false,
  vegetarianRecipes: []
}

export const vegetarianRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_VEGETARIANRECIPES_LOADING': 
      return {
        ...state,
        vegetarianLoading: true
      }

    case 'FETCH_VEGETARIANRECIPES_SUCCESS':
      return {
        ...state,
        vegetarianLoading: false,
        vegetarianBaseUri: action.resp.baseUri,
        vegetarianRecipes: action.resp.results
      }

    case 'FETCH_VEGETARIANRECIPES_ERROR':
      return {
        ...state,
        vegetarianLoading: false,
        vegetarianRecipes: [],
        vegetarianError: action.error
      }

    default: 
      return state
  }
}
