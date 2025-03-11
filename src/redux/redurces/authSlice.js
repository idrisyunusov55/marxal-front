import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Qeydiyyat Thunk
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
      console.error("Backend xəta mesajı:", error.response?.data);
      return rejectWithValue(error.response?.data || { message: "Qeydiyyat xətası baş verdi" });
    }
  }
);

// Login Thunk
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
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data._id) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error) {
      console.error("Backend xəta mesajı:", error.response?.data);
      return rejectWithValue(error.response?.data || { message: "Daxil olmaq mümkün olmadı" });
    }
  }
);

// Auth Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null, // localStorage-dən oxu
    isFetching: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isError = false;
      state.errorMessage = "";
      localStorage.removeItem("user"); // Çıxış edəndə localStorage-dən sil
    },
  },
  extraReducers: (builder) => {
    builder
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
        localStorage.setItem("user", JSON.stringify(action.payload)); // localStorage-ə yaz
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Qeydiyyat zamanı xəta baş verdi";
      })
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
        localStorage.setItem("user", JSON.stringify(action.payload)); // localStorage-ə yaz
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Daxil olmaq mümkün olmadı";
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;