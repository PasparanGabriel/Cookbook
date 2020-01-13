const initialState = {
  instructionRecipesError: null,
  instructionRecipesLoading: false,
  instructionRecipes: []
}

export const instructionRecipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_INSTRUCTIONRECIPES_LOADING': 
      return {
        ...state,
        instructionRecipesLoading: true
      }

    case 'FETCH_INSTRUCTIONRECIPES_SUCCESS':
      const newInstructionRecipes = {...state.instructionRecipes}
      newInstructionRecipes[action.id] = action.resp[0].steps

      return {
        ...state,
        instructionRecipesLoading: false,
        instructionRecipes: newInstructionRecipes
      }

    case 'FETCH_INSTRUCTIONRECIPES_ERROR':
      return {
        ...state,
        instructionRecipesLoading: false,
        instructionRecipes: [],
        instructionRecipesError: action.error
      }

    default: 
      return state
  }
}
