import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Header from "./Header";
import LightRays from "../animations/LightRays";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{ backgroundImage: `url(${assets.herobg})` }}
    >
      {/* LIGHT RAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#22d3ee"
          raysSpeed={0.6}
          lightSpread={0.4}
          rayLength={1}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0.05}
          distortion={0.02}
          className="mix-blend-screen opacity-50"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10" />

      {/* NEON GLOWS */}
      <div className="absolute -top-48 -left-48 w-[36rem] h-[36rem] bg-cyan-500/20 blur-[180px] z-10" />
      <div className="absolute bottom-0 -right-48 w-[36rem] h-[36rem] bg-purple-600/20 blur-[180px] z-10" />

      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <div className="relative z-30 flex min-h-screen items-center px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          {/* LEFT PANEL */}
          <div className="space-y-10">

            {/* SYSTEM BADGE */}
            <div className="inline-flex items-center gap-3 px-4 py-2
                            border border-cyan-500/30
                            text-cyan-400 text-xs tracking-widest uppercase">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse" />
              Neural Email Generation System
            </div>

            {/* HEADLINE */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block text-white">
                Emails that
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500
                               bg-clip-text text-transparent">
                trigger responses
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 max-w-xl text-base md:text-lg leading-relaxed">
              Serenedale AI analyzes your intent, context, and tone to
              <span className="text-white font-medium">
                {" "}generate precise, persuasive email outputs
              </span>.
              <br />
              No prompts. No guesswork.  
              Just clean, human-like communication — powered by machines.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">

              <Link
                to="/email-generator"
                className="px-8 py-3 text-xs font-bold tracking-widest uppercase
                           border border-cyan-400 text-cyan-400
                           hover:bg-cyan-400 hover:text-black
                           transition-all shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >
                Initialize System →
              </Link>

              <button
                className="px-8 py-3 text-xs font-semibold tracking-widest uppercase
                           border border-white/30 text-white
                           hover:bg-white/10 transition"
              >
                View Live Output
              </button>
            </div>

            {/* SYSTEM STATS */}
            <div className="flex flex-wrap gap-6 pt-6 text-xs text-gray-400 tracking-wider uppercase">
              <span>⏱ Response Time: &lt; 5s</span>
              <span>🔐 Data Retention: 0%</span>
              <span>🧠 Model: Neural Core v1</span>
            </div>
          </div>

          {/* RIGHT TERMINAL CARD */}
          <div className="hidden md:block">
            <div
              className="relative backdrop-blur-2xl bg-white/5
                         border border-cyan-500/30 p-8
                         shadow-[0_40px_90px_rgba(0,0,0,0.75)]"
            >
              {/* TERMINAL GLOW */}
              <div className="absolute -top-6 -right-6 w-32 h-32
                              bg-cyan-500/20 blur-3xl rounded-full" />

              <div className="mb-4 text-xs tracking-widest text-cyan-400">
                ▸ AI OUTPUT PREVIEW
              </div>

              <div className="text-sm text-gray-200 leading-relaxed space-y-4 font-mono">
                <p>
                  <span className="text-purple-400">Subject:</span>{" "}
                  Follow-up on integration discussion
                </p>

                <p>
                  Hello John,
                  <br /><br />
                  This message is a follow-up regarding our recent conversation.
                  Based on the discussed objectives, I believe there is strong
                  alignment for collaboration.
                </p>

                <p>
                  Awaiting your response.
                  <br />
                  — Serenedale AI
                </p>
              </div>

              <div className="mt-6 flex justify-between text-[11px] text-gray-400 tracking-widest uppercase">
                <span>Status: Generated</span>
                <span className="text-cyan-400">Neural Engine Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
