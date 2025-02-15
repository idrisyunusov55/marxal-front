import React, { useEffect } from 'react'
import styles from './RoyalSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getRoyalThunk } from '../../../../redux/redurces/royalSlice'
import { useNavigate } from 'react-router-dom'

const RoyalSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getRoyalThunk())
    }, [])
 
    const royal = useSelector((state) => state.royal.royal) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>ROYAL SUITE</h1>
   {royal && royal.map(item => {
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

export default RoyalSec