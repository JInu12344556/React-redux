import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // Logic to add an item to the cart
    },
    removeItem(state, action) {
      // Logic to remove an item from the cart
    },
    updateQuantity(state, action) {
      // Logic to update the quantity of an item
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
