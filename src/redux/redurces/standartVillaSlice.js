import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStandartVillaThunk = createAsyncThunk("api/getstandartvillaimg", async() => {
    const response = await axios.get("http://localhost:8800/standartvillaimg")
    return response.data
})
export const postStandartVillaThunk = createAsyncThunk("api/poststandartvillaimg", async(data) => {
    const response = await axios.post("http://localhost:8800/standartvillaimg", data)
    return response.data
})
export const deleteStandartVillaThunk = createAsyncThunk("api/deletestandartvillaimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/standartvillaimg/${id}`)
    return id
})


export const standartVillaSlice = createSlice({
    name:"standartvilla",
    initialState:{
        standartvilla:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getStandartVillaThunk.fulfilled, (state, action) => {
            state.standartvilla =action.payload
        })
        .addCase(deleteStandartVillaThunk.fulfilled,(state, action) => {
            state.standartvilla = state.standartvilla.filter((item) => item._id !== action.payload)
        })
    }
})

export default standartVillaSlice.reducer