import React, { lazy, Suspense } from "react";

// Core layout
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero loads immediately
import Hero from "../components/Hero";

// Lazy-loaded sections (better performance)
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
    <main className="bg-gray-950 text-white overflow-hidden">

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Content Sections */}
      <Suspense
        fallback={
          <div className="py-32 text-center text-gray-500">
            Loading awesome content...
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

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
