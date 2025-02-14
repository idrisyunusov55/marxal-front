import React from 'react'
import Layout from '../../components/layout/Layout'
import StandartKing from './roomsComponents/standartKing/StandartKing'
import RoomsTextSec from './roomsComponents/roomsTextSec/RoomsTextSec'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Rooms = () => {
  return (
  <div>
    <Header/>
        <RoomsTextSec/>
        <StandartKing/>
        <Footer/>
</div>
  )
}

export default Rooms