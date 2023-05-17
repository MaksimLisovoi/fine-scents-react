import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productsSlice = createSlice({
  // Ім'я слайсу
  name: 'products',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  extraReducers: {
    [fetchProducts.pending]: handlePending,
    [fetchProducts.rejected]: handleRejected,

    [fetchProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
