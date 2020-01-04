const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authError: 'Sign in failed!'
      }

    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      return state

    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }

    default:
      return state
  }
}

export { authReducer }
