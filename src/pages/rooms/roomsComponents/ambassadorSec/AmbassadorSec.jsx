import React, { useEffect } from 'react'
import styles from './AmbassadorSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAmbassadorThunk } from '../../../../redux/redurces/ambassadorSlice'
import { useNavigate } from 'react-router-dom'

const AmbassadorSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getAmbassadorThunk())
    }, [])
 
    const ambassador = useSelector((state) => state.ambassador.ambassador) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>AMBASSADOR SUITE</h1>
   {ambassador && ambassador.map(item => {
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

export default AmbassadorSec