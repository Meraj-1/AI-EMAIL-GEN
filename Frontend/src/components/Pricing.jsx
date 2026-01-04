const Pricing = () => {
  return (
    <section className="py-32 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple & Transparent Pricing 💰
          </h2>
          <p className="text-gray-400 text-lg">
            Koi hidden charges nahi. Jo plan aapke use ke hisaab se fit ho,
            wahi choose karo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
          
          {/* Free Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold mb-2">Free</h3>
            <p className="text-gray-400 mb-6">Try before you commit</p>

            <div className="text-4xl font-bold mb-6">
              ₹0
            </div>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li>✅ Limited email generations</li>
              <li>✅ Basic tones</li>
              <li>✅ Subject line included</li>
              <li>❌ Unlimited regenerations</li>
              <li>❌ Priority AI</li>
            </ul>

            <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-semibold">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-10 text-center shadow-lg">
            
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm">
              Most Popular 🚀
            </div>

            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <p className="text-white/90 mb-6">For serious users</p>

            <div className="text-4xl font-bold mb-6">
              ₹499<span className="text-lg font-medium">/month</span>
            </div>

            <ul className="space-y-3 text-white mb-8">
              <li>✅ Unlimited email generations</li>
              <li>✅ All tones & styles</li>
              <li>✅ Unlimited regenerations</li>
              <li>✅ Priority AI responses</li>
              <li>✅ Faster output</li>
              <li>✅ Early access to new features</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-black hover:bg-black/80 transition font-semibold">
              Upgrade to Pro ⚡
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          Cancel anytime • Secure payments • No hidden charges
        </div>

      </div>
    </section>
  );
};

export default Pricing;
