const useCases = [
  {
    title: "Working Professionals",
    emoji: "👨‍💼",
    desc: "Daily professional emails, follow-ups, reports aur client communication ko fast aur effective banana."
  },
  {
    title: "Startup Founders",
    emoji: "🚀",
    desc: "Investors, partners aur customers ko clear, confident aur persuasive emails bhejne ke liye."
  },
  {
    title: "Students & Job Seekers",
    emoji: "🎓",
    desc: "Job applications, internship emails, professors se communication — bina hesitation."
  },
  {
    title: "HR & Recruitment Teams",
    emoji: "🧑‍💼",
    desc: "Hiring emails, interview calls, rejections aur follow-ups ko consistent aur professional rakhna."
  },
  {
    title: "Freelancers & Consultants",
    emoji: "💼",
    desc: "Clients ko pitch karna, proposals bhejna aur payments follow-up karna easily."
  },
  {
    title: "Sales & Marketing Teams",
    emoji: "📈",
    desc: "Cold outreach, lead follow-ups aur conversions badhane wale emails likhna."
  },
];

const UseCases = () => {
  return (
    <section className="py-32 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who Is This For? 👀
          </h2>
          <p className="text-gray-400 text-lg">
            Chahe aap ek student ho, professional ho ya founder —
            agar aap emails likhte ho, ye tool aapka kaam
            faster, smarter aur better bana dega.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Benefits */}
        <div className="mt-28 grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Why people love this tool ❤️
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>⚡ Saves hours every week</li>
              <li>✍️ No writing skills required</li>
              <li>🧠 Smart AI with context understanding</li>
              <li>📩 Better replies & responses</li>
              <li>🚀 Works for every email type</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-2xl p-10">
            <h4 className="text-2xl font-semibold mb-4">
              Not sure if it's for you?
            </h4>
            <p className="text-gray-300 mb-6">
              Agar aap emails likhte ho — chahe roz ya kabhi kabhi —
              ye tool aapka kaam simple aur stress-free bana dega.
            </p>
            <p className="text-gray-200 font-medium">
              Try it once. You’ll feel the difference.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Ready to write better emails?
          </h4>
          <p className="text-gray-400 mb-8">
            Join professionals, founders aur students jo already AI ka use kar rahe hain.
          </p>
          <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Start Using AI Now 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default UseCases;
