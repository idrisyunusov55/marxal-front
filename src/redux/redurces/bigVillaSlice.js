import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBigVillaThunk = createAsyncThunk("api/getbigvillaimg", async() => {
    const response = await axios.get("http://localhost:8800/bigvillaimg")
    return response.data
})
export const postBigVillaThunk = createAsyncThunk("api/postbigvillaimg", async(data) => {
    const response = await axios.post("http://localhost:8800/bigvillaimg", data)
    return response.data
})
export const deleteBigVillaThunk = createAsyncThunk("api/deletebigvillaimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/bigvillaimg/${id}`)
    return id
})


export const bigvillaSlice = createSlice({
    name:"bigvilla",
    initialState:{
        bigvilla:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getBigVillaThunk.fulfilled, (state, action) => {
            state.bigvilla =action.payload
        })
        .addCase(deleteBigVillaThunk.fulfilled,(state, action) => {
            state.bigvilla = state.bigvilla.filter((item) => item._id !== action.payload)
        })
    }
})

export default bigvillaSlice.reducer