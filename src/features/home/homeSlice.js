import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  icon: "",
  quizzes: [],
  darkmode: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    selectQuiz(state, action) {
      state.name = action.payload;
    },
    selectIcon(state, action) {
      state.icon = action.payload;
    },
    setQuizzes(state, action) {
      state.quizzes = action.payload;
    },
    resetMode(state) {
      state.name = initialState.name;
      state.icon = initialState.icon;
      state.quizzes = initialState.quizzes;
    },
    setDarkMode(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { selectQuiz, selectIcon, setQuizzes, resetMode, setDarkMode } =
  homeSlice.actions;
export default homeSlice.reducer;
