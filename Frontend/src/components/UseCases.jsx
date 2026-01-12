const useCases = [
  {
    title: "Working Professionals",
    role: "Daily Communication",
    desc: "Handle routine professional emails, follow-ups, reports, and client communication with speed and precision."
  },
  {
    title: "Startup Founders",
    role: "Leadership & Outreach",
    desc: "Craft confident investor updates, partnership proposals, and customer communication with clarity and authority."
  },
  {
    title: "Students & Job Seekers",
    role: "Career Communication",
    desc: "Generate impactful job applications, internship emails, and academic communication without hesitation."
  },
  {
    title: "HR & Recruitment Teams",
    role: "Hiring Operations",
    desc: "Standardize interview invites, hiring updates, rejection emails, and follow-ups with a consistent professional tone."
  },
  {
    title: "Freelancers & Consultants",
    role: "Client Management",
    desc: "Create proposals, client pitches, onboarding emails, and payment follow-ups with ease."
  },
  {
    title: "Sales & Marketing Teams",
    role: "Revenue Growth",
    desc: "Generate high-converting cold outreach, lead follow-ups, and persuasive sales emails at scale."
  },
];

const UseCases = () => {
  return (
    <section className="relative py-36 bg-[#05070f] text-white overflow-hidden">

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <p className="text-xs tracking-[0.35em] text-cyan-400 mb-4">
            AI USER PROFILES
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6
                         bg-gradient-to-b from-white to-cyan-300
                         bg-clip-text text-transparent">
            Who Is This
            <br />Built For?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Serenedale AI is designed for individuals and teams
            who rely on clear, effective, and professional email communication.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="relative bg-black/60 border border-white/10
                         rounded-2xl p-10 backdrop-blur-xl
                         hover:border-cyan-400/40 transition"
            >
              <span className="text-[10px] tracking-widest text-cyan-400">
                {item.role.toUpperCase()}
              </span>

              <h3 className="text-2xl font-semibold mt-4 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-8">
              Why Teams Choose This Platform
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li>• Saves multiple hours every week</li>
              <li>• No writing expertise required</li>
              <li>• Context-aware language intelligence</li>
              <li>• Improves response and engagement rates</li>
              <li>• Adapts to any professional email scenario</li>
            </ul>
          </div>

          <div className="bg-black/60 border border-white/10 rounded-2xl p-12 backdrop-blur-xl">
            <h4 className="text-2xl font-semibold mb-4">
              Is this right for you?
            </h4>

            <p className="text-gray-300 mb-6 leading-relaxed">
              If email communication plays any role in your work —
              whether daily or occasionally — this platform
              will significantly reduce effort and improve results.
            </p>

            <p className="text-cyan-400 font-medium">
              Try once. Experience the difference.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Activate AI-Powered Email Writing
          </h4>

          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join professionals, founders, and teams already using
            AI to communicate smarter.
          </p>

          <button
            className="px-16 py-4 rounded-xl
                       bg-gradient-to-r from-cyan-500 to-indigo-500
                       text-sm font-semibold tracking-wide
                       shadow-[0_0_40px_rgba(34,211,238,0.45)]
                       hover:scale-105 transition-transform"
          >
            START USING AI
          </button>
        </div>

      </div>
    </section>
  );
};

export default UseCases;
