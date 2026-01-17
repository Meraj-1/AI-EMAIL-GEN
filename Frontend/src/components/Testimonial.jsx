import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { ShieldCheck, UserCheck } from "lucide-react";
import testimonial from "../data/testimonial";

const Testimonials = () => {
  return (
    <section className="relative bg-[#02040a] py-32 px-6 overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.05),transparent_40%)]" />

      {/* HEADER SECTION */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-cyan-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4"
        >
          <ShieldCheck size={14} /> Neural-Link Verification
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
          Validated by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Industry Leaders</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
          High-fidelity communication logs from our global user network. 
          99.4% confidence score across all professional sectors.
        </p>
      </div>

      {/* MASONRY-STYLE GRID */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonial.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid relative group p-[1px] rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-500"
          >
            {/* Card Content */}
            <div className="relative bg-[#0b0f19]/80 backdrop-blur-3xl p-8 rounded-[15px] overflow-hidden">
              {/* Subtle Quote Icon */}
              <FaQuoteLeft className="absolute -top-2 -right-2 text-white/5 text-6xl group-hover:text-cyan-500/10 transition-colors" />

              {/* User Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#02040a] p-0.5 rounded-full">
                    <UserCheck size={12} className="text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide uppercase">{t.name}</h3>
                  <p className="text-[10px] text-cyan-500/70 font-mono tracking-wider">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-[10px] ${i < t.rating ? 'text-purple-500' : 'text-gray-800'}`} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "{t.testimonial}"
              </p>

              {/* Decorative "Data" footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-mono text-gray-600">ID: NC-00{index + 102}</span>
                <span className="text-[9px] font-mono text-cyan-600">VERIFIED_LOG</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* HIGH-CONVERSION CTA */}
      <div className="relative mt-32 max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-12 text-center overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
          
          <h4 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Amplify Your <br />
            <span className="text-cyan-400">Communication Output?</span>
          </h4>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-xs tracking-[0.2em] uppercase hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Initialize Free Trial
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all">
              Schedule Architecture Call
            </button>
          </div>
          
          <p className="mt-8 text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase">
            No credit card required // Secure API Access // 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;