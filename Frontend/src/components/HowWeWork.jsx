const steps = [
  {
    title: "AI-Powered Writing",
    description: `Our AI understands context, tone, and intent to create emails that get results.
    Whether you’re following up with a client, pitching to an investor, or applying for a job,
    Serenedale’s AI ensures your emails are clear, persuasive, and professional.`,
    details: [
      "Analyzes your input and recipient context",
      "Adapts tone: formal, friendly, persuasive, or confident",
      "Generates subject lines optimized for open rates",
      "Rewrites sentences for clarity and impact"
    ]
  },
  {
    title: "Privacy First",
    description: `We never store your data. All emails are generated securely and privately.
    Your personal information, email content, and AI interactions remain confidential.`,
    details: [
      "No user data is stored on our servers",
      "All processing happens in a secure environment",
      "Emails are instantly generated and discarded after use",
      "Compliant with global data privacy standards"
    ]
  },
  {
    title: "Fast & Simple",
    description: `Generate professional emails in seconds with just a few clicks.
    No complicated forms or multiple steps — input your details, select your tone, and get your email instantly.`,
    details: [
      "Minimalistic and intuitive interface",
      "Step-by-step guided input for beginners",
      "One-click email generation",
      "Compatible with desktop and mobile devices"
    ]
  }
];

const HowWeWork = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Header */}
        <div className="mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work ⚡</h2>
          <p className="text-gray-400 text-lg">
            At Serenedale, we combine cutting-edge AI with a focus on privacy,
            simplicity, and speed to help you write better emails in less time.
            Here’s exactly how our process works.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:bg-white/10 transition duration-300"
            >
              <div className="text-purple-400 text-3xl mb-4">{index + 1}</div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

              {/* Details List */}
              <ul className="space-y-3 text-gray-400 text-left">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">✔</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra Section: Benefits */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Why Users Love How We Work ❤️</h3>
          <p className="text-gray-400 mb-8">
            Our process ensures maximum efficiency and impact with minimal effort. 
            Users consistently report higher reply rates, faster responses, and increased productivity.
          </p>
          <ul className="grid md:grid-cols-3 gap-8 text-left text-gray-300 mb-10">
            <li className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
              <p className="font-semibold mb-2">Time-Saving ⏱️</p>
              <p>Write emails in seconds instead of spending hours drafting.</p>
            </li>
            <li className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
              <p className="font-semibold mb-2">Professional Output 📝</p>
              <p>Every email is clear, polished, and ready to send without edits.</p>
            </li>
            <li className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
              <p className="font-semibold mb-2">Flexible & Adaptable 🔄</p>
              <p>Works for any email type: follow-ups, cold emails, pitches, and apologies.</p>
            </li>
          </ul>

          {/* CTA */}
          <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Start Generating Emails 🚀
          </button>
        </div>

        {/* Extra Notes / Details */}
        <div className="mt-32 max-w-5xl mx-auto text-left text-gray-300 space-y-6">
          <p>
            ✨ Our AI is constantly learning. Every email generated improves
            its understanding of tone, style, and context to give better results
            every time.
          </p>
          <p>
            🔒 Security is our top priority. We make sure that all emails are
            processed in a secure environment, and no content is ever stored
            permanently.
          </p>
          <p>
            📱 Designed for all devices. Whether you’re on desktop, tablet,
            or mobile, the email generation process remains simple and fast.
          </p>
          <p>
            💬 Feedback-driven improvements. Users can provide suggestions
            to enhance the AI and new features are rolled out regularly.
          </p>
          <p>
            🌍 For everyone. Professionals, founders, students, freelancers,
            and teams of all sizes can benefit from our AI-powered email writing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
