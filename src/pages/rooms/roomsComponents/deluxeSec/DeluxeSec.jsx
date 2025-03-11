import React, { useEffect } from 'react'
import styles from './DeluxeSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getDeluxeThunk } from '../../../../redux/redurces/deluxeSlice'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../../context/context'

const DeluxeSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getDeluxeThunk())
    }, [])
 
    const deluxe = useSelector((state) => state.deluxe.deluxe) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }

    const {theme} = useTheme()
  return (
    <div className={styles.container}>
    <h1>DELUXE SUITE</h1>
   {deluxe && deluxe.map(item => {
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

export default DeluxeSec