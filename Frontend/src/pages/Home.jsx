import React, { lazy, Suspense } from "react";

// Core layout
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero (NO Header inside Hero now)
import Hero from "../components/Hero";

// Lazy sections
const ProblemSolution = lazy(() => import("../components/ProblemSolution"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const Examples = lazy(() => import("../components/Examples"));
const UseCases = lazy(() => import("../components/UseCases"));
const Features = lazy(() => import("../components/Features"));
const Pricing = lazy(() => import("../components/Pricing"));
const Faq = lazy(() => import("../components/Faq"));
const Cta = lazy(() => import("../components/Cta"));
const Testimonial = lazy(() => import("../components/Testimonial"));

const Home = () => {
  return (
    <main className="bg-[#05070f] text-white overflow-hidden">

      {/* GLOBAL HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* LAZY CONTENT */}
      <Suspense
        fallback={
          <div className="py-40 flex flex-col items-center justify-center gap-6
                          text-cyan-400 tracking-widest uppercase text-xs">

            {/* Loader Ring */}
            <div className="w-14 h-14 border-2 border-cyan-400/30
                            border-t-cyan-400 rounded-full animate-spin" />

            {/* System Text */}
            <div className="text-center space-y-2">
              <p>Initializing Neural Modules</p>
              <p className="text-gray-500 text-[10px]">
                Loading AI subsystems...
              </p>
            </div>
          </div>
        }
      >
        <ProblemSolution />
        <HowItWorks />
        <Examples />
        <UseCases />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
        <Testimonial />
      </Suspense>

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default Home;
