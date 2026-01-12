const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center md:text-left space-y-6">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Get in Touch with <span className="text-purple-400">RoboTech</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
          Have questions about our robots, automation solutions, or collaborations?  
          Our team is ready to assist you with any inquiries about our robotics technology.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mt-6">
          <a
            href="mailto:support@robotech.com"
            className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg shadow-lg"
          >
            Email Us 📩
          </a>
          <a
            href="/contact-form"
            className="px-8 py-4 rounded-xl border border-purple-600 hover:bg-purple-600 hover:text-white transition font-semibold text-lg"
          >
            Contact Form 📝
          </a>
        </div>

        {/* Trust / Extra Note */}
        <p className="text-gray-400 text-sm mt-6 max-w-2xl">
          Our robotics support team responds promptly and prioritizes safety and security.  
          No spam, no selling — just expert guidance and assistance.
        </p>

        {/* Decorative Graphics / Gradient Lines */}
        <div className="hidden md:block mt-12">
          <div className="h-1 w-48 bg-purple-500 mx-0 rounded-full animate-pulse"></div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
