import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'
import { porkRecipesReducer } from './porkRecipesReducer'
import { turkeyRecipesReducer } from './turkeyRecipesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipesReducer: beefRecipesReducer,
  chickenRecipesReducer: chickenRecipesReducer,
  porkRecipesReducer: porkRecipesReducer,
  turkeyRecipesReducer: turkeyRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export { rootReducer }
