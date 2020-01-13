import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'
import { instructionRecipesReducer } from './instructionRecipesReducer'
import { porkRecipesReducer } from './porkRecipesReducer'
import { turkeyRecipesReducer } from './turkeyRecipesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipesReducer: beefRecipesReducer,
  chickenRecipesReducer: chickenRecipesReducer,
  instructionRecipesReducer: instructionRecipesReducer,
  porkRecipesReducer: porkRecipesReducer,
  turkeyRecipesReducer: turkeyRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export { rootReducer }
