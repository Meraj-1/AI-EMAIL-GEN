import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200
     ${
       isActive
         ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500"
         : "text-gray-300 hover:text-white"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          Seren<span className="text-purple-500">dale</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/features" className={navLinkClass}>
            Features
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/email-generator"
            className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700
                       transition font-semibold text-sm shadow-lg"
          >
            Try AI Email Writer 🚀
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-6 py-6 bg-black/90 backdrop-blur-xl border-t border-white/10 space-y-5">

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
            Features
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>

          {/* Mobile CTA */}
          <Link
            to="/email-generator"
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-4 px-6 py-3 rounded-xl
                       bg-purple-600 hover:bg-purple-700 transition
                       font-semibold text-white shadow-lg"
          >
            Start Writing Emails 🚀
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
