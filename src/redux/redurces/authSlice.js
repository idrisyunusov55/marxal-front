import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerThunk = createAsyncThunk('api/register', async (data) => {
    const response = await axios.post('http://localhost:8800/auth/register', data);
    return response.data;
});

export const loginThunk = createAsyncThunk('api/login', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:8800/auth/login', data);

        if (response.data._id) {
            return response.data;
        } else {
            return rejectWithValue(response.data);
        }
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Xəta baş verdi" });
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isFetching: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerThunk.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isFetching = false;
                state.user = action.payload;
            })
            .addCase(registerThunk.rejected, (state) => {
                state.isFetching = false;
                state.isError = true;
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
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = action.payload?.message || "Xəta baş verdi";
                state.user = null;
            });
    },
});

export default authSlice.reducer;
