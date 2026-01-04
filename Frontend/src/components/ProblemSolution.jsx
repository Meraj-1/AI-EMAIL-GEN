const ProblemSolution = () => {
  return (
    <section className="py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Emails likhna mushkil kyun lagta hai?
          </h2>
          <p className="text-gray-400 text-lg">
            Agar aap bhi professional emails likhne me time waste kar rahe ho,
            replies nahi aa rahe, ya tone galat ho jaata hai — to aap akela nahi ho.
          </p>
        </div>

        {/* Problems vs Solution */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          
          {/* Problems */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-10">
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-2">
              ❌ Common Problems
            </h3>

            <ul className="space-y-6 text-gray-300">
              <li>
                <p className="font-semibold text-white">😓 Email likhne me zyada time lagta hai</p>
                <p className="text-sm text-gray-400 mt-1">
                  Har email ke liye words sochna, format banana aur rewrite karna thaka deta hai.
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">😐 Replies nahi aate</p>
                <p className="text-sm text-gray-400 mt-1">
                  Email bhejne ke baad bhi response nahi milta kyunki message clear ya engaging nahi hota.
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">🤯 Professional tone samajh nahi aata</p>
                <p className="text-sm text-gray-400 mt-1">
                  Kab formal ho, kab friendly — ye confusion email ka impact kharab kar deta hai.
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">😬 Grammar & confidence issues</p>
                <p className="text-sm text-gray-400 mt-1">
                  Galtiyon ka darr aur lack of confidence email bhejne se pehle hi rok deta hai.
                </p>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-10">
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-2">
              ✅ Smart AI Solution
            </h3>

            <ul className="space-y-6 text-gray-200">
              <li>
                <p className="font-semibold text-white">⚡ AI likhe perfect emails seconds me</p>
                <p className="text-sm text-gray-300 mt-1">
                  Bas prompt dalo aur ready-to-send email turant mil jaaye.
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">🎯 Clear, persuasive & professional tone</p>
                <p className="text-sm text-gray-300 mt-1">
                  Sales, follow-up, job, ya client emails — har use-case ke liye optimized tone.
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">🚀 One-click generation</p>
                <p className="text-sm text-gray-300 mt-1">
                  No overthinking. No rewriting. Sirf ek click aur kaam khatam.
                </p>
              </li>

              <li>
                <p className="font-semibold text-white">🧠 Context-aware & error-free</p>
                <p className="text-sm text-gray-300 mt-1">
                  AI samajhta hai situation, audience aur goal — grammar 100% clean.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Stop wasting time. Start writing better emails today.
          </h4>
          <p className="text-gray-400 mb-8">
            Join professionals who are already saving hours and getting more replies using AI.
          </p>
          <button className="px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-lg">
            Try AI Email Generator 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
