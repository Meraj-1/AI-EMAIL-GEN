import { useEffect, useState } from "react";
import { FaEnvelope, FaUsers, FaBuilding, FaChartLine, FaGlobe } from "react-icons/fa";

const milestones = [
  { number: 50000, label: "Emails Generated", suffix: "+", icon: <FaEnvelope /> },
  { number: 10000, label: "Users Worldwide", suffix: "+", icon: <FaUsers /> },
  { number: 100, label: "Teams Using Serenedale", suffix: "+", icon: <FaBuilding /> },
  { number: 99, label: "Average Reply Rate", suffix: "%", icon: <FaChartLine /> },
  { number: 5, label: "Languages Supported", suffix: "+", icon: <FaGlobe /> },
];

const Milestones = () => {
  const [counts, setCounts] = useState(milestones.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < milestones[i].number
            ? count + Math.ceil(milestones[i].number / 120)
            : milestones[i].number
        )
      );
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements 🏆</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Serenedale is helping thousands of users communicate smarter, faster, and more effectively.  
            Here’s a snapshot of our milestones and impact across the globe.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-5 gap-12">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition shadow-xl flex flex-col items-center justify-center gap-4"
            >
              <div className="text-purple-400 text-5xl mb-2">{item.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {counts[index].toLocaleString()}
                {item.suffix}
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Extra Highlights */}
        <div className="mt-32 max-w-4xl mx-auto text-gray-300 space-y-5 text-left md:text-center">
          <p>⚡ Rapid adoption across startups, enterprises, freelancers, and students.</p>
          <p>💬 Users report 95%+ satisfaction and improved productivity.</p>
          <p>📈 Teams experience higher email reply rates and engagement metrics.</p>
          <p>🌍 Global user base spanning multiple countries and industries.</p>
          <p>🔄 Our AI improves daily with continuous learning and feedback.</p>
        </div>

        {/* Testimonial / Trust */}
        <div className="mt-24 max-w-3xl mx-auto bg-white/10 p-10 rounded-3xl shadow-lg">
          <p className="text-gray-200 italic mb-4">
            "Serenadale has completely transformed how our team communicates. Emails that used to take hours now take seconds, and our response rates have skyrocketed!"  
          </p>
          <p className="text-purple-400 font-semibold">— Alex Johnson, Startup Founder</p>
        </div>

        {/* Call to Action */}
        <div className="mt-28 text-center">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Next Milestone 🚀</h4>
          <p className="text-gray-400 mb-8 md:text-lg max-w-2xl mx-auto">
            Join thousands of users who are generating smarter, faster, and more effective emails today.
          </p>
          <button className="px-14 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
