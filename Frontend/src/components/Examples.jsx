const Examples = () => {
  return (
    <section className="relative py-32 bg-[#05070f] text-white px-6 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs tracking-[0.35em] text-indigo-400 mb-4">
            AI OUTPUT SAMPLES
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6
                         bg-gradient-to-b from-white to-indigo-300
                         bg-clip-text text-transparent">
            Generated Email
            <br />Examples
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Below are sample outputs produced by the Serenedale AI
            communication engine — optimized for clarity, tone, and response rate.
          </p>
        </div>

        {/* Example Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Example 1 */}
          <div className="relative bg-black/60 border border-white/10
                          rounded-2xl p-10 backdrop-blur-xl">

            <span className="absolute -top-4 left-6 px-4 py-1
                             text-[10px] tracking-widest
                             bg-indigo-400/10 text-indigo-300
                             border border-indigo-400/30 rounded-full">
              FOLLOW-UP EMAIL
            </span>

            <div className="text-sm text-gray-300 leading-relaxed mt-6 space-y-4">
              <p className="text-indigo-300 font-medium">
                Subject: Following up on our recent discussion
              </p>

              <p>
                Hello John,
                <br /><br />
                I hope this message finds you well. I wanted to follow up
                regarding our recent conversation and check if you had an
                opportunity to review the points we discussed.
                <br /><br />
                Please feel free to let me know if you require any additional
                information from my end. I would be happy to assist.
                <br /><br />
                Kind regards,
                <br />
                Alex
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-500 flex justify-between">
              <span>Status: Generated</span>
              <span className="text-indigo-400">Serenedale AI</span>
            </div>
          </div>

          {/* Example 2 */}
          <div className="relative bg-black/60 border border-white/10
                          rounded-2xl p-10 backdrop-blur-xl">

            <span className="absolute -top-4 left-6 px-4 py-1
                             text-[10px] tracking-widest
                             bg-cyan-400/10 text-cyan-300
                             border border-cyan-400/30 rounded-full">
              COLD OUTREACH EMAIL
            </span>

            <div className="text-sm text-gray-300 leading-relaxed mt-6 space-y-4">
              <p className="text-cyan-300 font-medium">
                Subject: Exploring a potential collaboration
              </p>

              <p>
                Hello Sarah,
                <br /><br />
                I recently came across your organization and was impressed
                by the work your team is doing within the industry.
                <br /><br />
                I wanted to reach out to explore whether there might be an
                opportunity to connect and discuss how we could support
                your current objectives.
                <br /><br />
                If this aligns with your interests, I would be glad to connect
                at a time convenient for you.
                <br /><br />
                Best regards,
                <br />
                Rahul
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-500 flex justify-between">
              <span>Status: Generated</span>
              <span className="text-cyan-400">Serenedale AI</span>
            </div>
          </div>
        </div>

        {/* Why This Works */}
        <div className="mt-28 grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-black/50 border border-white/10 rounded-xl p-8">
            <h4 className="font-semibold mb-3 text-white">
              Intent-Driven Structure
            </h4>
            <p className="text-sm text-gray-400">
              Each email is structured around a clearly defined objective,
              ensuring focused and effective communication.
            </p>
          </div>

          <div className="bg-black/50 border border-white/10 rounded-xl p-8">
            <h4 className="font-semibold mb-3 text-white">
              Professional Language Model
            </h4>
            <p className="text-sm text-gray-400">
              Tone and phrasing are dynamically adjusted to maintain
              credibility, clarity, and confidence.
            </p>
          </div>

          <div className="bg-black/50 border border-white/10 rounded-xl p-8">
            <h4 className="font-semibold mb-3 text-white">
              Response-Optimized Output
            </h4>
            <p className="text-sm text-gray-400">
              Messages are optimized to increase engagement
              and improve reply probability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Generate Emails Like These — Instantly
          </h4>

          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Input your intent and let the AI communication engine
            handle the rest.
          </p>

          <button
            className="px-14 py-4 rounded-xl
                       bg-gradient-to-r from-indigo-500 to-cyan-500
                       text-sm font-semibold tracking-wide
                       shadow-[0_0_40px_rgba(99,102,241,0.45)]
                       hover:scale-105 transition-transform"
          >
            START AI GENERATION
          </button>
        </div>

      </div>
    </section>
  );
};

export default Examples;
