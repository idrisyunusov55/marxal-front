import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Qeydiyyat üçün Thunk
export const registerThunk = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          "http://localhost:8800/auth/register",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Backend xəta mesajı:", error.response?.data); // Xəta mesajını konsola yaz
        return rejectWithValue(error.response?.data || { message: "Xəta baş verdi" });
      }
    }
  );
// Login üçün Thunk
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/auth/login",
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json", // JSON formatında məlumat göndər
          },
        }
      );

      if (response.data._id) {
        return response.data; // Uğurlu cavab
      } else {
        return rejectWithValue(response.data); // Xəta mesajı
      }
    } catch (error) {
      console.error("Backend xəta mesajı:", error.response?.data); // Xəta mesajını konsola yaz
      return rejectWithValue(error.response?.data || { message: "Xəta baş verdi" });
    }
  }
);

// Auth Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isFetching: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Logout üçün reducer
    logout: (state) => {
      state.user = null;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Register Thunk üçün hallar
      .addCase(registerThunk.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Qeydiyyat zamanı xəta baş verdi";
      })

      // Login Thunk üçün hallar
      .addCase(loginThunk.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Daxil olmaq mümkün olmadı";
        state.user = null;
      });
  },
});

// Logout action export edirik
export const { logout } = authSlice.actions;

export default authSlice.reducer;