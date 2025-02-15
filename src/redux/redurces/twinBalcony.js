import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTwinBalconyThunk = createAsyncThunk("api/gettwinbalconyimg", async() => {
    const response = await axios.get("http://localhost:8800/twinbalconyimg")
    return response.data
})
export const postTwinBalconyThunk = createAsyncThunk("api/posttwinbalconyimg", async(data) => {
    const response = await axios.post("http://localhost:8800/twinbalconyimg", data)
    return response.data
})
export const deleteTwinBalconyThunk = createAsyncThunk("api/deletetwinbalconyimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/twinbalconyimg/${id}`)
    return id
})


export const twinBalconySlice = createSlice({
    name:"twinbalcony",
    initialState:{
        twinbalcony:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getTwinBalconyThunk.fulfilled, (state, action) => {
            state.twinbalcony =action.payload
        })
        .addCase(deleteTwinBalconyThunk.fulfilled,(state, action) => {
            state.twinbalcony = state.twinbalcony.filter((item) => item._id !== action.payload)
        })
    }
})

export default twinBalconySlice.reducer