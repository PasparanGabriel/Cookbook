const initialState = {
  tenMinutesError: null,
  tenMinutesLoading: false,
  tenMinutesRecipes: []
}

export const tenMinutesRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TENMINUTESRECIPES_LOADING': 
      return {
        ...state,
        tenMinutesLoading: true
      }

    case 'FETCH_TENMINUTESRECIPES_SUCCESS':
      return {
        ...state,
        tenMinutesLoading: false,
        tenMinutesRecipes: action.resp.results
      }

    case 'FETCH_TENMINUTESRECIPES_ERROR':
      return {
        ...state,
        tenMinutesLoading: false,
        tenMinutesRecipes: [],
        tenMinutesError: action.error
      }

    default: 
      return state
  }
}
