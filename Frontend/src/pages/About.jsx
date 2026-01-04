import React from 'react'
import WorkInpro from '../components/WorkInpro'
import OurStory from '../components/OurStory'
import HowItWorks from '../components/HowItWorks'
import HowWeWork from '../components/HowWeWork'
import { Milestone } from 'lucide-react'
import WhyChooseUs from '../components/WhyChooseUs'

const About = () => {
  return (
    <div>About

        <div>
            <WorkInpro/>
            <OurStory/>
            <HowWeWork/>
            <Milestone/>
            <WhyChooseUs/>
        </div>
    </div>
  )
}

export default About