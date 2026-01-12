const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "Test AI email generation with limited capacity.",
    features: [
      "Limited email generations",
      "Basic tones",
      "Subject line included",
      "No unlimited regenerations",
      "No priority AI",
    ],
    isPro: false,
  },
  {
    name: "Pro",
    price: "₹499 / month",
    desc: "Full AI access for power users, priority processing, unlimited regenerations.",
    features: [
      "Unlimited email generations",
      "All tones & styles",
      "Unlimited regenerations",
      "Priority AI responses",
      "Faster output",
      "Early access to new features",
    ],
    isPro: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-32 bg-[#05070f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs text-indigo-400 tracking-widest mb-2">
            AI SUBSCRIPTION TIERS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold
                         bg-gradient-to-br from-white to-indigo-400
                         bg-clip-text text-transparent mb-4">
            Transparent & Flexible Plans
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the tier that fits your workflow. No hidden fees, full control.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-10 border border-white/10
                          ${plan.isPro ? "bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl" : "bg-white/5"}`}
            >
              {/* Badge for Pro */}
              {plan.isPro && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2
                                bg-black text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-semibold mb-2 ${plan.isPro ? "text-white" : "text-gray-200"}`}>
                {plan.name}
              </h3>
              <p className={plan.isPro ? "text-white/90 mb-6" : "text-gray-400 mb-6"}>
                {plan.desc}
              </p>

              <div className={`text-4xl font-bold mb-6 ${plan.isPro ? "text-white" : "text-gray-200"}`}>
                {plan.price}
              </div>

              <ul className={`space-y-3 mb-8 ${plan.isPro ? "text-white" : "text-gray-300"}`}>
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 before:content-['•'] before:text-indigo-400">
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition
                            ${plan.isPro ? "bg-black hover:bg-black/80 text-white" : "border border-white/20 hover:bg-white/10 text-gray-200"}`}
              >
                {plan.isPro ? "Upgrade to Pro ⚡" : "Start Free"}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          Cancel anytime • Secure payments • 100% AI-powered automation
        </div>

      </div>
    </section>
  );
};

export default Pricing;
