import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const WorkInpro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-black text-white px-6 text-center">

      {/* Image */}
      <img
        src={assets.progress}
        alt="Work in Progress"
        className="w-64 md:w-80 mb-8 animate-pulse"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        🚧 Work in Progress
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-md text-sm md:text-base mb-8">
        We’re currently building something awesome for you.
        This section will be live very soon. Stay tuned!
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600
                     font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>

        <a
          href="mailto:support@serendale.com"
          className="px-6 py-3 rounded-full border border-white/30
                     text-sm font-medium hover:bg-white/10 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default WorkInpro;
