const EmailGenerator = () => {
  return (
    <section className="py-28 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Generate Your Email ✨
          </h2>
          <p className="text-gray-400 text-lg">
            Bas kuch basic details bharo aur hamara AI aapke liye
            ek clear, professional aur impactful email likh dega —
            bilkul ready to send.
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
          </div>

          {/* Button */}
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl font-semibold text-lg">
            Generate Email 🚀
          </button>
        </div>

        {/* Preview Section */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Generated Email Preview</h3>
          <p className="text-gray-400 text-sm mb-4">
            Yahan aapka generated email preview dikhega.
          </p>
          <div className="bg-black/50 rounded-xl p-6 text-gray-300 text-sm leading-relaxed">
            Dear [Recipient], <br /><br />
            This is a sample preview of your AI-generated email.  
            Once you click “Generate Email”, the complete content
            will appear here — structured, clear and ready to send.
            <br /><br />
            Best regards,  
            <br />[Your Name]
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            How It Works ⚙️
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 p-8 rounded-xl">
              <p className="text-3xl mb-4">📝</p>
              <h4 className="font-semibold mb-2">Fill Details</h4>
              <p className="text-sm text-gray-400">
                Email type, tone aur short description enter karein.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <p className="text-3xl mb-4">🤖</p>
              <h4 className="font-semibold mb-2">AI Writes</h4>
              <p className="text-sm text-gray-400">
                Hamara AI context samajh kar perfect email likhta hai.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <p className="text-3xl mb-4">📤</p>
              <h4 className="font-semibold mb-2">Copy & Send</h4>
              <p className="text-sm text-gray-400">
                Email copy karein aur instantly send karein.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Perfect For 💼</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Freelancers, job seekers, founders, sales professionals,
            students aur anyone jo professional emails likhna chahta hai —
            bina stress ke.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions ❓
          </h3>

          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">
                Kya ye tool free hai?
              </h4>
              <p className="text-sm text-gray-400">
                Haan, bilkul free. No login aur no hidden charges.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">
                Kya emails editable hoti hain?
              </h4>
              <p className="text-sm text-gray-400">
                Yes! Aap generated email ko copy karke edit kar sakte ho.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">
                Kya ye professional use ke liye safe hai?
              </h4>
              <p className="text-sm text-gray-400">
                100%. Emails professional tone aur clarity ke saath likhi jaati hain.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center bg-gradient-to-r from-purple-600 to-indigo-600 p-10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Start Writing Better Emails Today 🚀
          </h3>
          <p className="text-sm opacity-90 mb-6">
            No login required • Instant results • Stress-free writing
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold">
            Generate My First Email
          </button>
        </div>

      </div>
    </section>
  );
};

export default EmailGenerator;
