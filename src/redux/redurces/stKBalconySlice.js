import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSTKBalconyThunk = createAsyncThunk("api/getkingbalconyimg", async() => {
    const response = await axios.get("http://localhost:8800/kingbalconyimg")
    return response.data
})
export const postSTKBalconyThunk = createAsyncThunk("api/postkingbalconyimg", async(data) => {
    const response = await axios.post("http://localhost:8800/kingbalconyimg", data)
    return response.data
})
export const deleteSTKBalconyThunk = createAsyncThunk("api/deletekingbalconyimg", async(id) => {
    const response = await axios.delete(`http://localhost:8800/kingbalconyimg/${id}`)
    return id
})


export const stKBalconySlice = createSlice({
    name:"stbalcony",
    initialState:{
        stbalcony:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getSTKBalconyThunk.fulfilled, (state, action) => {
            state.stbalcony =action.payload
        })
        .addCase(deleteSTKBalconyThunk.fulfilled,(state, action) => {
            state.stbalcony = state.stbalcony.filter((item) => item._id !== action.payload)
        })
    }
})

export default stKBalconySlice.reducer