// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import ShekoLogo from "../assets/ShekoLogo.jpg"; // Import the logo

const Header: React.FC = () => {
  // State to track scroll position and mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll event
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full md:px-20 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-[60px]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-white font-semibold"
        >
          <img
            src={ShekoLogo}
            alt="Sheko Coffee Union Logo"
            className="h-10 w-auto rounded-full"
          />
          <span className="text-lg">Sheko Coffee Union</span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#products"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Contact
          </a>
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
          <a
            href="#home"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a
            href="#products"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
