import React, { useEffect } from 'react'
import styles from './StandartKing.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getKingRoomsThunk } from '../../../../redux/redurces/standartKingSLice'
import { useNavigate } from 'react-router-dom'

const StandartKing = () => {

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getKingRoomsThunk())
   }, [])

   const standartKings = useSelector((state) => state.standartKings.standartKings) || []

   const navigation = useNavigate()
   const goReservation = () => {
     navigation('/reservation')
   }

  return (
    <div className={styles.standartcontainer}>
        <h1>STANDARD KING</h1>
        {standartKings && standartKings.map(item => {
            return <div className={styles.imgBox}>
                <img  src={item.firstPhoto} alt="" />
                <img  src={item.secondPhoto} alt="" />
                <img  src={item.thirdPhoto} alt="" />
                <img  src={item.fourthPhoto} alt="" />
            </div>
        })}
           <div className={styles.rbtns}>
        <button onClick={goReservation} className={styles.rbtn}>Rezevasiya</button>
        </div>
    </div>
  )
}

export default StandartKing