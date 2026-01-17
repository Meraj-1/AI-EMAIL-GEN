import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Cpu, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header depth
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300
     ${isActive 
       ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
       : "text-gray-500 hover:text-white"}`;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b 
      ${scrolled 
        ? "bg-[#0b0f19]/80 backdrop-blur-xl py-3 border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
        : "bg-transparent py-6 border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        
        {/* LOGO WITH GLOW */}
        <Link
          to="/"
          className="group flex items-center gap-3 text-cyan-400 font-black tracking-[0.4em] text-sm"
        >
          <div className="relative">
            <Cpu size={22} className="group-hover:rotate-90 transition-transform duration-500" />
            <span className="absolute inset-0 bg-cyan-400 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></span>
          </div>
          <span className="hidden sm:block">
            NEURAL<span className="text-purple-500 group-hover:text-purple-400 transition-colors">CORE</span>
          </span>
        </Link>

        {/* DESKTOP NAV - With animated indicator */}
        <nav className="hidden md:flex items-center gap-10">
          {["About", "Systems", "Contact"].map((item) => (
            <NavLink 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  {item}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CTA - Cyberpunk Style */}
        <div className="hidden md:block">
          <Link
            to="/email-generator"
            className="group relative px-6 py-2 overflow-hidden border border-cyan-500/50"
          >
            <span className="absolute inset-0 w-0 bg-cyan-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center gap-2 text-[10px] font-black tracking-widest text-cyan-400 group-hover:text-black transition-colors">
              <Zap size={12} fill="currentColor" />
              INITIATE AI MODULE
            </span>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE PANEL - Animated with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#05070f] border-t border-cyan-500/20 overflow-hidden"
          >
            <nav className="flex flex-col gap-8 px-10 py-12">
              {["About", "Systems", "Contact"].map((item) => (
                <NavLink 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  onClick={() => setMenuOpen(false)}
                  className="text-lg uppercase tracking-[0.3em] font-light text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </NavLink>
              ))}
              <Link
                to="/email-generator"
                onClick={() => setMenuOpen(false)}
                className="mt-4 py-4 text-center border border-purple-500/50 text-purple-400 font-bold tracking-[0.2em] text-xs hover:bg-purple-500 hover:text-black transition-all"
              >
                RUN AI COMMAND
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;