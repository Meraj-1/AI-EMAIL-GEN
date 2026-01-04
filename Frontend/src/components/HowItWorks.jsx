const steps = [
  {
    id: 1,
    title: "Choose Email Type",
    desc: "Select karo kis type ka email chahiye — job application, cold email, follow-up, sales, client reply ya kuch aur."
  },
  {
    id: 2,
    title: "Add Basic Details",
    desc: "Bas thodi si information dalo jaise purpose, recipient, tone (formal / friendly) aur key points."
  },
  {
    id: 3,
    title: "Generate Instantly",
    desc: "AI seconds me ek polished, professional aur ready-to-send email generate kar deta hai."
  },
];

const HowItWorks = () => {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works 🚀
          </h2>
          <p className="text-gray-400 text-lg">
            Sirf 3 simple steps follow karo aur professional emails likhna
            ho jaayega super easy — bina stress, bina confusion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Step {step.id}
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-6">
                {step.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Explanation */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Itna simple, phir bhi powerful 💡
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>⚡ No writing skills required</li>
              <li>🧠 AI understands context & intent</li>
              <li>✍️ Grammar-perfect & confident tone</li>
              <li>⏱️ Seconds me ready email</li>
              <li>📩 Better replies, better results</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-2xl p-10">
            <h4 className="text-2xl font-semibold mb-4">
              Who is this for?
            </h4>
            <p className="text-gray-300 mb-6">
              Ye tool specially un logo ke liye hai jo professional communication
              me time aur effort save karna chahte hain.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li>👨‍💼 Working professionals</li>
              <li>🧑‍🎓 Students & job seekers</li>
              <li>📈 Founders & freelancers</li>
              <li>💼 Sales & marketing teams</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Ready to write your first AI-powered email?
          </h4>
          <p className="text-gray-400 mb-8">
            Start now and experience how easy professional writing can be.
          </p>
          <button className="px-10 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Generate Email Now ✨
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
