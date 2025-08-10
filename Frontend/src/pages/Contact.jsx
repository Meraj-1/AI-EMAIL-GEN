import React from "react";
import WorkInpro from "../components/WorkInpro";
import Headers from "../components/Header";
const Contact = () => {
  return (
    <section
      className="bg-black h-screen text-white py-16 px-6 md:px-20"
      id="contact"
    >
      {/* <Headers/> */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or suggestions about our AI Email Generator? We’d
            love to hear from you. Fill out the form below or reach us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg  border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg  border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 rounded-lg  border  focus:border-purple-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="border p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-400 text-sm">
              You can also reach us via email or phone for quick support.
            </p>
            <div className="space-y-4">
              <p>
                📧{" "}
                <span className="text-purple-400">belalraza158@gmail.com</span>
              </p>
              <p>
                📞 <span className="text-purple-400">+91 73041 85760</span>
              </p>
              <p>
                📍 <span className="text-purple-400">Mumbai, India</span>
              </p>
            </div>
            <div className="h-80  flex flex-wrap rounded-lg overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609962012!2d72.74109834404288!3d19.08219783958096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1691234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
