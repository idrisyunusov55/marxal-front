import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './TripleSec.module.scss'
import { getTripleThunk } from '../../../../redux/redurces/tripleSlice'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../../context/context'

const TripleSec = () => {
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getTripleThunk())
    }, [])
 
    const triple = useSelector((state) => state.triple.triple) || []

    const navigation = useNavigate()
    const goReservation = () => {
      navigation('/reservation')
    }

    const {theme} = useTheme()
  return (
    
    <div className={styles.container}>
    <h1>STANDARD TRIPLE</h1>
   {triple && triple.map(item => {
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

export default TripleSec