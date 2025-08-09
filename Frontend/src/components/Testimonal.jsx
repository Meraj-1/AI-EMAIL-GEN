import React from "react";
import testimonal from "../data/testimonal"; // import your data
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonal = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our Users Say
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonal.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mr-4 border-2 border-purple-500"
              />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) =>
                i < t.rating ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-yellow-400" />
                )
              )}
            </div>

            <p className="text-gray-300 text-sm">{t.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonal;
