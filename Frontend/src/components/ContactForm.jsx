import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    console.log("Form submitted:", formData);
    setStatus("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-32 bg-gray-950 text-white px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Send Us a Message ✉️</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? Our team is ready to assist you.  
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white/5 p-10 rounded-2xl shadow-lg"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full p-4 rounded bg-black border border-white/20 text-white placeholder-transparent"
              placeholder="Your Name"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full p-4 rounded bg-black border border-white/20 text-white placeholder-transparent"
              placeholder="Your Email"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full p-4 rounded bg-black border border-white/20 text-white placeholder-transparent resize-none"
              placeholder="Your Message"
            ></textarea>
            <label className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
              Your Message
            </label>
          </div>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center ${
                status.includes("Thank") ? "text-green-400" : "text-red-400"
              } font-semibold`}
            >
              {status}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-semibold text-lg shadow-lg"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Extra Contact Info */}
        <div className="mt-16 text-center text-gray-400 space-y-4">
          <p>
            Prefer direct contact? Email us at{" "}
            <a href="mailto:support@serenedale.com" className="text-purple-400 underline">
              support@serenedale.com
            </a>
          </p>
          <p>
            Follow us on social media for updates and tips:
          </p>
          <div className="flex justify-center gap-6 mt-2 text-2xl">
            <a href="#" className="hover:text-purple-400 transition">🐦</a>
            <a href="#" className="hover:text-purple-400 transition">💼</a>
            <a href="#" className="hover:text-purple-400 transition">📸</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
