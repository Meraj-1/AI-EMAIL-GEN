import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block px-5 py-2 text-sm font-semibold rounded-full
                           bg-white/10 border border-white/20 backdrop-blur">
            🚀 AI Email Writing Tool
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Start Writing{" "}
          <span className="text-yellow-300">Better Emails</span>{" "}
          Today
        </h2>

        {/* Subheading */}
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals, students, founders, and freelancers
          who are already saving hours every week.
          <br />
          Generate clear, persuasive, and professional emails in seconds —
          without stress.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">

          {/* Primary CTA */}
          <Link
            to="/email-generator"
            className="px-12 py-4 rounded-full font-semibold text-lg
                       bg-black shadow-xl hover:scale-105 hover:bg-gray-900
                       transition-all duration-300"
          >
            Generate My First Email 🚀
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/features"
            className="px-12 py-4 rounded-full font-semibold text-lg
                       border border-white/30 hover:bg-white hover:text-black
                       transition-all duration-300"
          >
            Explore Features
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-300 mb-6">
          <span>✅ No credit card required</span>
          <span>⚡ Instant access</span>
          <span>🔒 100% safe & private</span>
        </div>

        {/* Extra Note */}
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Built for productivity. Designed for clarity.
          Trusted by users worldwide to write emails faster and smarter.
        </p>

      </div>
    </section>
  );
};

export default Cta;
