const initialState = {
  error: null,
  loading: false,
  results: []
}

export const cookingInstructionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_COOKINGINSTRUCTIONS_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_COOKINGINSTRUCTIONS_SUCCESS':
      const newResults = {...state.results}
      newResults[action.id] = action.resp[0] && action.resp[0].steps

      return {
        ...state,
        loading: false,
        results: newResults
      }

    case 'FETCH_COOKINGINSTRUCTIONS_ERROR':
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
