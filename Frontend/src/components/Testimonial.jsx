import React from "react";
import testimonial from "../data/testimonial";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="relative bg-black py-32 px-6 md:px-16 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                      bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px]
                      bg-pink-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center
                     bg-gradient-to-r from-purple-400 to-pink-500
                     bg-clip-text text-transparent">
        Trusted by Professionals Worldwide
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4 mb-16 text-sm md:text-base">
        Thousands of professionals rely on our AI to write better emails —
        faster, smarter, and with confidence.
      </p>

      {/* Testimonial Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {testimonial.map((t, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden
                       bg-white/5 backdrop-blur-xl border border-white/10
                       hover:border-purple-500/40 hover:scale-[1.03] 
                       transition-all duration-300 shadow-[0_0_40px_rgba(152,85,255,0.15)]"
          >
            {/* Top Neon Strip */}
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              {/* Avatar */}
              <div className="flex justify-center -mt-12 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover
                             border-4 border-black shadow-lg"
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

      {/* CTA */}
      <div className="mt-24 text-center">
        <h4 className="text-3xl font-bold mb-4
                       bg-gradient-to-r from-purple-400 to-pink-500
                       bg-clip-text text-transparent">
          Want results like these?
        </h4>
        <p className="text-gray-400 mb-8">
          Join thousands of professionals using AI to write emails smarter and faster.
        </p>
        <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700
                           transition font-semibold text-lg shadow-lg">
          Try AI Now 
        </button>
      </div>

    </section>
  );
};

export default Testimonial;
