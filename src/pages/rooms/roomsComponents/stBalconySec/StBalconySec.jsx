import React, { useEffect } from 'react'
import styles from './StBalconySec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getSTKBalconyThunk } from '../../../../redux/redurces/stKBalconySlice'
import { useNavigate } from 'react-router-dom'

const StBalconySec = () => {
    const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getSTKBalconyThunk())
   }, [])

   const stBalcony = useSelector((state) => state.stbalcony.stbalcony) || []

   const navigation = useNavigate()
   const goReservation = () => {
     navigation('/reservation')
   }
  return (
    <div className={styles.container}>
         <h1>STANDAR BALCONY KING</h1>
        {stBalcony && stBalcony.map(item => {
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

export default StBalconySec