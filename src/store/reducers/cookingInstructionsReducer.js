const initialState = {
  cookingInstructionsError: null,
  cookingInstructionsLoading: false,
  cookingInstructions: []
}

export const cookingInstructionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_COOKINGINSTRUCTIONS_LOADING': 
      return {
        ...state,
        cookingInstructionsLoading: true
      }

    case 'FETCH_COOKINGINSTRUCTIONS_SUCCESS':
      const newcookingInstructions = {...state.cookingInstructions}
      newcookingInstructions[action.id] = action.resp[0].steps

      return {
        ...state,
        cookingInstructionsLoading: false,
        cookingInstructions: newcookingInstructions
      }

    case 'FETCH_COOKINGINSTRUCTIONS_ERROR':
      return {
        ...state,
        cookingInstructionsLoading: false,
        cookingInstructions: [],
        cookingInstructionsError: action.error
      }

    default: 
      return state
  }
}
