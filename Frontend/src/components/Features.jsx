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
    title: "Smart Tone Detection",
    desc: "AI automatically samajhta hai aapka intent aur uske hisaab se professional, friendly ya persuasive tone select karta hai."
  },
  {
    icon: <FaHeading />,
    title: "Optimized Subject Lines",
    desc: "Har email ke saath high-converting subject line milti hai jo open rates improve karti hai."
  },
  {
    icon: <FaRedoAlt />,
    title: "Unlimited Regenerations",
    desc: "Pasand nahi aaya? Ek click me regenerate karo — jitni baar chaho, bina kisi limit ke."
  },
  {
    icon: <FaBolt />,
    title: "Instant Results",
    desc: "Long prompts aur waiting nahi — seconds me ready-to-send email mil jaata hai."
  },
  {
    icon: <FaLock />,
    title: "Privacy First",
    desc: "Aapka data 100% private rehta hai. Emails kahin store ya share nahi kiye jaate."
  },
  {
    icon: <FaLayerGroup />,
    title: "Built for Every Use Case",
    desc: "Jobs, sales, follow-ups, apologies, outreach — har scenario ke liye optimized."
  },
];

const Features = () => {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-blue-600/10"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <span className="inline-block px-5 py-2 text-sm font-semibold rounded-full
                           bg-white/10 border border-white/20">
            ✨ Powerful Features
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Everything You Need to Write Better Emails
          </h2>

          <p className="text-gray-400 text-lg">
            Ye sirf ek email generator nahi —
            ye ek smart AI assistant hai jo aapke emails ko
            professional, clear aur effective banata hai.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8
                         hover:border-purple-500/40 hover:shadow-xl
                         transition-all duration-300"
            >
              <div className="text-purple-400 text-3xl mb-5 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Stats */}
        <div className="mt-28 grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Fast Output", value: "⚡ Seconds" },
            { label: "AI Powered", value: "🧠 Smart Model" },
            { label: "Higher Replies", value: "📩 Better Open Rates" },
            { label: "Privacy Safe", value: "🔒 Secure" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 p-6 rounded-xl"
            >
              <p className="text-2xl mb-2">{item.value}</p>
              <p className="font-semibold text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center space-y-6">
          <h4 className="text-3xl font-bold">
            Start Writing Smarter Emails Today
          </h4>

          <p className="text-gray-400 max-w-2xl mx-auto">
            No learning curve. No complicated setup.
            Just powerful AI helping you write better — instantly.
          </p>

          <button className="px-12 py-4 rounded-xl bg-purple-600
                             hover:bg-purple-700 transition
                             font-semibold text-lg shadow-lg">
            Try Features Now 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;
