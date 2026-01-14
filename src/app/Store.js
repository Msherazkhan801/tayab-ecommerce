import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import adminReducer from "@/features/admin/adminSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer,
  },
});