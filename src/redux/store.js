import { configureStore } from "@reduxjs/toolkit";
import  standartKingRoomsSlice  from "./redurces/standartKingSLice";
import  stKBalconySlice  from "./redurces/stKBalconySlice";
import  twinBalconySlice  from "./redurces/twinBalcony";
import  tripleSlice  from "./redurces/tripleSlice";
import  deluxeSlice  from "./redurces/deluxeSlice";
import  cornerSlice  from "./redurces/cornerSlice";
import  coupleSlice  from "./redurces/coupleSlice";
import  standartVillaSlice  from "./redurces/standartVillaSlice";
import  mediumvillaSlice  from "./redurces/mediumVilla";
import  bigvillaSlice  from "./redurces/bigVillaSlice";
import  ambassadorSlice  from "./redurces/ambassadorSlice";
import  royalSlice  from "./redurces/royalSlice";
import  roomCardSlice  from "./redurces/roomCards";

export const store = configureStore({
    reducer:{
        standartKings:standartKingRoomsSlice,
        stbalcony:stKBalconySlice,
        twinbalcony:twinBalconySlice,
        triple:tripleSlice,
        deluxe:deluxeSlice,
        corner:cornerSlice,
        couple:coupleSlice,
        standartvilla:standartVillaSlice,
        mediumvilla:mediumvillaSlice,
        bigvilla:bigvillaSlice,
        ambassador:ambassadorSlice,
        royal:royalSlice,
        room:roomCardSlice
    }
})

export default store