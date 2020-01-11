import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipesReducer: beefRecipesReducer,
  chickenRecipesReducer: chickenRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export { rootReducer }
