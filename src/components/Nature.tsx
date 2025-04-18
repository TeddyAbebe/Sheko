import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nature1 from "../assets/Ethiopian-Coffee-Forest.jpg";
import Nature2 from "../assets/FarmLandScape.jpg";
import Nature3 from "../assets/Panos.jpg";
import BackgroundImage from "../assets/coffee-farmer-east-africa.jpeg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Nature: React.FC = () => {
  const images = [Nature1, Nature2, Nature3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);

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

  const additionalContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const toggleLearnMore = () => {
    setShowMore(!showMore);
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
              alt={`Nature slide ${currentSlide + 1}`}
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
            THE AMORA GEDEL FOREST SITE
          </motion.h2>
          <motion.p
            className="text-gray-200 text-base md:text-lg mb-6 max-w-md"
            variants={contentVariants}
          >
            The Amora Gedel forest in the Bench-Sheko area, spanning 3,000
            hectares, is the cradle of coffee, home to wild Arabica coffee
            species. The Sheko region’s 95,000 hectares, half covered by dense
            forests, provide the perfect environment for growing coffee.
          </motion.p>

          {/* Additional Content Section with AnimatePresence */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                key="additional-content"
                variants={additionalContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-gray-200 text-base md:text-lg mb-6 max-w-md"
              >
                <p>
                  The true birthplace of coffee in Ethiopia remained an enigma
                  until research by the University of Hudersfield confirmed that
                  the Amora Gedel forest is the cradle of coffee. It’s home to
                  wild Arabica coffee species of varying genetic composition.
                  Being largely inaccessible, only those with regional
                  administration permission can harvest here during the coffee
                  season.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={contentVariants}>
            <button
              onClick={toggleLearnMore}
              className="flex items-center cursor-pointer group bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {showMore ? "Show Less" : "Learn More"}
              <span className="ml-2 bg-white rounded-full p-2">
                {showMore ? (
                  <IoIosArrowUp className="w-4 h-4 text-black group-hover:animate-bounce" />
                ) : (
                  <IoIosArrowDown className="w-4 h-4 text-black group-hover:animate-bounce" />
                )}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nature;
