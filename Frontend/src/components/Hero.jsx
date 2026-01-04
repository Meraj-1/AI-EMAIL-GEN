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
      {/* Light Rays Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#B58CFF"
          raysSpeed={0.9}
          lightSpread={0.55}
          rayLength={1}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0.05}
          distortion={0.03}
          className="mix-blend-soft-light opacity-60"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[140px] z-10" />
      <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[140px] z-10" />

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-30 flex min-h-screen items-center px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5
                         rounded-full text-xs font-medium tracking-wide
                         bg-white/10 border border-white/20 text-purple-300"
            >
              🚀 Powering smarter communication for modern teams
            </span>

            <h1
              className="text-5xl md:text-6xl font-bold leading-tight
                         bg-gradient-to-b from-white via-white to-purple-200
                         bg-clip-text text-transparent"
            >
              Emails jo <br />
              <span className="text-purple-400">Reply laate hain</span>, <br />
              ignore nahi hote
            </h1>

            <p className="mt-6 text-gray-300 max-w-lg text-base leading-relaxed">
              Serenedale AI likhta hai aise emails jo{" "}
              <span className="text-white font-medium">
                professional, clear aur persuasive
              </span>{" "}
              hote hain — bina prompts, bina confusion.
              Bas click karo aur kaam ho jaata hai.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/email-generator"
                className="px-7 py-3.5 rounded-full bg-[#9855FF]
                           text-sm font-semibold text-white
                           hover:bg-purple-600 transition
                           shadow-[0_0_30px_rgba(152,85,255,0.45)]"
              >
                ✨ Start Writing Free
              </Link>

              <button
                className="px-7 py-3.5 rounded-full text-sm font-medium
                           border border-white/30 text-white
                           hover:bg-white/10 transition"
              >
                ▶ Watch How It Works
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <span>⚡ Emails in under 5 seconds</span>
              <span>🔒 100% data privacy</span>
              <span>⭐ Loved by founders & professionals</span>
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="hidden md:block">
            <div
              className="relative backdrop-blur-2xl bg-white/10
                         border border-white/20 rounded-3xl p-8
                         shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            >
              <div
                className="absolute -top-3 -right-3 w-24 h-24
                           bg-purple-500/20 blur-2xl rounded-full"
              />

              <h3 className="text-white font-semibold text-lg mb-5">
                ✨ What Serenedale Creates
              </h3>

              <div className="text-sm text-gray-200 leading-relaxed space-y-4">
                <p>
                  <strong className="text-purple-300">Subject:</strong>{" "}
                  Quick follow-up from our discussion
                </p>

                <p>
                  Hi John,
                  <br />
                  <br />
                  Hope you’re doing great. I wanted to follow up on our recent
                  conversation and see how we can take the next steps together.
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
                  Powered by AI
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
