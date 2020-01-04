const initState = {
  authErrorSignIn: null,
  authErrorSignUp: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authErrorSignIn: action.err.message
      }

    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authErrorSignIn: null
      }

    case 'SIGNOUT_SUCCESS':
      return state

    case 'SIGNUP_ERROR':
      return {
        ...state,
        authErrorSignUp: action.err.message
      }
    
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authErrorSignUp: null
      }

    default:
      return state
  }
}

export { authReducer }
