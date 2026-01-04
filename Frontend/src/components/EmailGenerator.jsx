const EmailGenerator = () => {
  return (
    <section className="py-28 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Generate Your Email ✨
          </h2>
          <p className="text-gray-400 text-lg">
            Bas kuch basic details bharo aur hamara AI aapke liye
            ek clear, professional aur impactful email likh dega —
            ready to send.
          </p>
        </div>

        {/* Generator Box */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-10 grid gap-6">
          
          {/* Email Type */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email Type
            </label>
            <select className="w-full p-4 rounded-xl bg-black border border-white/20 focus:outline-none focus:border-purple-500">
              <option>Select email type</option>
              <option>Cold Email</option>
              <option>Follow-up Email</option>
              <option>Job Application</option>
              <option>Apology Email</option>
              <option>Sales / Pitch Email</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Choose the category that best matches your purpose.
            </p>
          </div>

          {/* Tone */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email Tone
            </label>
            <select className="w-full p-4 rounded-xl bg-black border border-white/20 focus:outline-none focus:border-purple-500">
              <option>Select tone</option>
              <option>Professional</option>
              <option>Friendly</option>
              <option>Persuasive</option>
              <option>Formal</option>
              <option>Confident</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Tone decide karta hai ki email ka feel kaisa hoga.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Brief Description
            </label>
            <textarea
              placeholder="Example: Write a follow-up email to a client who hasn't replied in 5 days..."
              className="w-full p-4 rounded-xl bg-black border border-white/20 focus:outline-none focus:border-purple-500"
              rows="5"
            />
            <p className="text-xs text-gray-500 mt-1">
              Jitni clear details hongi, email utni zyada accurate hogi.
            </p>
          </div>

          {/* Button */}
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl font-semibold text-lg">
            Generate Email 🚀
          </button>
        </div>

        {/* Trust / Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-2xl mb-2">⚡</p>
            <h4 className="font-semibold mb-2">Instant Results</h4>
            <p className="text-sm text-gray-400">
              Seconds me ready-to-send email — no rewriting required.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-2xl mb-2">🧠</p>
            <h4 className="font-semibold mb-2">Smart AI Writing</h4>
            <p className="text-sm text-gray-400">
              Context samajh ke clear aur professional content likhta hai.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-2xl mb-2">📩</p>
            <h4 className="font-semibold mb-2">Better Replies</h4>
            <p className="text-sm text-gray-400">
              Engaging tone jo responses increase kare.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          No login required • No writing skills needed • 100% free to try
        </div>

      </div>
    </section>
  );
};

export default EmailGenerator;
