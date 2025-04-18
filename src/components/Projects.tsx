import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "../assets/GreenCoffee.jpg";
import Coffee4 from "../assets/Coffee4.jpg";
import CoffeeDrying from "../assets/Image1.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";
import FarmerSupport from "../assets/beans_africa.jpg";
import Packaging from "../assets/Packaging.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      src: Coffee4,
      alt: "Harvesting season",
      title: "HARVESTING SEASON",
      description:
        "Farmers harvest only ripe fruit during the picking season, marking the first stage of quality measurement.",
    },
    {
      src: GreenCoffeeBeans,
      alt: "Quality sorting",
      title: "QUALITY SORTING",
      description:
        "Quality inspectors sort harvested cherries, separating ripe, healthy ones from immature or unhealthy ones.",
    },
    {
      src: CoffeeDrying,
      alt: "Sun-drying process",
      title: "SUN-DRYING",
      description:
        "Cherries are sun-dried on 1m-high beds until moisture content reaches 10-12%, ensuring quality.",
    },
    {
      src: Packaging,
      alt: "Packaging & storage",
      title: "PACKAGING & STORAGE",
      description:
        "Coffee is packaged and stored under strict quality standards, monitored by professional inspectors.",
    },
    {
      src: FarmerSupport,
      alt: "Farmer support",
      title: "FARMER SUPPORT",
      description:
        "We provide farmers with drying beds, gloves, masks, and training to maintain quality standards.",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "30%",
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 200, rotate: 10 },
    visible: (i: number) => ({
      opacity: 1,
      x: (i - Math.floor(projects.length / 2)) * 50,
      y: (i % 2 === 0 ? -1 : 1) * 20,
      rotate: [-10, 8, -12, 10, -8][i] || 0,
      transition: { duration: 0.8, ease: "easeOut", delay: i * 0.15 },
    }),
    hover: {
      scale: 1.05,
      rotate: 0,
      zIndex: 10,
      transition: { duration: 0.3 },
    },
  };

  const mobileCardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
      id="projects"
      className="py-16 relative overflow-hidden text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>

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
            {"Processing Type".split("").map((char, index) => (
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

        <div className="relative flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] px-4 py-6">
          {/* Mobile View */}
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
                  <motion.div
                    className="absolute inset-0 rounded-t-xl shadow-[0_0_20px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(10px)" }}
                  />
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
          </div>

          {/* Desktop View */}
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
                  <motion.div
                    className="absolute inset-0 rounded-t-xl shadow-[0_0_20px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(10px)" }}
                  />
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
