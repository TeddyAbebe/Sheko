// src/components/Footer.tsx
import React from "react";
import TropicalRainForest from "../assets/the-tropical-rain-forest.jpg";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-green text-white py-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${TropicalRainForest})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-200">123 Farm Road, Green Valley</p>
            <p className="text-gray-200">Email: info@purefarm.com</p>
            <p className="text-gray-200">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-yellow">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>© 2025 PureFarm. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
