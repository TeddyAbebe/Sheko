import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="font-handwritten text-2xl font-bold text-yellow-400 mb-4">
              About Sheko Coffee Union
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Based in the southwest region of Ethiopia, in the Bench-Sheko
              zone, Sheko wereda, the Sheko Amora Gedel Coffee Producers'
              Cooperative Union was founded by 19 primary cooperatives and 6,432
              farmers to sell coffee on the world market. We hold a certificate
              guaranteeing that our products are organic.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-handwritten text-2xl font-bold text-yellow-400 mb-4">
              Contact Info
            </h3>
            <p className="text-gray-300">Sheko Coffee Union, East Africa</p>
            <p className="text-gray-300">
              Export Manager:{" "}
              <a
                href="mailto:export@shekocoffeeunion.com"
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
              >
                export@shekocoffeeunion.com
              </a>
            </p>
            <p className="text-gray-300">
              General Inquiries:{" "}
              <a
                href="mailto:contact@shekocoffeeunion.com"
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
              >
                contact@shekocoffeeunion.com
              </a>
            </p>
            <p className="text-gray-300">Phone: +251 912 345 678</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-handwritten text-2xl font-bold text-yellow-400 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com/shekocoffeeunion"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-8 h-8" />
              </a>
              <a
                href="https://twitter.com/shekocoffeeunion"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/shekocoffeeunion"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-600"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Sheko Coffee Union. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
