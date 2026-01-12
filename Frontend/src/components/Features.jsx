import {
  FaBrain,
  FaHeading,
  FaRedoAlt,
  FaBolt,
  FaLock,
  FaLayerGroup,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "Adaptive Tone Intelligence",
    desc: "The AI engine analyzes intent and context to dynamically select the optimal tone — professional, friendly, or persuasive."
  },
  {
    icon: <FaHeading />,
    title: "Subject Line Optimization",
    desc: "Every email includes a high-impact subject line engineered to improve open and response rates."
  },
  {
    icon: <FaRedoAlt />,
    title: "Unlimited Regeneration",
    desc: "Instantly regenerate outputs until the message aligns perfectly with your objective — no limits applied."
  },
  {
    icon: <FaBolt />,
    title: "Real-Time Generation",
    desc: "No long prompts or waiting cycles. Generate structured, ready-to-send emails within seconds."
  },
  {
    icon: <FaLock />,
    title: "Privacy-First Architecture",
    desc: "All inputs remain private. No data is stored, tracked, or shared at any stage of processing."
  },
  {
    icon: <FaLayerGroup />,
    title: "Universal Use-Case Coverage",
    desc: "Designed to handle job applications, sales outreach, follow-ups, apologies, and complex professional scenarios."
  },
];

const Features = () => {
  return (
    <section className="relative py-36 px-6 bg-[#05070f] text-white overflow-hidden">

      {/* Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-purple-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <p className="text-xs tracking-[0.35em] text-indigo-400 mb-4">
            AI CORE CAPABILITIES
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6
                         bg-gradient-to-b from-white to-indigo-300
                         bg-clip-text text-transparent">
            Everything Required
            <br />for High-Impact Emails
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            This is not a basic email generator.
            It is a purpose-built AI communication system
            designed to produce clear, confident, and effective messages.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-black/60 border border-white/10
                         rounded-2xl p-10 backdrop-blur-xl
                         hover:border-indigo-400/40 transition"
            >
              <div className="text-indigo-400 text-3xl mb-6
                              group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* System Stats */}
        <div className="mt-32 grid md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Generation Speed", value: "< 5 Seconds" },
            { label: "Language Intelligence", value: "Context-Aware AI" },
            { label: "Engagement Impact", value: "Higher Response Rate" },
            { label: "Security Model", value: "Privacy-First" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-black/60 border border-white/10
                         rounded-xl p-8 backdrop-blur-xl"
            >
              <p className="text-lg font-semibold text-indigo-300 mb-2">
                {item.value}
              </p>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h4 className="text-3xl font-bold mb-6">
            Activate AI-Driven Email Writing
          </h4>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            No setup. No learning curve.
            Simply provide intent — the AI handles execution.
          </p>

          <button
            className="px-16 py-4 rounded-xl
                       bg-gradient-to-r from-indigo-500 to-cyan-500
                       text-sm font-semibold tracking-wide
                       shadow-[0_0_40px_rgba(99,102,241,0.45)]
                       hover:scale-105 transition-transform"
          >
            ENABLE AI FEATURES
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;
