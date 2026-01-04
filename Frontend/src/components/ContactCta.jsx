import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center px-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to transform your emails with <span className="text-yellow-300">AI</span>?
        </h2>

        {/* Subheading */}
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
          Experience faster, smarter, and more persuasive email communication.
          Join thousands of users who are already saving hours every week.
        </p>

        {/* CTA Button */}
        <Link
          to="/email-generator"
          className="inline-block mt-6 px-12 py-4 bg-black rounded-full font-semibold text-lg shadow-lg hover:scale-105 hover:bg-gray-900 transition-transform duration-300"
        >
          Start Generating Emails 🚀
        </Link>

        {/* Trust / Extra Note */}
        <p className="text-gray-300 text-sm mt-6 max-w-2xl mx-auto">
          No credit card required • Instant access • 100% private & secure
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;
