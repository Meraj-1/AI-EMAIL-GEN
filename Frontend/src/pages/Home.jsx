import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonal from '../components/Testimonal'

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <Testimonal/>
        <Footer/>
    </div>
  )
}

export default Home