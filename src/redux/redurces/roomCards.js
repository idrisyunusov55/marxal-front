import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getRoomCardsThunk = createAsyncThunk("getroom", async () => {
  const response = await axios.get("http://localhost:8800/room");
  return response.data;
});


export const postRoomCardsThunk = createAsyncThunk("postroom", async (data) => {
  const response = await axios.post("http://localhost:8800/room", data);
  return response.data;
});

export const deleteRoomCardsThunk = createAsyncThunk("deleteroom", async (id) => {
  await axios.delete(`http://localhost:8800/room/${id}`);
  return id;
});


export const getReservedRoomsThunk = createAsyncThunk("getreservedrooms", async () => {
  const response = await axios.get("http://localhost:8800/reservations");
  return response.data;
});


export const reserveRoomThunk = createAsyncThunk(
  "reserveroom",
  async ({ roomId, reservationData }, { getState }) => {
    const token = getState().auth.token; 
    const response = await axios.post(
      `http://localhost:8800/room/${roomId}/reserve`,
      reservationData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);


export const deleteReservationThunk = createAsyncThunk("deletereservation", async (roomId) => {
  await axios.delete(`http://localhost:8800/room/${roomId}/reservationId`);
  return roomId;


});



export const getUserReservationsThunk = createAsyncThunk(
  "getuserreservations",
  async (userId, { getState }) => {
    const token = getState().auth.token; 
    const response = await axios.get(
      `http://localhost:8800/room/reservations/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);


export const roomCardSlice = createSlice({
  name: "room",
  initialState: {
    room: [],
    reservedRooms: [],
    userReservations: [], 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomCardsThunk.fulfilled, (state, action) => {
        state.room = action.payload;
      })
      .addCase(postRoomCardsThunk.fulfilled, (state, action) => {
        state.room.push(action.payload);
      })
      .addCase(deleteRoomCardsThunk.fulfilled, (state, action) => {
        state.room = state.room.filter((item) => item._id !== action.payload);
      })
      .addCase(getReservedRoomsThunk.fulfilled, (state, action) => {
        state.reservedRooms = action.payload;
      })
      .addCase(reserveRoomThunk.fulfilled, (state, action) => {
        const { roomId, reservationId } = action.payload;
        state.reservedRooms.push({ ...action.payload, roomId });
        state.room = state.room.map((room) =>
          room._id === roomId ? { ...room, isReserved: true } : room
        );
      })
    
      .addCase(deleteReservationThunk.fulfilled, (state, action) => {
  
        state.reservedRooms = state.reservedRooms.filter((room) => room._id !== action.payload);
       
        state.room = state.room.map((room) =>
          room._id === action.payload ? { ...room, isReserved: false } : room
        );
      })
      .addCase(getUserReservationsThunk.fulfilled, (state, action) => {
        state.userReservations = action.payload;
      });
  },
});

export default roomCardSlice.reducer;
