import { createSlice } from "@reduxjs/toolkit";

const themeExist = JSON.parse(localStorage.getItem("theme"));

const themeSlice = createSlice({
  name: "theme", 
  initialState: { theme: themeExist !== null ? themeExist : false },
  reducers: {
    switchTheme: (state) => {
      state.theme = !state.theme;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
