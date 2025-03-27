// src/components/Projects.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "../assets/GreenCoffee.jpg";
import BeansAfrica from "../assets/beans_africa.jpg";
import Coffee1 from "../assets/Coffee1.jpg";
import Coffee2 from "../assets/Coffee2.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";
import EthiopianCoffeeForest from "../assets/Ethiopian-Coffee-Forest.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      src: BeansAfrica,
      alt: "Beans from Africa",
      title: "Beans from Africa",
      description:
        "Premium African coffee beans harvested with traditional methods.",
    },
    {
      src: Coffee1,
      alt: "Fresh Coffee",
      title: "Fresh Coffee",
      description: "Hand-picked coffee beans for the best aroma and taste.",
    },
    {
      src: Coffee2,
      alt: "Coffee Drying",
      title: "Coffee Drying",
      description:
        "Sun-dried coffee beans for a richer and more authentic flavor.",
    },
    {
      src: GreenCoffeeBeans,
      alt: "Green Coffee Beans",
      title: "Green Coffee Beans",
      description:
        "Unroasted green coffee beans, packed with antioxidants and health benefits.",
    },
    {
      src: EthiopianCoffeeForest,
      alt: "Ethiopian Coffee Forest",
      title: "Ethiopian Coffee Forest",
      description:
        "Wild coffee plants growing in the lush Ethiopian highlands.",
    },
  ];

  // State for mobile card index
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Automatic sliding for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  // Animation variants for heading with letter-by-letter effect
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Underline animation
  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "30%",
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  // Project card variants with closer positioning and Polaroid-style tilts
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 200, // Start far off to the right
      rotate: 10, // Initial tilt
    },
    visible: (i: number) => {
      const totalCards = projects.length;
      const centerIndex = Math.floor(totalCards / 2);
      const maxSpread = 50; // Reduced spread for closer positioning (in pixels)
      const verticalSpread = 20; // Reduced vertical spread for closer positioning

      // Define specific tilts for each card to match the Polaroid style
      const tilts = [-10, 8, -12, 10, -8]; // Custom tilts for 5 cards

      return {
        opacity: 1,
        x: (i - centerIndex) * maxSpread, // e.g., -100, -50, 0, 50, 100 for 5 cards
        y: (i % 2 === 0 ? -1 : 1) * verticalSpread, // Alternates -20, 20
        rotate: tilts[i] || 0, // Apply specific tilt for each card
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: i * 0.15,
        },
      };
    },
    hover: {
      scale: 1.05,
      rotate: 0, // Straighten on hover
      zIndex: 10,
      transition: { duration: 0.3 },
    },
  };

  // Mobile sliding variants
  const mobileCardVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide in from right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // Slide out to left
  };

  // Dot animation variants
  const dotVariants = {
    active: {
      scale: 1.2,
      backgroundColor: "#FFD700", // Yellow for active dot
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      backgroundColor: "#FFFFFF", // White for inactive dots
      transition: { duration: 0.3 },
    },
  };

  // Coffee bean particle variants
  const coffeeBeanVariants = {
    animate: {
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: Math.random() * 2 + 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="py-16 relative overflow-hidden text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>

      {/* Floating Coffee Bean Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-2 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: "ellipse(40% 60% at 50% 50%)",
              transform: "scale(1.2)",
            }}
            variants={coffeeBeanVariants}
            animate="animate"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-handwritten text-3xl sm:text-4xl md:text-5xl font-bold leading-tight relative inline-block"
            variants={headingVariants}
          >
            {"Latest Projects".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-yellow-400 rounded-full"
              variants={underlineVariants}
            />
          </motion.h2>
        </motion.div>

        {/* Projects Container */}
        <div className="relative flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] px-4 py-6">
          {/* Mobile View: Show one card at a time with sliding and dots */}
          <div className="sm:hidden w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCardIndex}
                className="w-64 bg-white/90 text-black rounded-xl shadow-lg overflow-hidden relative"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileCardVariants}
              >
                <div className="relative group">
                  <img
                    src={projects[currentCardIndex].src}
                    alt={projects[currentCardIndex].alt}
                    className="w-full h-40 object-cover"
                  />
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-t-xl shadow-[0_0_20px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(10px)" }}
                  />
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-900">
                    {projects[currentCardIndex].title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2">
                    {projects[currentCardIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
              {projects.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 rounded-full"
                  variants={dotVariants}
                  animate={index === currentCardIndex ? "active" : "inactive"}
                />
              ))}
            </div>
          </div>

          {/* Desktop/Tablet View: Show all cards with Polaroid-style tilts */}
          <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="w-64 sm:w-72 lg:w-80 bg-white/90 text-black rounded-xl shadow-lg overflow-hidden relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="relative group">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                  />
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-t-xl shadow-[0_0_20px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(10px)" }}
                  />
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise-lines.png')",
        }}
      />
    </section>
  );
};

export default Projects;
