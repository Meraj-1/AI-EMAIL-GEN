import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import ProblemSolution from '../components/ProblemSolution'
import HowItWorks from '../components/HowItWorks'
import Examples from '../components/Examples'
import UseCases from '../components/UseCases'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Cta from '../components/Cta'

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
        <Features/>
        <Pricing/>
        <Faq/>
        <Cta/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home