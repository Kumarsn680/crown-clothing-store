import { combineReducers } from "redux";
import { cartReducer } from "./Cart_Reducer";
import { CategoriesReducer } from "./Categories_Reducer";
import { userReducer } from "./User_Reducer";


export const rootReducer = combineReducers({
  user: userReducer,
  categories: CategoriesReducer,
  cart : cartReducer
});