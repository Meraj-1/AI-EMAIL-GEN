import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaUsers,
  FaBuilding,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const milestones = [
  { number: 50000, label: "Emails Generated", suffix: "+", icon: <FaEnvelope /> },
  { number: 10000, label: "Active Users", suffix: "+", icon: <FaUsers /> },
  { number: 100, label: "Teams Using Serenedale", suffix: "+", icon: <FaBuilding /> },
  { number: 99, label: "Average Reply Rate", suffix: "%", icon: <FaChartLine /> },
  { number: 5, label: "Languages Supported", suffix: "+", icon: <FaGlobe /> },
];

const Milestones = () => {
  const [counts, setCounts] = useState(milestones.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = milestones.map(m => Math.ceil(m.number / steps));

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) =>
          count + increment[i] >= milestones[i].number
            ? milestones[i].number
            : count + increment[i]
        )
      );
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-40 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-blue-600/10" />

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-28 max-w-3xl mx-auto space-y-6">
          <span className="inline-block px-5 py-2 text-sm font-semibold rounded-full
                           bg-white/10 border border-white/20">
            📊 Platform Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Measurable Results That Speak for Themselves
          </h2>

          <p className="text-gray-400 text-lg">
            Serenedale is trusted by professionals and teams worldwide to
            write better emails, faster — with measurable improvements in
            productivity and response rates.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid md:grid-cols-5 gap-10">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10
                         rounded-3xl p-8 flex flex-col items-center
                         hover:border-purple-500/40 hover:scale-105
                         transition-all duration-300"
            >
              <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-purple-400">
                {counts[index].toLocaleString()}
                {item.suffix}
              </h3>

              <p className="mt-2 text-gray-300 font-medium text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Proof Points */}
        <div className="mt-32 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-300 text-left">
          <p>⚡ Rapid adoption across startups, enterprises, freelancers, and students.</p>
          <p>📈 Teams report significantly higher reply and engagement rates.</p>
          <p>🌍 Global usage across multiple countries and industries.</p>
          <p>🧠 AI continuously improves through feedback and optimization.</p>
        </div>

        {/* Testimonial */}
        <div className="mt-28 max-w-3xl mx-auto bg-white/10 border border-white/10
                        p-10 rounded-3xl shadow-2xl">
          <p className="text-gray-200 italic leading-relaxed mb-6">
            “Serenedale has completely changed how our team communicates.
            Emails that once took hours are now written in seconds —
            and our response rates have improved dramatically.”
          </p>
          <p className="text-purple-400 font-semibold">
            Alex Johnson <span className="text-gray-400 font-normal">— Startup Founder</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center space-y-6">
          <h4 className="text-3xl md:text-4xl font-bold">
            Be Part of the Next Growth Story
          </h4>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join thousands of professionals already using Serenedale
            to write smarter, faster, and more effective emails.
          </p>

          <button
            className="px-14 py-4 rounded-2xl bg-purple-600
                       hover:bg-purple-700 transition
                       font-semibold text-lg shadow-xl"
          >
            Get Started Free 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Milestones;
