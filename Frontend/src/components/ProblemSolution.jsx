const ProblemSolution = () => {
  return (
    <section className="relative py-32 bg-[#05070f] text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4">
            SYSTEM DIAGNOSTIC
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight
                         bg-gradient-to-b from-white to-indigo-300
                         bg-clip-text text-transparent mb-6">
            Why Human-Written Emails
            <br />Fail to Perform
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Manual email writing introduces delays, inconsistency,
            and communication failure across professional workflows.
          </p>
        </div>

        {/* Diagnostic Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* SYSTEM ERRORS */}
          <div className="relative bg-black/60 border border-white/10
                          rounded-2xl p-10 backdrop-blur-xl">

            <span className="absolute -top-3 left-6 px-4 py-1
                             text-[10px] tracking-widest
                             bg-red-500/10 text-red-400
                             border border-red-500/30 rounded-full">
              ERROR LOGS
            </span>

            <h3 className="text-2xl font-semibold mb-10 text-red-400">
              Detected Communication Failures
            </h3>

            <ul className="space-y-8 text-gray-300">
              <li>
                <p className="text-white font-medium">
                  Latency in Email Composition
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Excessive time spent drafting, editing, and restructuring messages.
                </p>
              </li>

              <li>
                <p className="text-white font-medium">
                  Low Response Probability
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Messages lack clarity, persuasion, or engagement signals.
                </p>
              </li>

              <li>
                <p className="text-white font-medium">
                  Tone Calibration Errors
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Inability to consistently balance formal and conversational tone.
                </p>
              </li>

              <li>
                <p className="text-white font-medium">
                  Grammar & Confidence Degradation
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Fear of mistakes results in hesitation or non-action.
                </p>
              </li>
            </ul>
          </div>

          {/* AI SOLUTION */}
          <div className="relative bg-gradient-to-br
                          from-indigo-600/15 to-cyan-500/10
                          border border-indigo-400/30
                          rounded-2xl p-10 backdrop-blur-xl">

            <span className="absolute -top-3 left-6 px-4 py-1
                             text-[10px] tracking-widest
                             bg-cyan-400/10 text-cyan-300
                             border border-cyan-400/30 rounded-full">
              AI CORE ONLINE
            </span>

            <h3 className="text-2xl font-semibold mb-10 text-cyan-300">
              Neural Email Optimization Engine
            </h3>

            <ul className="space-y-8 text-gray-200">
              <li>
                <p className="text-white font-medium">
                  Real-time Email Generation
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  Context-aware emails generated in under 5 seconds.
                </p>
              </li>

              <li>
                <p className="text-white font-medium">
                  Precision-Tuned Professional Tone
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  Automatically optimized for sales, hiring, follow-ups, and clients.
                </p>
              </li>

              <li>
                <p className="text-white font-medium">
                  Zero Cognitive Load
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  No drafting, rewriting, or second guessing required.
                </p>
              </li>

              <li>
                <p className="text-white font-medium">
                  Error-Free Output Assurance
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  Grammar, clarity, and intent verified by AI models.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* SYSTEM CTA */}
        <div className="mt-32 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Upgrade Your Communication Stack
          </h4>

          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Replace manual effort with an AI-powered system trusted
            by modern professionals.
          </p>

          <button
            className="px-12 py-4 rounded-xl
                       bg-gradient-to-r from-indigo-600 to-cyan-500
                       text-sm font-semibold tracking-wide
                       shadow-[0_0_40px_rgba(99,102,241,0.5)]
                       hover:scale-105 transition-transform"
          >
            ACTIVATE AI EMAIL SYSTEM
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
