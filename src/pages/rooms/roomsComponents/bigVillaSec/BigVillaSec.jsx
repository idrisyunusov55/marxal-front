import React, { useEffect } from 'react'
import styles from './BigVillaSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBigVillaThunk } from '../../../../redux/redurces/bigVillaSlice'
import { useNavigate } from 'react-router-dom'

const BigVillaSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getBigVillaThunk())
    }, [])
 
    const bigvilla = useSelector((state) => state.bigvilla.bigvilla) || []
 
    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>BIG SIZE VILLA</h1>
   {bigvilla && bigvilla.map(item => {
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

export default BigVillaSec