import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = {
  items: {},
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: tasksInitialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        // const checkIsInCart = state.some(item => item.id === action.payload.id);
        if (!state.items[action.payload.id]) {
          state.items[action.payload.id] = [];
        }
        state.items[action.payload.id].push(action.payload);
      },
      prepare(data) {
        console.log(data.id);
        return {
          payload: data,
        };
      },
    },
    // setTotalPrice: {
    //   reducer(state, action) {
    //     // const checkIsInCart = state.some(item => item.id === action.payload.id);

    //     state.totalPrice = action.payload;
    //   },
    //   prepare(data) {
    //     return {
    //       payload: data,
    //     };
    //   },
    // },
    deleteProduct(state, action) {
      delete state.items[action.payload];
      // state.splice(index, 1);
    },
    minusProduct(state, action) {
      // state.items[action.payload.id].pop();
      state.items[action.payload].pop();
      state.items[action.payload].length === 0 &&
        delete state.items[action.payload];
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addProduct, deleteProduct, minusProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
