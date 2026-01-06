import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❌ Please fill out all fields.");
      return;
    }

    setLoading(true);

    // Simulated API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("✅ Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20">
            📩 Contact Support
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Send Us a Message
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Questions, feedback, or partnership ideas?
            We usually respond within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white/5 backdrop-blur p-10 rounded-2xl border border-white/10 shadow-2xl"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full p-4 rounded-xl bg-black border border-white/20 text-white
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                         placeholder-transparent outline-none transition"
              placeholder="Your Name"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm
                              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                              peer-focus:top-3 peer-focus:text-sm transition-all">
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
              className="peer w-full p-4 rounded-xl bg-black border border-white/20 text-white
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                         placeholder-transparent outline-none transition"
              placeholder="Your Email"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm
                              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                              peer-focus:top-3 peer-focus:text-sm transition-all">
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
              className="peer w-full p-4 rounded-xl bg-black border border-white/20 text-white
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                         placeholder-transparent outline-none resize-none transition"
              placeholder="Your Message"
            ></textarea>
            <label className="absolute left-4 top-3 text-gray-400 text-sm
                              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                              peer-focus:top-3 peer-focus:text-sm transition-all">
              Your Message
            </label>
          </div>

          {/* Status */}
          {status && (
            <p
              className={`text-center font-semibold ${
                status.includes("Thank") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700
                       disabled:opacity-60 disabled:cursor-not-allowed
                       transition px-6 py-4 rounded-xl font-semibold text-lg shadow-xl"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-16 text-center text-gray-400 space-y-4">
          <p>
            Prefer email? Reach us at{" "}
            <a
              href="mailto:support@serenedale.com"
              className="text-purple-400 underline hover:text-purple-300"
            >
              support@serenedale.com
            </a>
          </p>

          <div className="flex justify-center gap-6 text-2xl pt-2">
            <a className="hover:text-purple-400 transition">🐦</a>
            <a className="hover:text-purple-400 transition">💼</a>
            <a className="hover:text-purple-400 transition">📸</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
