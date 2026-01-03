import React from "react";
import testimonial from "../data/testimonial";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="relative bg-black py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                      bg-purple-600/20 rounded-full blur-3xl" />

      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        Trusted by Professionals Worldwide
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4 mb-14 text-sm md:text-base">
        Thousands of professionals rely on our AI to write better emails —
        faster, smarter, and with confidence.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {testimonial.map((t, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden
                       bg-white/5 backdrop-blur-xl border border-white/10
                       hover:border-purple-500/40 transition-all duration-300"
          >
            {/* Top Gradient Strip */}
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              {/* Avatar */}
              <div className="flex justify-center -mt-12 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover
                             border-4 border-black"
                />
              </div>

              <h3 className="text-lg font-semibold text-center text-white">
                {t.name}
              </h3>
              <p className="text-xs text-center text-gray-400 mb-3">
                {t.role}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                “{t.testimonial}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
