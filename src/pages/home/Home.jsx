import React from 'react'
import Header from '../../components/header/Header'
import HomeSec from '../../components/homeSec/HomeSec'
import InformationSec from '../../components/informationSec/InformationSec'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'

const Home = () => {
  return (
        <Layout>
        <HomeSec/>
        <InformationSec/>
        </Layout>
   
  )
}

export default Home