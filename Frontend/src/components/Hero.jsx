import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Header from "./Header";
import LightRays from "../animations/LightRays";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.herobg})` }}
    >
      {/* Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#9855FF"
          raysSpeed={1.2}
          lightSpread={0.7}
          rayLength={1.1}
          followMouse
          mouseInfluence={0.08}
          noiseAmount={0.08}
          distortion={0.04}
          className="mix-blend-overlay opacity-70"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Floating gradient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl z-10" />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="text-left">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold
                             bg-white/10 border border-white/20 text-purple-300">
              🚀 New AI Integration Released
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight
                           bg-gradient-to-b from-white to-[#B372CF]
                           bg-clip-text text-transparent">
              Generate Powerful <br />
              Emails with <span className="text-purple-400">AI</span>
            </h1>

            <p className="mt-5 text-gray-300 max-w-md text-sm leading-relaxed">
              Create professional, personalized emails in seconds.
              No prompts. No typing. Just results.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/email-generator"
                className="px-6 py-3 rounded-full bg-[#9855FF] text-sm font-semibold
                           hover:bg-purple-600 transition shadow-lg"
              >
                Generate Emails
              </Link>

              <button
                className="px-6 py-3 rounded-full text-sm font-semibold
                           border border-white/30 text-white hover:bg-white/10 transition"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="hidden md:block">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20
                            rounded-3xl p-8 shadow-2xl">
              <h3 className="text-white font-semibold text-lg mb-4">
                ✨ Example Output
              </h3>

              <div className="text-sm text-gray-200 leading-relaxed space-y-3">
                <p><strong>Subject:</strong> Following up on our meeting</p>
                <p>
                  Hi John,<br /><br />
                  I hope you’re doing well. Just wanted to follow up on our
                  conversation and explore how we can collaborate further.
                </p>
                <p>
                  Best regards,<br />
                  Alex
                </p>
              </div>

              <div className="mt-6 flex justify-between text-xs text-gray-400">
                <span>Generated in 0.4s</span>
                <span className="text-purple-400">AI Powered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
