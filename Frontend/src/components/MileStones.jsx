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
    <section className="relative py-40 px-6 bg-black text-white overflow-hidden font-mono">
      {/* Neon Background Grid */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-5">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="w-full h-full bg-cyan-500/20 animate-pulse" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">

        {/* Header */}
        <div className="mb-28 max-w-3xl mx-auto space-y-6">
          <span className="inline-block px-5 py-2 text-xs font-semibold rounded-full
                           bg-cyan-500/10 border border-cyan-400/40 tracking-widest">
            🤖 Robotics Stats
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent
                         bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Milestones of AI Precision
          </h2>

          <p className="text-gray-400 text-lg">
            Serenedale powers robotic efficiency in communication.
            Every stat reflects automated intelligence in action.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid md:grid-cols-5 gap-10">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="group relative bg-black/20 border border-cyan-500/40
                         rounded-2xl p-6 flex flex-col items-center
                         hover:border-purple-500 hover:scale-105 transition-transform duration-300
                         shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            >
              {/* Icon in Neon Circle */}
              <div className="relative mb-4 w-16 h-16 flex items-center justify-center
                              rounded-full border-2 border-cyan-400 shadow-[0_0_10px_cyan] group-hover:shadow-[0_0_25px_cyan]
                              transition duration-300 text-3xl text-cyan-400">
                {item.icon}
                <span className="absolute -inset-1 rounded-full border border-cyan-300/40 blur-sm animate-pulse"></span>
              </div>

              {/* Count */}
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {counts[index].toLocaleString()}{item.suffix}
              </h3>

              <p className="text-gray-300 text-sm font-medium">{item.label}</p>

              {/* Neon bar underline */}
              <div className="mt-3 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* Robotics Proof Points */}
        <div className="mt-32 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-cyan-300 text-left font-mono">
          <p>⚡ Automated email generation with zero human lag.</p>
          <p>📈 Metrics monitored in real-time for precision improvements.</p>
          <p>🌍 Globally distributed AI servers for ultra-fast responses.</p>
          <p>🧠 Self-learning algorithms refine style, tone, and engagement rates.</p>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center space-y-6">
          <h4 className="text-3xl md:text-4xl font-bold text-transparent
                         bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Join the AI-Powered Revolution
          </h4>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Step into the future of automated, professional email communication.
          </p>
          <button
            className="px-14 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500
                       hover:opacity-90 transition shadow-[0_0_25px_cyan] font-semibold text-lg">
            Activate AI Now 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Milestones;
