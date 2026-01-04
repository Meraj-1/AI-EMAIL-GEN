import { useEffect, useState } from "react";

const milestones = [
  { number: 50000, label: "Emails Generated", suffix: "+" },
  { number: 10000, label: "Users Worldwide", suffix: "+" },
  { number: 100, label: "Teams Using Serenedale", suffix: "+" },
  { number: 99, label: "Average Reply Rate (%)", suffix: "%" },
  { number: 5, label: "Languages Supported", suffix: "+" },
];

const Milestones = () => {
  const [counts, setCounts] = useState(milestones.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < milestones[i].number
            ? count + Math.ceil(milestones[i].number / 100)
            : milestones[i].number
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements 🏆</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Serenedale has been transforming email writing for thousands of users around the globe.
            Here’s a quick snapshot of what we’ve achieved together.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-5 gap-12">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition shadow-lg"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {counts[index].toLocaleString()}
                {item.suffix}
              </h3>
              <p className="text-gray-300 text-lg">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Extra Highlights */}
        <div className="mt-32 max-w-4xl mx-auto text-gray-300 space-y-4 text-left">
          <p>⚡ Fast adoption across industries — startups, enterprises, freelancers, and students.</p>
          <p>💬 Positive feedback with 95%+ satisfaction rate among users.</p>
          <p>📈 Helping teams increase email reply rates and engagement metrics.</p>
          <p>🌍 Global user base with presence in multiple countries and languages.</p>
          <p>🔄 Continuous improvement — AI gets smarter every day, learning from usage patterns.</p>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h4 className="text-3xl font-bold mb-4">Be Part of Our Next Milestone 🚀</h4>
          <p className="text-gray-400 mb-8">
            Join thousands of users who are already generating smarter, faster, and more effective emails.
          </p>
          <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
