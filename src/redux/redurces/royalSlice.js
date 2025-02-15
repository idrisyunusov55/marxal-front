import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRoyalThunk = createAsyncThunk("api/getroyalsuiteimg", async() => {
    const response = await axios.get("http://localhost:8800/royalsuiteimg")
    return response.data
})
export const postRoyalThunk = createAsyncThunk("api/postroyalsuiteimg", async(data) => {
    const response = await axios.post("http://localhost:8800/royalsuiteimg", data)
    return response.data
})
export const deleteRoyalThunk = createAsyncThunk("api/deleteroyalsuiteimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/royalsuiteimg/${id}`)
    return id
})


export const royalSlice = createSlice({
    name:"royal",
    initialState:{
        royal:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getRoyalThunk.fulfilled, (state, action) => {
            state.royal =action.payload
        })
        .addCase(deleteRoyalThunk.fulfilled,(state, action) => {
            state.royal = state.royal.filter((item) => item._id !== action.payload)
        })
    }
})

export default royalSlice.reducer