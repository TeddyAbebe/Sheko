import React from "react";
import { Link } from "react-router-dom";
import TropicalRainForest from "../assets/the-tropical-rain-forest.jpg";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-green-900 text-white py-8 bg-cover bg-center relative"
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
                className="text-gray-200 hover:text-yellow-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/shekocoffeeunion"
                className="text-gray-200 hover:text-yellow-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/shekocoffeeunion"
                className="text-gray-200 hover:text-yellow-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.07 5.766.128 4.668.393 3.69 1.372 2.71 2.352 2.445 3.45 2.387 4.736.013 8.332 0 8.735 0 12s.013 3.668.07 4.948c.058 1.286.323 2.384 1.302 3.362.98.98 2.078 1.245 3.364 1.302 1.28.058 1.683.07 4.948.07s3.668-.012 4.948-.07c1.286-.057 2.384-.322 3.362-1.302.98-.98 1.245-2.078 1.302-3.364.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.057-1.286-.322-2.384-1.302-3.362-.98-.98-2.078-1.245-3.364-1.302C15.668.013 15.265 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
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
