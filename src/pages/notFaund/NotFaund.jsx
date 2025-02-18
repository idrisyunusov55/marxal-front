import React from 'react'
import styles from './NotFaund.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFaund = () => {

    const navigation = useNavigate()

    const goBack = () => {
        navigation(-1)
    }
  return (
    <div className={styles.container}>
        <h1>NOT FAUND</h1>
        <button onClick={goBack} className={styles.goback}>GO BACK</button>
    </div>
  )
}

export default NotFaund