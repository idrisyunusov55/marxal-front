import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRoomCardsThunk = createAsyncThunk("getroom", async() => {
    const response = await axios.get('http://localhost:8800/room')
    return response.data
})

export const postRoomCardsThunk = createAsyncThunk("postroom", async(data) => {
    const response = await axios.post("http://localhost:8800/room", data)
    return response.data
})

export const deleteRoomCardsThunk = createAsyncThunk("deleteroom", async(id) => {
    const response = await axios.delete(`http://localhost:8800/room/${id}`)
    return id
})



export const roomCardSlice = createSlice({
    name:"room",
    initialState:{
        room:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getRoomCardsThunk.fulfilled, (state, action) => {
            state.room = action.payload
        })

        .addCase(deleteRoomCardsThunk.fulfilled, (state, action) => {
            state.room = state.room.filter((item) => item._id !== action.payload)
        })
    }
})


export default roomCardSlice.reducer