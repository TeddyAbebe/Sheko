import React, { useState, useEffect } from "react";
import ShekoLogo from "../assets/ShekoLogo.jpg";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track the active link based on URL hash or scroll position
  useEffect(() => {
    const currentHash = window.location.hash || "#home";
    setActiveLink(currentHash);

    const handleHashChange = () => {
      const newHash = window.location.hash || "#home";
      setActiveLink(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(sectionId);
      window.history.pushState(null, "", sectionId); // Update URL hash
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#nature", label: "Nature" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials-section", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full md:px-20 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-[60px]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          <a
            href="#home"
            className="flex items-center gap-2 text-white font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            <img
              src={ShekoLogo}
              alt="Sheko Coffee Union Logo"
              className="h-10 w-auto rounded-full"
            />
            <span className="text-lg">Sheko Coffee Union</span>
          </a>
          <p className="text-sm text-gray-300">
            From the Cradle of Coffee in Sheko
          </p>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-white hover:text-yellow-500 transition-colors duration-300 relative ${
                activeLink === link.href ? "text-yellow-500" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.label}
              {activeLink === link.href && (
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-500 transition-all duration-300" />
              )}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-black/90 text-white transition-all duration-300`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-white hover:text-yellow-500 transition-colors duration-300 relative ${
                activeLink === link.href ? "text-yellow-500" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
                toggleMobileMenu();
              }}
            >
              {link.label}
              {activeLink === link.href && (
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-500 transition-all duration-300" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
