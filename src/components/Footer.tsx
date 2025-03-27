// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              About Sheko Coffee Union
            </h3>
            <p className="text-gray-200">
              At Sheko Coffee Union, we source the finest coffee beans from
              tropical rainforests, empower East African farmers, and honor the
              Ethiopian coffee legacy. Our mission is to bring you the best
              coffee while supporting sustainable farming communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-yellow-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-200 hover:text-yellow-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-200 hover:text-yellow-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-yellow-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-200">Sheko Coffee Union, East Africa</p>
            <p className="text-gray-200">Email: contact@shekocoffeeunion.com</p>
            <p className="text-gray-200">Phone: +251 912 345 678</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/shekocoffeeunion"
                className="text-gray-200 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/shekocoffeeunion"
                className="text-gray-200 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/shekocoffeeunion"
                className="text-gray-200 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>© 2025 Sheko Coffee Union. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
