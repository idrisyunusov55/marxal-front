import React, { useEffect } from 'react'
import styles from './CoupleSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCoupleThunk } from '../../../../redux/redurces/coupleSlice'
import { useNavigate } from 'react-router-dom'

const CoupleSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getCoupleThunk())
    }, [])
 
    const couple = useSelector((state) => state.couple.couple) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>COUPLE VILLA</h1>
   {couple && couple.map(item => {
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

export default CoupleSec