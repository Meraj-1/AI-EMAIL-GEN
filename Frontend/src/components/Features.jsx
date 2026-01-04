const features = [
  {
    title: "Smart Tone Detection",
    desc: "AI automatically samajhta hai aapka intent aur uske hisaab se professional, friendly ya persuasive tone set karta hai."
  },
  {
    title: "Subject Line Included",
    desc: "Har email ke saath optimized subject line milti hai jo open rate badhane ke liye likhi jaati hai."
  },
  {
    title: "Unlimited Regenerations",
    desc: "Pasand nahi aaya? Ek click me dubara generate karo — jitni baar chaho, bina kisi limit ke."
  },
  {
    title: "Instant Results",
    desc: "Long prompts ya waiting nahi — seconds me ready-to-send email mil jaata hai."
  },
  {
    title: "Privacy Focused",
    desc: "Aapka data safe rehta hai. Emails private hote hain aur kahin store nahi kiye jaate."
  },
  {
    title: "Works for Every Use Case",
    desc: "Job, sales, follow-ups, apologies ya outreach — har situation ke liye ready."
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features ✨
          </h2>
          <p className="text-gray-400 text-lg">
            Ye sirf ek email generator nahi hai —  
            ye ek smart writing assistant hai jo aapke emails ko next level pe le jaata hai.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="text-purple-400 text-2xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Row */}
        <div className="mt-28 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-3xl mb-2">⚡</p>
            <p className="font-semibold">Super Fast</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-3xl mb-2">🧠</p>
            <p className="font-semibold">AI Powered</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-3xl mb-2">📩</p>
            <p className="font-semibold">High Response</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-3xl mb-2">🔒</p>
            <p className="font-semibold">Secure & Private</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Everything you need to write better emails
          </h4>
          <p className="text-gray-400 mb-8">
            No learning curve. No complicated setup. Just better writing.
          </p>
          <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Try Features Now 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;
