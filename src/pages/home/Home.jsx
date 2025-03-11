import React from 'react'
import Header from '../../components/header/Header'
import HomeSec from '../../components/homeSec/HomeSec'
import InformationSec from '../../components/informationSec/InformationSec'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import { div } from 'framer-motion/client'
import { useTheme } from '../context/context'

const Home = () => {
  const theme = useTheme()
  return (
    <div style={{backgroundColor:theme === 'light' ? 'white' : 'black', color:theme === 'light' ? 'black': 'white'}}>
        <Layout>
        <HomeSec/>
        <InformationSec/>
        </Layout>
   </div>
  )
}

export default Home