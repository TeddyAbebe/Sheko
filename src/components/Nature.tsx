// src/components/Nature.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Coffee1 from "../assets/Coffee1.jpg";
import Coffee2 from "../assets/Coffee2.jpg";
import Coffee3 from "../assets/Coffee3.jpg";
import Coffee5 from "../assets/Coffee5.jpg";
import Coffee6 from "../assets/Coffee6.jpg";
import BackgroundImage from "../assets/coffee-farmer-east-africa.jpeg";

const Nature: React.FC = () => {
  const images = [Coffee1, Coffee2, Coffee3, Coffee5, Coffee6];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const imageVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Image Slideshow */}
        <div className="md:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={images[currentSlide]}
              alt={`Nature slide ${currentSlide + 1}`}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-yellow-500" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-handwritten text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            variants={headingVariants}
          >
            We Grow With The Wonderful Law Of Nature
          </motion.h2>
          <motion.p
            className="text-gray-200 text-base md:text-lg mb-6 max-w-md"
            variants={contentVariants}
          >
            Discover how we nurture our coffee in harmony with nature, blending
            tradition and sustainability to bring you the finest beans from the
            earth to your cup.
          </motion.p>

          <motion.div variants={contentVariants}>
            <button className="flex items-center cursor-pointer bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg">
              Learn More
              <span className="ml-2 bg-white rounded-full p-2">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nature;
