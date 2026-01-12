const usps = [
  {
    title: "Advanced Robotics Design",
    description:
      "Our robots are engineered with cutting-edge AI and precision mechanics for unmatched performance and reliability.",
    icon: "🤖",
  },
  {
    title: "Rapid Deployment",
    description:
      "Get fully functional robots ready for your projects or production lines in record time — no delays, no hassle.",
    icon: "⚡",
  },
  {
    title: "Safety-First Engineering",
    description:
      "Every robot is designed with safety protocols and fail-safes to ensure secure operation in any environment.",
    icon: "🔒",
  },
  {
    title: "Plug-and-Play Setup",
    description:
      "Minimal setup required. Just connect, configure, and start automating your tasks immediately.",
    icon: "🛠️",
  },
  {
    title: "Optimized Efficiency",
    description:
      "Robots built to streamline operations, reduce errors, and maximize productivity across industries.",
    icon: "📈",
  },
  {
    title: "Customizable Functions",
    description:
      "Easily adapt robots to different tasks with flexible programming and adjustable modules.",
    icon: "🎨",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-gray-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-24 max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20">
            🤖 Why RoboTech
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose RoboTech Robotics?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            RoboTech isn’t just another robotics provider.
            We build intelligent, safe, and efficient robots
            that help businesses and creators achieve more.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {usps.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl
                         hover:bg-white/10 transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-3xl font-bold text-purple-400">500+</h4>
            <p className="text-sm text-gray-400">Robots Deployed</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-400">2x</h4>
            <p className="text-sm text-gray-400">Productivity Boost</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-400">99%</h4>
            <p className="text-sm text-gray-400">Operational Reliability</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-400">100%</h4>
            <p className="text-sm text-gray-400">Safety Certified</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-24 max-w-4xl mx-auto text-left space-y-5 text-gray-300">
          <p>✨ Trusted by manufacturers, researchers, and tech innovators worldwide.</p>
          <p>🛠️ Works for assembly, logistics, research, inspection, and more.</p>
          <p>🧠 Continuously updated software for smarter, more efficient robots.</p>
          <p>🌍 Seamless operation across factories, labs, and commercial environments.</p>
          <p>🚀 Save time, reduce errors, and scale your operations effortlessly.</p>
        </div>

        {/* CTA */}
        <div className="mt-28 bg-gradient-to-r from-purple-600 to-indigo-600
                        rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Start Automating Smarter Today 🚀
          </h3>
          <p className="text-sm opacity-90 mb-8">
            Explore our robots • Schedule a demo • Deploy instantly
          </p>
          <button className="px-12 py-4 rounded-xl bg-black
                             font-semibold text-lg
                             hover:scale-105 transition-transform">
            Explore RoboTech Solutions
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
