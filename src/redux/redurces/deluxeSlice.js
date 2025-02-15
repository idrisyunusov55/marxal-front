import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDeluxeThunk = createAsyncThunk("api/gettdeluxesuideimg", async() => {
    const response = await axios.get("http://localhost:8800/deluxesuideimg")
    return response.data
})
export const postDeluxeThunk = createAsyncThunk("api/postdeluxesuideimg", async(data) => {
    const response = await axios.post("http://localhost:8800/deluxesuideimg", data)
    return response.data
})
export const deleteDeluxeThunk = createAsyncThunk("api/deletedeluxesuideimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/deluxesuideimg/${id}`)
    return id
})


export const deluxeSlice = createSlice({
    name:"deluxe",
    initialState:{
        deluxe:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getDeluxeThunk.fulfilled, (state, action) => {
            state.deluxe =action.payload
        })
        .addCase(deleteDeluxeThunk.fulfilled,(state, action) => {
            state.deluxe = state.deluxe.filter((item) => item._id !== action.payload)
        })
    }
})

export default deluxeSlice.reducer