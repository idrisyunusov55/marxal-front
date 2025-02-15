import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTripleThunk = createAsyncThunk("api/gettripleimg", async() => {
    const response = await axios.get("http://localhost:8800/tripleimg")
    return response.data
})
export const postTripleThunk = createAsyncThunk("api/posttripleimg", async(data) => {
    const response = await axios.post("http://localhost:8800/tripleimg", data)
    return response.data
})
export const deleteTripleThunk = createAsyncThunk("api/deletetwinbalconyimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/tripleimg/${id}`)
    return id
})


export const tripleSlice = createSlice({
    name:"triple",
    initialState:{
        triple:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getTripleThunk.fulfilled, (state, action) => {
            state.triple =action.payload
        })
        .addCase(deleteTripleThunk.fulfilled,(state, action) => {
            state.triple = state.triple.filter((item) => item._id !== action.payload)
        })
    }
})

export default tripleSlice.reducer