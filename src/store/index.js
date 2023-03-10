import { configureStore } from '@reduxjs/toolkit'
import {
   formReducer,
   getUserData,
   openUserData,
   deleteUserData,
} from './slices/formSlice'
import {
   foodReducer,
   addIngredientData,
   addMeal,
   deleteIngredient,
   addRecipe,
   deleteRecipe,
   deleteAllRecipes,
   deleteAllMeal,
} from './slices/foodSlice'

const store = configureStore({
   reducer: {
      storeForm: formReducer,
      storeFood: foodReducer,
   },
})

export {
   store,
   addIngredientData,
   addMeal,
   deleteIngredient,
   addRecipe,
   deleteRecipe,
   deleteAllRecipes,
   deleteAllMeal,
   getUserData,
   openUserData,
   deleteUserData,
}
