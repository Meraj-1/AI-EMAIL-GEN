import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="relative py-32 px-6 text-white text-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative max-w-4xl mx-auto space-y-8">

        {/* Badge */}
        <span className="inline-block px-5 py-2 text-sm font-semibold rounded-full bg-white/10 border border-white/20">
          ⚡ AI-Powered Email Writing
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transform your emails with{" "}
          <span className="text-yellow-300">AI that converts</span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
          Write professional, persuasive emails in seconds.
          Save hours every week and communicate with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            to="/email-generator"
            className="px-12 py-4 rounded-full font-semibold text-lg bg-black shadow-xl
                       hover:scale-105 hover:bg-gray-900 transition-all duration-300"
          >
            Start Generating Emails 🚀
          </Link>

          <Link
            to="/features"
            className="px-12 py-4 rounded-full font-semibold text-lg border border-white/30
                       hover:bg-white hover:text-black transition-all duration-300"
          >
            See Features
          </Link>
        </div>

        {/* Trust Note */}
        <p className="text-gray-300 text-sm max-w-2xl mx-auto pt-4">
          ✅ No credit card required &nbsp;•&nbsp; 🔒 100% Private & Secure &nbsp;•&nbsp; ⚡ Instant Access
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;
