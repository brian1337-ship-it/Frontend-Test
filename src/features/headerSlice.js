import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
  pages: [{name: "About", path: "/about"},{name: "Work", path: "/work"},]
};


export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleMobileMenu: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { toggleMobileMenu } = headerSlice.actions;

// Selectors - this is how we pull information from the global store
export const selectMobileMenuState = (state) => state.header.menuOpen;
export const selectPages = (state) => state.header.pages;


export default headerSlice.reducer;
