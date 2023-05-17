import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cartSlice';
import { productsReducer } from './productsSlice';
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
