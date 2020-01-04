export const signIn = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      user.email,
      user.password
    ).then(() => {
      dispatch({ type: 'SIGNIN_SUCCESS' })
    }).catch((err) => {
      dispatch({ 
        type: 'SIGNIN_ERROR',
        err
      })
    })
  }
} 
