import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [];
const cartSlice = createSlice({
  name: 'cart',
  initialState: tasksInitialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        const checkIsInCart = state.some(item => item.id === action.payload.id);
        if (!checkIsInCart) {
          state.push(action.payload);
        } else {
        }
      },
      prepare(data) {
        console.log(data.id);
        return {
          payload: data,
        };
      },
    },
    deleteProduct(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addProduct, deleteProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
