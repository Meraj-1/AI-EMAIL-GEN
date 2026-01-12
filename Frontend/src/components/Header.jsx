import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `uppercase tracking-widest text-xs font-semibold transition-all
     ${
       isActive
         ? "text-cyan-400 border-b border-cyan-400"
         : "text-gray-400 hover:text-cyan-300"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/90 backdrop-blur border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-cyan-400 font-bold tracking-[0.3em] text-sm"
        >
          <Cpu size={18} />
          <span>NEURAL<span className="text-purple-500">CORE</span></span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/features" className={navLinkClass}>
            Systems
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            to="/email-generator"
            className="px-6 py-2 text-xs font-bold tracking-widest
                       border border-cyan-400 text-cyan-400
                       hover:bg-cyan-400 hover:text-black
                       transition-all"
          >
            INITIATE AI →
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-400"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-6 py-6 bg-[#05070f] border-t border-cyan-500/20 space-y-6">

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/features"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Systems
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>

          <Link
            to="/email-generator"
            onClick={() => setMenuOpen(false)}
            className="block mt-6 px-6 py-3 text-center
                       border border-purple-500 text-purple-400
                       tracking-widest font-bold text-xs
                       hover:bg-purple-500 hover:text-black
                       transition-all"
          >
            RUN AI MODULE
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
