import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Cta = () => {
  return (
    <section className="relative py-32 px-6 text-white bg-[#05070f] overflow-hidden">

      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-indigo-600/5 to-blue-600/5 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto z-10">

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-5 py-2 text-sm font-semibold rounded-full
                           bg-white/10 border border-white/20 backdrop-blur">
            Contact Information
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold
                         bg-gradient-to-br from-white to-indigo-400
                         bg-clip-text text-transparent">
            Get in Touch With Our AI Team
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Hum yahan aapki madad ke liye hain. Email, call ya visit ke through
            contact karein. Hum usually 24 hours me respond karte hain.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid gap-16 md:grid-cols-3 text-center md:text-left">

          {/* Email Card */}
          <div className="group flex flex-col items-center md:items-start gap-4
                          bg-white/5 p-8 rounded-2xl border border-white/10
                          hover:border-purple-500/40 hover:scale-105
                          transition-all duration-300 shadow-[0_0_40px_rgba(152,85,255,0.15)]">
            <div className="text-purple-400 text-4xl">
              <FaEnvelope />
            </div>

            <h3 className="font-semibold text-xl">Email Us</h3>
            <p className="text-gray-300 text-lg">support@serenedale.com</p>
            <p className="text-gray-500 text-sm">Response within 24 hours</p>
          </div>

          {/* Phone Card */}
          <div className="group flex flex-col items-center md:items-start gap-4
                          bg-white/5 p-8 rounded-2xl border border-white/10
                          hover:border-purple-500/40 hover:scale-105
                          transition-all duration-300 shadow-[0_0_40px_rgba(152,85,255,0.15)]">
            <div className="text-purple-400 text-4xl">
              <FaPhoneAlt />
            </div>

            <h3 className="font-semibold text-xl">Call Us</h3>
            <p className="text-gray-300 text-lg">+1 (234) 567-890</p>
            <p className="text-gray-500 text-sm">Mon–Fri, 9AM–6PM (EST)</p>
          </div>

          {/* Address Card */}
          <div className="group flex flex-col items-center md:items-start gap-4
                          bg-white/5 p-8 rounded-2xl border border-white/10
                          hover:border-purple-500/40 hover:scale-105
                          transition-all duration-300 shadow-[0_0_40px_rgba(152,85,255,0.15)]">
            <div className="text-purple-400 text-4xl">
              <FaMapMarkerAlt />
            </div>

            <h3 className="font-semibold text-xl">Visit Us</h3>
            <p className="text-gray-300 text-lg">123 AI Street, Tech City</p>
            <p className="text-gray-500 text-sm">By appointment only</p>
          </div>

        </div>

        {/* Trust Footer */}
        <div className="mt-20 text-center space-y-3 text-gray-400">
          <p>Trusted by thousands of users worldwide.</p>
          <p className="text-sm">All communications are private, encrypted, and secure.</p>
        </div>

      </div>
    </section>
  );
};

export default Cta;
