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
    <main className="bg-black text-white overflow-hidden">

      {/* Header / Navbar */}
      <Header />

      {/* Page Hero */}
      <section className="relative pt-40 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">

          <span
            className="inline-block px-5 py-2 text-sm font-semibold rounded-full
                       bg-white/10 border border-white/20 text-purple-300"
          >
            About Serenedale
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building the Future of <br />
            <span className="text-purple-400">Smart Communication</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Serenedale was created to help professionals write emails that
            are clear, confident, and get real responses —
            without wasting time or energy.
          </p>
        </div>

        {/* Subtle Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-600/10 to-transparent" />
      </section>

      {/* Content Sections */}
      <section className="space-y-40">

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
