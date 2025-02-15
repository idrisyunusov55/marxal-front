import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMediumVillaThunk } from '../../../../redux/redurces/mediumVilla'
import styles from './MediumVillaSec.module.scss'
import { useNavigate } from 'react-router-dom'

const MediumVillaSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getMediumVillaThunk())
    }, [])
 
    const mediumvilla = useSelector((state) => state.mediumvilla.mediumvilla) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>MEDIUM SIZE VILLA</h1>
   {mediumvilla && mediumvilla.map(item => {
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

export default MediumVillaSec