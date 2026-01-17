import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
    Company: ["About", "Blog", "Careers", "Manifesto", "Contact"],
    Resources: ["Examples", "Community", "Guides", "Docs", "Press"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <footer className="relative bg-[#05070f] text-gray-400 border-t border-cyan-900/30 overflow-hidden">
      {/* Subtle Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2 text-cyan-400 font-bold tracking-[0.3em] text-lg">
              <span className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center rounded-sm">
                <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
              </span>
              NEURAL<span className="text-purple-500">CORE</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              The next generation of neural-linguistic automation. 
              Architecting professional communication through high-fidelity AI models.
              Optimized for high-performance teams.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-gray-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 bg-[#0b0f19]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / Terminal Input */}
          <div className="lg:col-span-7">
            <div className="relative p-6 border border-cyan-500/20 bg-[#0b0f19]/50 backdrop-blur-sm group">
              <div className="absolute -top-px left-4 px-2 bg-[#05070f] text-[10px] font-bold tracking-widest text-cyan-500 uppercase">
                Newsletter.exe
              </div>
              <h4 className="text-white font-semibold mb-2">Join the Neural Network</h4>
              <p className="text-xs mb-6 text-gray-500">Get hardware updates and algorithm patches directly to your inbox.</p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-cyan-400 transition-colors" size={16} />
                  <input 
                    type="email" 
                    placeholder="ENTER_EMAIL_ADDRESS"
                    className="w-full bg-black/50 border border-gray-800 py-3 pl-10 pr-4 text-xs font-mono tracking-wider focus:outline-none focus:border-cyan-500 transition-all text-cyan-100"
                  />
                </div>
                <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 transition-all">
                  SUBSCRIBE <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-3 bg-purple-600 inline-block"></span>
                {title}
              </h5>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-cyan-400 hover:translate-x-1 transition-all inline-block group">
                      <span className="opacity-0 group-hover:opacity-100 text-cyan-400 mr-2 transition-all">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-[10px] font-medium tracking-widest uppercase text-gray-600">
            <span>© {currentYear} NEURALCORE OPS</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
            <span>Uptime: 99.99%</span>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-tighter text-gray-500 italic">
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-4 bg-purple-500/20"></div>)}
            </div>
            SYSTEMS STABLE // DATA ENCRYPTED
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;