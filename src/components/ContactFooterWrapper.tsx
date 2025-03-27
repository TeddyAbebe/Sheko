// src/components/ContactFooterWrapper.tsx
import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import TropicalRainForest from "../assets/the-tropical-rain-forest.jpg";

const ContactFooterWrapper: React.FC = () => {
  return (
    <div
      id="contact"
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${TropicalRainForest})`,
      }}
    >
      {/* Single Overlay for Both Sections */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ContactFooterWrapper;
