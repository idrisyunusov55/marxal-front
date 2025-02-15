import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCornerThunk = createAsyncThunk("api/getcornersuideimg", async() => {
    const response = await axios.get("http://localhost:8800/cornersuideimg")
    return response.data
})
export const postCornerThunk = createAsyncThunk("api/postdeluxesuideimg", async(data) => {
    const response = await axios.post("http://localhost:8800/cornersuideimg", data)
    return response.data
})
export const deleteCornerThunk = createAsyncThunk("api/deletecornersuideimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/cornersuideimg/${id}`)
    return id
})


export const cornerSlice = createSlice({
    name:"corner",
    initialState:{
        corner:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getCornerThunk.fulfilled, (state, action) => {
            state.corner =action.payload
        })
        .addCase(deleteCornerThunk.fulfilled,(state, action) => {
            state.corner = state.corner.filter((item) => item._id !== action.payload)
        })
    }
})

export default cornerSlice.reducer