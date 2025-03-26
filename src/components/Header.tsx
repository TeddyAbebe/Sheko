// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      className={`fixed w-full z-10 transition-all duration-300 sm:px-20 ${
        isScrolled ? "bg-black/50 z-50 backdrop-blur-[60px]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-semibold"
        >
          <img
            src={ShekoLogo}
            alt="Sheko Coffee Union Logo"
            className="h-12 w-auto rounded-full"
          />
          Sheko Coffee Union
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className={`text-white`}>
            Home
          </Link>
          <Link to="/about" className={`text-white`}>
            About
          </Link>
          <Link to="/services" className={`text-white`}>
            Services
          </Link>
          <Link to="/products" className={`text-white`}>
            Products
          </Link>

          <Link to="/contact" className={`text-white`}>
            Contact
          </Link>
        </nav>

        {/* Contact Button (Desktop) */}
        <Link
          to="/contact"
          className="hidden md:block bg-green-900 opacity-100 font-semibold text-white px-4 py-2 rounded-md"
        >
          Contact Us
        </Link>

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
        } bg-black text-white transition-all duration-300`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="text-white hover:text-green"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-green"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-green"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-green"
            onClick={toggleMobileMenu}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-green"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="bg-green text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
