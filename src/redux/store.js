import { configureStore } from "@reduxjs/toolkit";
import  standartKingRoomsSlice  from "./redurces/standartKingSLice";

export const store = configureStore({
    reducer:{
        standartKings:standartKingRoomsSlice
    }
})

export default store