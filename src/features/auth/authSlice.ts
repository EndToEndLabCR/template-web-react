import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  username: string | null;
}

const initialState: IAuthState = {
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = null;
    },
  },
});

export const { setUsername, logout } = authSlice.actions;
export default authSlice.reducer;
