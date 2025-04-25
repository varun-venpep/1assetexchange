
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Partners", href: "/ecosystem-partners" },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-royalgold/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-midnight">1 Asset <span className="text-royalgold">Exchange</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-midnight hover:text-royalgold transition-colors font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-midnight hover:text-royalgold transition-colors font-medium"
              >
                {link.name}
              </Link>
            )
          )}
          <Button
            className="ml-4 px-5 py-2 text-sm rounded-full font-semibold bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-not-allowed transition-all duration-200"
            disabled
          >
            Launch Agent Portal (Coming Soon)
          </Button>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-midnight hover:text-royalgold transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-royalgold/10 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-midnight hover:text-royalgold transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-midnight hover:text-royalgold transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Button
              className="mt-2 w-full px-5 py-2 text-sm rounded-full font-semibold bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-not-allowed transition-all duration-200"
              disabled
            >
              Launch Agent Portal (Coming Soon)
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
