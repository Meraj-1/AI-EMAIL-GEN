import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-3 gap-16">

        {/* Email */}
        <div className="flex flex-col items-center md:items-start gap-4 hover:scale-105 transition-transform">
          <div className="text-purple-400 text-4xl mb-2">
            <FaEnvelope />
          </div>
          <h3 className="font-semibold text-xl mb-1">Email</h3>
          <p className="text-gray-300 text-lg">support@robotech.com</p>
          <p className="text-gray-500 text-sm mt-2">We respond within 24 hours.</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start gap-4 hover:scale-105 transition-transform">
          <div className="text-purple-400 text-4xl mb-2">
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold text-xl mb-1">Phone</h3>
          <p className="text-gray-300 text-lg">+1 555 123 4567</p>
          <p className="text-gray-500 text-sm mt-2">Available Mon-Fri, 9AM-6PM EST</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start gap-4 hover:scale-105 transition-transform">
          <div className="text-purple-400 text-4xl mb-2">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold text-xl mb-1">Address</h3>
          <p className="text-gray-300 text-lg">456 Robotics Ave, Tech Park, USA</p>
          <p className="text-gray-500 text-sm mt-2">Visit us by appointment only</p>
        </div>

      </div>

      {/* Optional CTA / Trust */}
      <div className="mt-16 text-center text-gray-400">
        <p>Trusted by robotics innovators and businesses worldwide. Your inquiries are safe and secure.</p>
      </div>
    </section>
  );
};

export default ContactInfo;
