import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const WorkInpro = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center
                    bg-black text-white px-6 text-center overflow-hidden">

      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-10 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />

      {/* Status Badge */}
      <span className="mb-6 px-4 py-1 text-xs rounded-full
                       bg-white/10 border border-white/20
                       backdrop-blur-sm animate-pulse">
        🚀 Feature under development
      </span>

      {/* Image */}
      <img
        src={assets.progress}
        alt="Work in Progress"
        className="w-64 md:w-80 mb-10 drop-shadow-[0_0_30px_rgba(152,85,255,0.7)]"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4
                     bg-gradient-to-r from-purple-400 to-pink-500
                     bg-clip-text text-transparent animate-text">
        We’re Building Something Awesome ✨
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-lg text-sm md:text-base mb-8 leading-relaxed">
        This feature is under active development. Our AI-powered tools
        are getting smarter every day — a smooth, powerful, and futuristic
        experience is on the way. Thanks for your patience!
      </p>

      {/* Progress Bar */}
      <div className="w-full max-w-sm mb-10">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Progress</span>
          <span>70%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600
                     font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          ← Back to Home
        </Link>

        <a
          href="mailto:support@serenedale.com"
          className="px-7 py-3 rounded-full border border-white/30
                     text-sm font-medium hover:bg-white/10 hover:shadow-inner
                     transition duration-300"
        >
          Contact Support
        </a>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-xs text-gray-500">
        Stay tuned! Exciting AI updates are coming soon 🚀
      </p>
    </div>
  );
};

export default WorkInpro;
