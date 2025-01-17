// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if you have them
  },
});

export default store;
