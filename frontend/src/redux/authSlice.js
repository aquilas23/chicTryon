import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState, // 👈 MUST be defined
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateuser:(state,action)=>{
      console.log(state);
      state.user=action.payload.user;
    }
  },
});

export const { loginSuccess, logout,updateuser } = authSlice.actions;

// 👇 THIS IS CRITICAL
export default authSlice.reducer;
