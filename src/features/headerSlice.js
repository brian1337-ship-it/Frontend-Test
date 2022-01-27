import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  language: "en",
  pages: [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Latest", path: "/latest" },
    { name: "People & Careers", path: "/people&careers" },
    { name: "Contact", path: "/contact" },
  ],
  section: "partners",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMobileMenu: (state, action) => {
      state.menuOpen = action.payload;
    },

    toggleLanguage: (state, action) => {
      state.language = action.payload;
    },

    navigateToSection: (state, action) => {
      state.sectiono = action.payload;
    },
  },
});

export const { toggleMobileMenu, toggleLanguage, navigateToSection } = headerSlice.actions;

// Selectors - this is how we pull information from the global store
export const selectMobileMenuState = (state) => state.header.menuOpen;
export const selectPages = (state) => state.header.pages;
export const selectLanguage = (state) => state.header.language;
export const selectSection = (state) => state.header.section; 

export default headerSlice.reducer;
