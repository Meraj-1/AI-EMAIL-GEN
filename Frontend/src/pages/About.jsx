import React from "react";
import WorkInpro from "../components/WorkInpro";
import OurStory from "../components/OurStory";
import HowItWorks from "../components/HowItWorks";
import HowWeWork from "../components/HowWeWork";
import Milestones from "../components/Milestones";
import WhyChooseUs from "../components/WhyChooseUs";
import Header from "../components/Header";

const About = () => {
  return (
    <main className="bg-black text-white overflow-hidden relative">

      {/* Header / Navbar */}
      <Header />

      {/* Page Hero */}
      <section className="relative pt-40 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 z-10 relative">

          <span
            className="inline-block px-5 py-2 text-sm font-semibold rounded-full
                       bg-white/10 border border-white/20 text-purple-300 backdrop-blur-sm"
          >
            About Serenedale
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight
                         bg-gradient-to-r from-purple-400 to-pink-500
                         bg-clip-text text-transparent">
            Building the Future of <br />
            <span className="text-purple-400">Smart Communication</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Serenedale was created to help professionals write emails that
            are clear, confident, and get real responses —
            without wasting time or energy.
          </p>
        </div>

        {/* Subtle Glow / Neon Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                          bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px]
                          bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent" />
        </div>
      </section>

      {/* Content Sections */}
      <section className="space-y-40 relative z-10">

        <WorkInpro />

        <OurStory />

        <HowItWorks />

        <HowWeWork />

        <Milestones />

        <WhyChooseUs />

      </section>

    </main>
  );
};

export default About;
