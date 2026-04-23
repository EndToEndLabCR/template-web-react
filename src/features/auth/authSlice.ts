import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ILoginArgs {
  username: string;
  password: string;
}

interface ILoginResponse {
  name: string;
}

interface IAuthState {
  username: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IAuthState = {
  username: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk<ILoginResponse, ILoginArgs>(
  "auth/login",
  async (args) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: args.username,
        password: args.password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data: unknown = await response.json();

    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      typeof (data as { name?: unknown }).name !== "string"
    ) {
      throw new Error("Unexpected login response");
    }

    return { name: (data as { name: string }).name };
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.username = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.username = action.payload.name;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
