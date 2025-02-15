import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Rooms from '../pages/rooms/Rooms'
import RoomCardsSec from '../pages/rooms/roomCards/RoomCardsSec'

const Router = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<Rooms/>}/>
    <Route path='/reservation' element={<RoomCardsSec/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default Router