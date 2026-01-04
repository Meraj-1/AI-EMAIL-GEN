const Examples = () => {
  return (
    <section className="py-28 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Example Output ✉️
          </h2>
          <p className="text-gray-400 text-lg">
            Ye sirf ek example hai. Hamara AI isi level ke
            professional, clear aur response-driven emails generate karta hai —
            har use-case ke liye.
          </p>
        </div>

        {/* Example Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Example 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-purple-400 font-semibold mb-4">
              📌 Follow-up Email
            </p>

            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="text-purple-300 font-medium">
                Subject: Following up on our conversation
              </p>

              <p className="mt-4">
                Hi John,
                <br /><br />
                I hope you’re doing well. I just wanted to follow up on our last
                conversation and check if you had a chance to review the details
                we discussed.
                <br /><br />
                Please let me know if you need any additional information from my
                side. I’d be happy to assist.
                <br /><br />
                Looking forward to your response.
                <br /><br />
                Best regards,  
                <br />
                Alex
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-purple-400 font-semibold mb-4">
              📌 Cold Outreach Email
            </p>

            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="text-purple-300 font-medium">
                Subject: Quick question regarding your business
              </p>

              <p className="mt-4">
                Hi Sarah,
                <br /><br />
                I came across your company and was impressed by the work you’re
                doing in your industry.
                <br /><br />
                I wanted to reach out to see if you’d be open to a quick
                conversation about how we might be able to support your current
                goals.
                <br /><br />
                If this sounds interesting, I’d love to connect at your
                convenience.
                <br /><br />
                Warm regards,  
                <br />
                Rahul
              </p>
            </div>
          </div>
        </div>

        {/* Why This Works */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-2xl mb-2">🎯</p>
            <h4 className="font-semibold mb-2">Clear Intent</h4>
            <p className="text-sm text-gray-400">
              Har email ka purpose clear hota hai — no confusion, no fluff.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-2xl mb-2">🧠</p>
            <h4 className="font-semibold mb-2">Professional Tone</h4>
            <p className="text-sm text-gray-400">
              Perfect balance of polite, confident aur engaging language.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <p className="text-2xl mb-2">📩</p>
            <h4 className="font-semibold mb-2">Higher Reply Rate</h4>
            <p className="text-sm text-gray-400">
              Structured emails jo responses increase karne ke liye likhe gaye hain.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Want emails like these?
          </h4>
          <p className="text-gray-400 mb-8">
            Bas apni details dalo aur AI ko likhne do.
          </p>
          <button className="px-10 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
            Generate Your Email Now 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default Examples;
