import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import ProblemSolution from '../components/ProblemSolution'
import HowItWorks from '../components/HowItWorks'
import Examples from '../components/Examples'
import UseCases from '../components/UseCases'

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <ProblemSolution/>
        <HowItWorks/>
        <EmailGenerator/>
        <Examples/>
        <UseCases/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home