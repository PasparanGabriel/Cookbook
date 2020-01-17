import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './authReducer'
import { beefRecipesReducer } from './beefRecipesReducer'
import { chickenRecipesReducer } from './chickenRecipesReducer'
import { cookingInstructionsReducer } from './cookingInstructionsReducer'
import { ingredientsRecipesReducer } from './ingredientsRecipesReducer'
import { maxCaloriesRecipesReducer } from './maxCaloriesRecipesReducer'
import { summaryReducer } from './summaryReducer'
import { porkRecipesReducer } from './porkRecipesReducer'
import { tenMinutesRecipesReducer } from './tenMinutesRecipesReducer'
import { turkeyRecipesReducer } from './turkeyRecipesReducer'
import { vegetarianRecipesReducer } from './vegetarianRecipesReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  beefRecipes: beefRecipesReducer,
  chickenRecipes: chickenRecipesReducer,
  cookingInstructions: cookingInstructionsReducer,
  ingredientsRecipes: ingredientsRecipesReducer,
  maxCaloriesRecipes: maxCaloriesRecipesReducer,
  summary: summaryReducer,
  porkRecipes: porkRecipesReducer,
  tenMinutesRecipes: tenMinutesRecipesReducer,
  turkeyRecipes: turkeyRecipesReducer,
  vegetarianRecipes: vegetarianRecipesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})
