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
      "Rewrites sentences for clarity and impact",
    ],
  },
  {
    title: "Privacy First",
    description: `We never store your data. All emails are generated securely and privately.
Your personal information, email content, and AI interactions remain confidential.`,
    details: [
      "No user data is stored on our servers",
      "All processing happens in a secure environment",
      "Emails are instantly generated and discarded after use",
      "Compliant with global data privacy standards",
    ],
  },
  {
    title: "Fast & Simple",
    description: `Generate professional emails in seconds with just a few clicks.
No complicated forms or multiple steps — input your details, select your tone, and get your email instantly.`,
    details: [
      "Minimalistic and intuitive interface",
      "Step-by-step guided input for beginners",
      "One-click email generation",
      "Compatible with desktop and mobile devices",
    ],
  },
];

const HowWeWork = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Work ⚡
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Serenedale, we combine cutting-edge AI with a focus on privacy, simplicity,
            and speed to help you write better emails in less time. Here’s exactly how
            our process works.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:bg-white/10 hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white text-xl font-bold mb-4 mx-auto">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{step.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{step.description}</p>

              {/* Details List */}
              <ul className="space-y-3 text-gray-400 text-left">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-xl mt-1">✔</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-32 text-center max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Users Love How We Work ❤️
          </h3>
          <p className="text-gray-400 mb-12 leading-relaxed">
            Our process ensures maximum efficiency and impact with minimal effort.
            Users consistently report higher reply rates, faster responses, and increased productivity.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-6 rounded-xl hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-105">
              <p className="font-semibold mb-2 text-lg">Time-Saving ⏱️</p>
              <p className="text-gray-300 text-sm">Write emails in seconds instead of spending hours drafting.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-105">
              <p className="font-semibold mb-2 text-lg">Professional Output 📝</p>
              <p className="text-gray-300 text-sm">Every email is clear, polished, and ready to send without edits.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-105">
              <p className="font-semibold mb-2 text-lg">Flexible & Adaptable 🔄</p>
              <p className="text-gray-300 text-sm">Works for any email type: follow-ups, cold emails, pitches, and apologies.</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-12 px-12 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-semibold text-lg">
            Start Generating Emails 🚀
          </button>
        </div>

        {/* Extra Notes / Details */}
        <div className="mt-32 max-w-5xl mx-auto text-gray-300 space-y-6 text-left">
          <p>✨ Our AI is constantly learning. Every email generated improves its understanding of tone, style, and context to give better results every time.</p>
          <p>🔒 Security is our top priority. All emails are processed securely, and no content is stored permanently.</p>
          <p>📱 Designed for all devices. Desktop, tablet, or mobile — generation stays fast and simple.</p>
          <p>💬 Feedback-driven improvements. User suggestions are continuously incorporated into new AI features.</p>
          <p>🌍 For everyone. Professionals, founders, students, freelancers, and teams of all sizes can benefit from Serenedale AI.</p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
