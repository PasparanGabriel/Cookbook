const initialState = {
  error: '',
  loading: false,
  results: []
}

export const equipmentReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_EQUIPMENT_LOADING': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_EQUIPMENT_SUCCESS':
      const newResults = {...state.results}
      newResults[action.id] = action.resp.equipment

      return {
        ...state,
        loading: false,
        results: newResults
      }

    case 'FETCH_EQUIPMENT_ERROR':
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
