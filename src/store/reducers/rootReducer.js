import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'
import { instructionRecipesReducer } from './instructionRecipesReducer'
import { maxCaloriesRecipesReducer } from './maxCaloriesRecipesReducer'
import { porkRecipesReducer } from './porkRecipesReducer'
import { tenMinutesRecipesReducer } from './tenMinutesRecipesReducer'
import { turkeyRecipesReducer } from './turkeyRecipesReducer'
import { vegetarianRecipesReducer } from './vegetarianRecipesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipesReducer: beefRecipesReducer,
  chickenRecipesReducer: chickenRecipesReducer,
  instructionRecipesReducer: instructionRecipesReducer,
  maxCaloriesRecipesReducer: maxCaloriesRecipesReducer,
  porkRecipesReducer: porkRecipesReducer,
  tenMinutesRecipesReducer: tenMinutesRecipesReducer,
  turkeyRecipesReducer: turkeyRecipesReducer,
  vegetarianRecipesReducer: vegetarianRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export { rootReducer }
