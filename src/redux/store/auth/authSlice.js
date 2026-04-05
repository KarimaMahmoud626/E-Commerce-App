import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiGetUser(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  currentUser: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.currentUser = null;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loginSuccess, loginStart, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
