import AuthReducer from "@/features/auth/authSlice";
import ProductReducer from "@/features/products/productSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,

});

export default reducers;