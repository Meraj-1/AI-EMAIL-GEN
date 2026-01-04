import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import ProblemSolution from '../components/ProblemSolution'


const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <ProblemSolution/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home