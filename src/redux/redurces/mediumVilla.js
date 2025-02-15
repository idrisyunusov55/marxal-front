import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMediumVillaThunk = createAsyncThunk("api/getsizevillaimg", async() => {
    const response = await axios.get("http://localhost:8800/sizevillaimg")
    return response.data
})
export const postMediumVillaThunkk = createAsyncThunk("api/postdeluxesuideimg", async(data) => {
    const response = await axios.post("http://localhost:8800/sizevillaimg", data)
    return response.data
})
export const deleteMediumVillaThunk = createAsyncThunk("api/deletecornersuideimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/sizevillaimg/${id}`)
    return id
})


export const mediumvillaSlice = createSlice({
    name:"mediumvilla",
    initialState:{
        mediumvilla:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getMediumVillaThunk.fulfilled, (state, action) => {
            state.mediumvilla =action.payload
        })
        .addCase(deleteMediumVillaThunk.fulfilled,(state, action) => {
            state.mediumvilla = state.mediumvilla.filter((item) => item._id !== action.payload)
        })
    }
})

export default mediumvillaSlice.reducer