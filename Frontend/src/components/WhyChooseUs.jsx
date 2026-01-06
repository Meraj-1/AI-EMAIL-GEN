const usps = [
  {
    title: "Human-Like AI Writing",
    description:
      "Our AI understands context, intent, and tone to craft emails that sound natural, confident, and truly human — never robotic.",
    icon: "🤖",
  },
  {
    title: "Instant Results",
    description:
      "No waiting, no revisions. Enter a few details and get a polished, ready-to-send email in seconds.",
    icon: "⚡",
  },
  {
    title: "Privacy-First by Design",
    description:
      "Your emails are never stored or shared. Everything you write stays private and secure.",
    icon: "🔒",
  },
  {
    title: "Zero Learning Curve",
    description:
      "No prompts, no setup, no confusion. Just fill in the basics and click generate.",
    icon: "🛠️",
  },
  {
    title: "Higher Reply Rates",
    description:
      "Emails are structured for clarity, engagement, and action — helping you get more replies.",
    icon: "📈",
  },
  {
    title: "Flexible Tones",
    description:
      "Switch seamlessly between professional, friendly, persuasive, or formal tones anytime.",
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
            💜 Why Serenedale
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Serenedale?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Serenedale isn’t just another email generator.
            It’s built to save time, improve communication,
            and protect your privacy — every step of the way.
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
            <h4 className="text-3xl font-bold text-purple-400">10k+</h4>
            <p className="text-sm text-gray-400">Emails Generated</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-400">3x</h4>
            <p className="text-sm text-gray-400">Faster Writing</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-400">98%</h4>
            <p className="text-sm text-gray-400">User Satisfaction</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-400">100%</h4>
            <p className="text-sm text-gray-400">Private & Secure</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-24 max-w-4xl mx-auto text-left space-y-5 text-gray-300">
          <p>✨ Trusted by freelancers, founders, students, and professionals worldwide.</p>
          <p>📩 Works for cold emails, follow-ups, job applications, apologies, and pitches.</p>
          <p>🧠 Continuously improving AI that learns what works best.</p>
          <p>🌍 Seamless experience across desktop, tablet, and mobile.</p>
          <p>🚀 Save hours every week and focus on what truly matters.</p>
        </div>

        {/* CTA */}
        <div className="mt-28 bg-gradient-to-r from-purple-600 to-indigo-600
                        rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Start Writing Smarter Emails Today 🚀
          </h3>
          <p className="text-sm opacity-90 mb-8">
            No login required • Free to try • Instant results
          </p>
          <button className="px-12 py-4 rounded-xl bg-black
                             font-semibold text-lg
                             hover:scale-105 transition-transform">
            Generate My First Email
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
