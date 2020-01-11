import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'
import { porkRecipesReducer } from './porkRecipesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipesReducer: beefRecipesReducer,
  chickenRecipesReducer: chickenRecipesReducer,
  porkRecipesReducer: porkRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export { rootReducer }
