const initialState = {
  maxCaloriesError: null,
  maxCaloriesLoading: false,
  maxCaloriesRecipes: []
}

export const maxCaloriesRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MAXCALORIESRECIPES_LOADING': 
      return {
        ...state,
        maxCaloriesLoading: true
      }

    case 'FETCH_MAXCALORIESRECIPES_SUCCESS':
      return {
        ...state,
        maxCaloriesLoading: false,
        maxCaloriesRecipes: action.resp.results
      }

    case 'FETCH_MAXCALORIESRECIPES_ERROR':
      return {
        ...state,
        maxCaloriesLoading: false,
        maxCaloriesRecipes: [],
        maxCaloriesError: action.error
      }

    default: 
      return state
  }
}
