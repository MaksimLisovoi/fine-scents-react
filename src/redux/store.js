import { configureStore } from '@reduxjs/toolkit';
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================

import { cartReducer } from './cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
