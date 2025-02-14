import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getKingRoomsThunk = createAsyncThunk("api/getstandartkingimg", async() => {
    const response = await axios.get("http://localhost:8800/standartKingimg")
    return response.data
})
export const postKingRoomsThunk = createAsyncThunk("api/poststandartkingimg", async(data) => {
    const response = await axios.post("http://localhost:8800/standartKingimg", data)
    return response.data
})
export const deleteKingRoomsThunk = createAsyncThunk("api/deletestandartkingimg", async(id) => {
    const response = await axios.get(`http://localhost:8800/standartKingimg/${id}`)
    return id
})


export const standartKingRoomsSlice = createSlice({
    name:"standarkings",
    initialState:{
        standartKings:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getKingRoomsThunk.fulfilled, (state, action) => {
            state.standartKings=action.payload
        })
        .addCase(deleteKingRoomsThunk.fulfilled,(state, action) => {
            state.standartKings = state.standartKings.filter((item) => item._id !== action.payload)
        })
    }
})

export default standartKingRoomsSlice.reducer