import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isLoggedIn: false,
    allProducts: [], 
  },
  reducers: {
    login: (state) => { state.isLoggedIn = true; },
    logout: (state) => { state.isLoggedIn = false; },
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  }
});

export const { login, logout, setProducts } = adminSlice.actions;
export default adminSlice.reducer;