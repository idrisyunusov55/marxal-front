import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAmbassadorThunk = createAsyncThunk("api/getambassadorsuiteimg", async() => {
    const response = await axios.get("http://localhost:8800/ambassadorsuiteimg")
    return response.data
})
export const postAmbassadorThunk = createAsyncThunk("api/postambassadorsuiteimg", async(data) => {
    const response = await axios.post("http://localhost:8800/ambassadorsuiteimg", data)
    return response.data
})
export const deleteAmbassadorThunk = createAsyncThunk("api/deleteambassadorsuiteimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/ambassadorsuiteimg/${id}`)
    return id
})


export const ambassadorSlice = createSlice({
    name:"ambassador",
    initialState:{
        ambassador:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getAmbassadorThunk.fulfilled, (state, action) => {
            state.ambassador =action.payload
        })
        .addCase(deleteAmbassadorThunk.fulfilled,(state, action) => {
            state.ambassador = state.ambassador.filter((item) => item._id !== action.payload)
        })
    }
})

export default ambassadorSlice.reducer