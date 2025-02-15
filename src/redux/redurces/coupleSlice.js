import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoupleThunk = createAsyncThunk("api/getcouplevillaimg", async() => {
    const response = await axios.get("http://localhost:8800/couplevillaimg")
    return response.data
})
export const postCoupleThunk = createAsyncThunk("api/postcouplevillaimg", async(data) => {
    const response = await axios.post("http://localhost:8800/couplevillaimg", data)
    return response.data
})
export const deleteCoupleThunk = createAsyncThunk("api/deletecouplevillaimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/couplevillaimg/${id}`)
    return id
})


export const coupleSlice = createSlice({
    name:"couple",
    initialState:{
        couple:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getCoupleThunk.fulfilled, (state, action) => {
            state.couple =action.payload
        })
        .addCase(deleteCoupleThunk.fulfilled,(state, action) => {
            state.corner = state.corner.filter((item) => item._id !== action.payload)
        })
    }
})

export default coupleSlice.reducer