import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home