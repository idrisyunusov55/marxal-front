import React, { useEffect } from 'react'
import styles from './TwinBalconySec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getSTKBalconyThunk } from '../../../../redux/redurces/stKBalconySlice'
import { getTwinBalconyThunk } from '../../../../redux/redurces/twinBalcony'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../../context/context'

const TwinBalconySec = () => {
    const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getTwinBalconyThunk())
   }, [])

   const twinbalcony = useSelector((state) => state.twinbalcony.twinbalcony) || []

   const navigation = useNavigate()
   const goReservation = () => {
     navigation('/reservation')
   }

   const {theme} = useTheme()
  return (
    <div className={styles.container}>
         <h1>STANDAR TWIN BALCONY</h1>
        {twinbalcony && twinbalcony.map(item => {
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

export default TwinBalconySec 