import React, { useEffect } from 'react'
import styles from './CornerSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCornerThunk } from '../../../../redux/redurces/cornerSlice'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../../context/context'

const CornerSec = () => {

    const {theme} = useTheme()

    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getCornerThunk())
    }, [])
 
    const corner = useSelector((state) => state.corner.corner) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }
  return (
    <div className={styles.container}>
    <h1>CORNER SUITE</h1>
   {corner && corner.map(item => {
       return <div className={styles.imgBox}>
           <img  src={item.firstPhoto} alt="" />
           <img  src={item.secondPhoto} alt="" />
           <img  src={item.thirdPhoto} alt="" />
           <img  src={item.fourthPhoto} alt="" />
       </div>
   })}
      <div  style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }} className={styles.rbtns}>
   <button onClick={goReservation} className={styles.rbtn}>Rezevasiya</button>
   </div>
</div>
  )
}

export default CornerSec