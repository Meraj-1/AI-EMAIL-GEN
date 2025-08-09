import React from "react";
import testimonal from "../data/testimonal";
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Loved by Professionals Worldwide
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Thousands of users trust our AI email generator to save time, boost
        productivity, and communicate with confidence.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {testimonal.map((t, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            {/* Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-xs text-gray-400 mb-3">{t.role}</p>

              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) =>
                  i < t.rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-400" />
                  )
                )}
              </div>

              {/* Testimonial */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                "{t.testimonial}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
