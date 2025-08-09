import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Header from "./Header";
import LightRays from "../animations/LightRays";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black h-screen w-full relative overflow-hidden"
      style={{ backgroundImage: `url(${assets.herobg})` }}
    >
      {/* Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#9855FF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays mix-blend-overlay opacity-80"
        />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero content */}
      <div className="flex px-8 flex-col text-center md:h-full mt-30 lg:mt-40 items-center z-30 relative">
        <div className="mb-6 p-3 flex justify-center">
          <span className="border flex text-wrap cursor-pointer border-gray-400 p-1 rounded-full">
            <span className="bg-[#9855FF] flex items-center text-xs font-semibold text-black border px-2 py-0.5 rounded-full">
              <h1 className="flex items-center">new</h1>
            </span>
            <span className="text-[#9855FF] flex items-center font-bold text-xs px-2">
              Latest integration just arrived
            </span>
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl hero_header font-bold bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent">
          Generate Emails Instantly <br />
          with{" "}
          <span className="md:text-9xl text-6xl AI font-bold bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent">
            AI
          </span>
        </h1>
        <p className="mt-4 text-xs hero_content text-gray-300">
          Write professional, personalized emails in seconds — no typing needed.
        </p>
        <button className="bg-[#9855FF] hover:bg-purple-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4">
          <Link to="/email-generator">Generate it Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
