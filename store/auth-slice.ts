import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  username: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: () => authInitialState,
  reducers: {
    logIn(state, action) {
      state.username = action.payload.username;
      state.isLoggedIn = true;
      localStorage.setItem("username", action.payload.username);
    },
    logOut(state) {
      state.username = "";
      state.isLoggedIn = false;
      localStorage.removeItem("username");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
