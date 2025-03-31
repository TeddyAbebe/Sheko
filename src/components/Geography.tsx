import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Forest1 from "../assets/Ethiopian-Coffee-Forest.jpg";
import Forest3 from "../assets/the-tropical-rain-forest.jpg";
import BackgroundImage from "../assets/the-tropical-rain-forest.jpg";

const Geography: React.FC = () => {
  const images = [Forest1, Forest3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);
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
      id="nature"
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Image Slideshow */}
        <div className="md:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={images[currentSlide]}
              alt={`Geography slide ${currentSlide + 1}`}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

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
            SOUTHWEST ETHIOPIA
          </motion.h2>
          <motion.p
            className="text-gray-200 text-base md:text-lg mb-6 max-w-md"
            variants={contentVariants}
          >
            One of the main breathtaking natural beauties of southwest Ethiopia
            is found in the Bench Sheko region, covered in dense, verdant
            primary forests. It hosts two protected sites: Kontir Birhan (10,000
            hectares) and Amora Gedel (3,000 hectares).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="text-gray-200 text-base md:text-lg mb-6 max-w-md"
          >
            <p>
              Ethiopia lies between the equator and the Tropic of Cancer,
              between 3°N and 15°N latitude or 33°E and 48°E longitude. The
              southern and southwestern regions are characterized by an
              equatorial rainforest climate with high rainfall, humidity, and
              temperatures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Geography;
