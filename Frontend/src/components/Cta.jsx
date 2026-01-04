import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Writing Better Emails Today ✨
        </h2>

        {/* Subheading */}
        <p className="text-gray-200 text-lg mb-10">
          Join thousands of professionals, students, founders, and freelancers who are already saving hours every week.  
          Generate clear, persuasive, and professional emails in seconds.
        </p>

        {/* Button */}
        <Link
          to="/email-generator"
          className="inline-block px-10 py-4 bg-black hover:bg-black/80 transition rounded-full font-semibold text-lg shadow-lg"
        >
          Generate My First Email 🚀
        </Link>

        {/* Trust / Notes */}
        <p className="text-gray-300 text-sm mt-6">
          No credit card required • Instant access • 100% safe & private
        </p>
      </div>
    </section>
  );
};

export default Cta;
