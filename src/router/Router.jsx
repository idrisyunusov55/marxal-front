import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Rooms from '../pages/rooms/Rooms'
import RoomCardsSec from '../pages/rooms/roomCards/RoomCardsSec'
import NotFaund from '../pages/notFaund/NotFaund'
import AdminPanel from '../pages/adminPanel/AdminPanel'
import Odenis from '../pages/odenis/Odenis'
import Qediyyat from '../pages/qediyyat/Qediyyat'
import Login from '../pages/qediyyat/login/Login'
import Register from '../pages/qediyyat/register/Register'

const Router = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<Rooms/>}/>
    <Route path='/reservation' element={<RoomCardsSec/>}/>
    <Route path='*' element={<NotFaund/>}/>
    <Route path='/adminpanel' element={<AdminPanel/>}/>
    <Route path='/odenis' element={<Odenis/>}/>
    <Route path='/qediyyat' element={<Qediyyat/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default Router