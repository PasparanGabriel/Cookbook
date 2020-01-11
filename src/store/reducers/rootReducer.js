import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  chickenRecipesReducer: chickenRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export { rootReducer }
