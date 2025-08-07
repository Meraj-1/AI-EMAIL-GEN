import React from 'react'
import assets from '../assets/assets'
import Header from './Header'

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black h-screen w-full relative"
      style={{ backgroundImage: `url(${assets.herobg})` }}
    >
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center text-center h-full px-4 z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Generate Emails Instantly with AI
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Write professional, personalized emails in seconds — no typing needed.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Try It Now
        </button>
      </div>

      {/* Optional: dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 z-0" />
    </div>
  )
}

export default Hero
