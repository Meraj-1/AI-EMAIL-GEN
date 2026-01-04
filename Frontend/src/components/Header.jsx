import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm transition ${
      isActive
        ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          Seren<span className="text-purple-500">dale</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/email-generator" className={navLinkClass}>
            Email Generator
          </NavLink>
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 space-y-4 bg-black/80">
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>
            <NavLink
              to="/email-generator"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Email Generator
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
