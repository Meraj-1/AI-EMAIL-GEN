import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Header from "./Header";
import LightRays from "../animations/LightRays";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.herobg})` }}
    >
      {/* Animated Light Rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#B58CFF"
          raysSpeed={0.8}
          lightSpread={0.5}
          rayLength={1}
          followMouse
          mouseInfluence={0.04}
          noiseAmount={0.04}
          distortion={0.025}
          className="mix-blend-soft-light opacity-60"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90 z-10" />

      {/* Ambient Glows */}
      <div className="absolute -top-48 -left-48 w-[34rem] h-[34rem] bg-purple-500/20 rounded-full blur-[160px] z-10" />
      <div className="absolute bottom-0 -right-48 w-[34rem] h-[34rem] bg-fuchsia-500/10 rounded-full blur-[160px] z-10" />

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-30 flex min-h-screen items-center px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5
                             rounded-full text-xs font-medium tracking-wide
                             bg-white/10 border border-white/20 text-purple-300">
              ⚡ AI-powered email writing platform
            </span>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight
                           bg-gradient-to-b from-white via-white to-purple-200
                           bg-clip-text text-transparent">
              Emails jo replies
              <br />
              <span className="text-purple-400">actually laate hain</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 max-w-xl text-base md:text-lg leading-relaxed">
              Serenedale AI aapke liye likhta hai
              <span className="text-white font-medium">
                {" "}professional, persuasive aur clear emails
              </span>
              {" "}— bina complex prompts, bina overthinking.
              Bas intent likho, baaki AI sambhaal lega.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/email-generator"
                className="px-8 py-3.5 rounded-full bg-[#9855FF]
                           text-sm font-semibold text-white
                           hover:bg-purple-600 transition-all
                           shadow-[0_0_40px_rgba(152,85,255,0.5)]
                           hover:scale-[1.03]"
              >
                ✨ Start Writing Free
              </Link>

              <button
                className="px-8 py-3.5 rounded-full text-sm font-medium
                           border border-white/30 text-white
                           hover:bg-white/10 transition"
              >
                ▶ See Live Demo
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-gray-400">
              <span>⚡ Under 5 seconds</span>
              <span>🔒 Zero data retention</span>
              <span>⭐ Trusted by professionals</span>
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="hidden md:block">
            <div
              className="relative backdrop-blur-2xl bg-white/10
                         border border-white/20 rounded-3xl p-8
                         shadow-[0_40px_90px_rgba(0,0,0,0.65)]"
            >
              {/* Glow Accent */}
              <div className="absolute -top-4 -right-4 w-28 h-28
                              bg-purple-500/20 blur-3xl rounded-full" />

              <h3 className="text-white font-semibold text-lg mb-6">
                ✨ Example AI-Generated Email
              </h3>

              <div className="text-sm text-gray-200 leading-relaxed space-y-4">
                <p>
                  <strong className="text-purple-300">Subject:</strong>{" "}
                  Quick follow-up from our discussion
                </p>

                <p>
                  Hi John,
                  <br /><br />
                  Hope you’re doing well. I wanted to follow up on our recent
                  conversation and explore how we can move forward together.
                </p>

                <p>
                  Looking forward to your thoughts.
                  <br />
                  Best regards,
                  <br />
                  Alex
                </p>
              </div>

              <div className="mt-6 flex justify-between text-xs text-gray-400">
                <span>Generated instantly</span>
                <span className="text-purple-400 font-medium">
                  Powered by Serenedale AI
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
