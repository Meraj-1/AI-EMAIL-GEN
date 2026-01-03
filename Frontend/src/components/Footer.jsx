import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-14 md:justify-between">

          {/* Logo */}
          <div className="max-w-sm">
            <img src={assets.logokit} alt="Serendale Logo" className="mb-4 w-40" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Build, generate, and automate professional emails using AI.
              Designed for teams and individuals who value speed and quality.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            
            <div>
              <p className="mb-6 text-sm font-semibold tracking-wide text-white">
                Product
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Features", "Integration", "Updates", "FAQ", "Pricing"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <p className="mb-6 text-sm font-semibold tracking-wide text-white">
                Company
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  "About",
                  "Blog",
                  "Careers",
                  "Manifesto",
                  "Press",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-6 text-sm font-semibold tracking-wide text-white">
                Resources
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Examples", "Community", "Guides", "Docs", "Press"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <p className="mb-6 text-sm font-semibold tracking-wide text-white">
                Legal
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Privacy", "Terms", "Security"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row
                        items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Serendale. All rights reserved.</p>
          <p className="text-gray-400">
            Built with ❤️ using AI
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
