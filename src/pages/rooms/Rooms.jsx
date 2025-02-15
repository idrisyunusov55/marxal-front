import React from 'react'
import Layout from '../../components/layout/Layout'
import StandartKing from './roomsComponents/standartKing/StandartKing'
import RoomsTextSec from './roomsComponents/roomsTextSec/RoomsTextSec'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import StBalconySec from './roomsComponents/stBalconySec/StBalconySec'
import TwinBalconySec from './roomsComponents/twinBalconySec/TwinBalconySec'
import TripleSec from './roomsComponents/tripleSec/TripleSec'
import DeluxeSec from './roomsComponents/deluxeSec/DeluxeSec'
import CornerSec from './roomsComponents/cornerSec/CornerSec'
import CoupleSec from './roomsComponents/coupleSec/CoupleSec'
import StandartVillaSec from './roomsComponents/standartVillaSec/StandartVillaSec'
import MediumVillaSec from './roomsComponents/mediumVillaSec/MediumVillaSec'
import BigVillaSec from './roomsComponents/bigVillaSec/BigVillaSec'
import AmbassadorSec from './roomsComponents/ambassadorSec/AmbassadorSec'
import RoyalSec from './roomsComponents/royalSec/RoyalSec'

const Rooms = () => {
  return (
  <div>
    <Header/>
        <RoomsTextSec/>
        <StandartKing/>
        <StBalconySec/>
        <TwinBalconySec/>
        <TripleSec/>
        <DeluxeSec/>
        <CornerSec/>
        <CoupleSec/>
        <StandartVillaSec/>
        <MediumVillaSec/>
        <BigVillaSec/>
        <AmbassadorSec/>
        <RoyalSec/>
        <Footer/>
</div>
  )
}

export default Rooms