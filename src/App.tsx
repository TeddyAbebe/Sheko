import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Nature from "./components/Nature";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactFooterWrapper from "./components/ContactFooterWrapper";
import { IoIosArrowUp } from "react-icons/io";

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Nature />
      <Products />
      <Projects />
      <Testimonials />
      <ContactFooterWrapper />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-yellow-500 cursor-pointer text-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <IoIosArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;
