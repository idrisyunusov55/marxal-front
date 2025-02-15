import React, { useEffect } from 'react'
import styles from './StandartVillaSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getStandartVillaThunk } from '../../../../redux/redurces/standartVillaSlice'
import { useNavigate } from 'react-router-dom'

const StandartVillaSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getStandartVillaThunk())
    }, [])
 
    const standartvilla = useSelector((state) => state.standartvilla.standartvilla) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>STANDARD VILLA</h1>
   {standartvilla && standartvilla.map(item => {
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

export default StandartVillaSec