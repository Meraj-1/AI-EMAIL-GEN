import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const WorkInpro = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center
                    bg-black text-white px-6 text-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

      {/* Status Badge */}
      <span className="mb-6 px-4 py-1 text-xs rounded-full
                       bg-white/10 border border-white/20
                       animate-pulse">
        🚀 Feature under development
      </span>

      {/* Image */}
      <img
        src={assets.progress}
        alt="Work in Progress"
        className="w-64 md:w-80 mb-10 drop-shadow-xl"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        We’re Building Something Awesome ✨
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-lg text-sm md:text-base mb-8 leading-relaxed">
        This feature is currently under active development.
        Our team is working hard to bring you a smooth, powerful,
        and delightful experience. Thanks for your patience!
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
                     font-semibold hover:scale-105 transition-transform"
        >
          ← Back to Home
        </Link>

        <a
          href="mailto:support@serendale.com"
          className="px-7 py-3 rounded-full border border-white/30
                     text-sm font-medium hover:bg-white/10 transition"
        >
          Contact Support
        </a>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-xs text-gray-500">
        Want updates? Follow us — exciting things are coming soon 🚀
      </p>
    </div>
  );
};

export default WorkInpro;
