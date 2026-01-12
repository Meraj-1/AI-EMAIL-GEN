const steps = [
  {
    id: "01",
    title: "Select Communication Protocol",
    desc: "Define the email category — job application, outreach, follow-up, sales, or client response."
  },
  {
    id: "02",
    title: "Inject Context Parameters",
    desc: "Provide intent, recipient type, desired tone, and key objectives for optimization."
  },
  {
    id: "03",
    title: "Execute AI Generation",
    desc: "Neural engine processes inputs and outputs a ready-to-send professional email."
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 bg-[#05070f] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs tracking-[0.35em] text-cyan-400 mb-4">
            EXECUTION PIPELINE
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6
                         bg-gradient-to-b from-white to-indigo-300
                         bg-clip-text text-transparent">
            AI Email Generation
            <br />Operational Flow
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            A streamlined three-stage system designed to eliminate
            manual effort and ensure consistent, high-quality communication.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-black/60 border border-white/10
                         rounded-2xl p-10 backdrop-blur-xl
                         hover:border-cyan-400/40 transition"
            >
              {/* Step Index */}
              <span className="absolute -top-4 left-6 px-4 py-1
                               text-[10px] tracking-widest
                               bg-cyan-400/10 text-cyan-300
                               border border-cyan-400/30 rounded-full">
                STEP {step.id}
              </span>

              <h3 className="text-2xl font-semibold mt-6 mb-4 text-white">
                {step.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* System Capabilities */}
        <div className="mt-28 grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Designed for Zero Cognitive Load
            </h3>

            <ul className="space-y-5 text-gray-300">
              <li>• No writing or formatting expertise required</li>
              <li>• AI interprets context, audience, and intent</li>
              <li>• Grammar, tone, and clarity automatically validated</li>
              <li>• Output generated in under 5 seconds</li>
              <li>• Optimized for higher response probability</li>
            </ul>
          </div>

          {/* Right */}
          <div className="relative bg-gradient-to-br
                          from-indigo-600/15 to-cyan-500/10
                          border border-indigo-400/30
                          rounded-2xl p-10 backdrop-blur-xl">

            <span className="absolute -top-3 left-6 px-4 py-1
                             text-[10px] tracking-widest
                             bg-indigo-400/10 text-indigo-300
                             border border-indigo-400/30 rounded-full">
              TARGET USERS
            </span>

            <h4 className="text-2xl font-semibold mb-6 text-white">
              Built for Modern Professionals
            </h4>

            <p className="text-gray-300 mb-8">
              This system is optimized for individuals and teams
              who rely on precise and effective written communication.
            </p>

            <ul className="space-y-4 text-gray-200">
              <li>• Corporate professionals & managers</li>
              <li>• Students and job applicants</li>
              <li>• Founders, freelancers, and consultants</li>
              <li>• Sales, marketing, and support teams</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Initialize Your First AI-Generated Email
          </h4>

          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Replace manual drafting with an automated communication system.
          </p>

          <button
            className="px-14 py-4 rounded-xl
                       bg-gradient-to-r from-cyan-500 to-indigo-600
                       text-sm font-semibold tracking-wide
                       shadow-[0_0_40px_rgba(56,189,248,0.5)]
                       hover:scale-105 transition-transform"
          >
            START AI GENERATION
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
