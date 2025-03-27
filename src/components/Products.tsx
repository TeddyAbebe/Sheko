// src/components/Products.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BeansAfrica from "../assets/beans_africa.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";
import CoffeeFarmersSorting from "../assets/coffee_farmers_sorting_freshly.jpg";

// Dark green background texture
const backgroundTexture = "linear-gradient(135deg, #051712 0%, #14352e 100%)";

// Descriptions for each image
const imageDescriptions: { [key: string]: string } = {
  [BeansAfrica]: "Pure Perfection",
  [GreenCoffeeBeans]: "Freshly Harvested",
  [CoffeeFarmersSorting]: "Hand-Sorted Quality",
};

const Products: React.FC = () => {
  const [heroImage, setHeroImage] = useState(BeansAfrica);
  const [stackedImages, setStackedImages] = useState([
    { src: GreenCoffeeBeans, alt: "Green beans", id: 1 },
    { src: CoffeeFarmersSorting, alt: "Sorting beans", id: 2 },
  ]);

  // Handle manual image swap on click
  const handleImageSwap = (clickedImage: string) => {
    const newStacked = stackedImages.map((img) =>
      img.src === clickedImage ? { ...img, src: heroImage } : img
    );
    setHeroImage(clickedImage);
    setStackedImages(newStacked);
  };

  // Automatic image swap every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = stackedImages[0].src;
      const newStacked = stackedImages
        .map((img, index) => (index === 0 ? { ...img, src: heroImage } : img))
        .slice(1)
        .concat([{ ...stackedImages[0], src: heroImage }]);
      setHeroImage(nextImage);
      setStackedImages(newStacked);
    }, 5000); // Swap every 5 seconds

    return () => clearInterval(interval);
  }, [heroImage, stackedImages]);

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
      width: "50%",
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  // Hero image variants with slide transition
  const heroImageVariants = {
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

  // Stacked card variants with explicit sideways slide and tilt
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 200, // Start far off to the right
      rotate: 15, // Initial tilt
    },
    visible: (i: number) => ({
      opacity: 1,
      x: i === 0 ? -80 : 80, // Final positions
      y: i === 0 ? 60 : -60, // Vertical spread
      rotate: i === 0 ? -8 : 8, // Final tilt angles
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 10,
      transition: { duration: 0.3 },
    },
    click: { scale: 0.95, transition: { duration: 0.2 } },
    swap: (i: number) => ({
      x: i === 0 ? -80 : 80, // Maintain position during swap
      y: i === 0 ? 60 : -60,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    }),
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
        background: backgroundTexture,
      }}
    >
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

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Layout with Padding */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          {/* Left Side: Text */}
          <motion.div
            className="lg:w-1/2 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-handwritten text-4xl md:text-6xl font-bold mb-6 leading-tight relative"
              variants={headingVariants}
            >
              {"Always Green & Clean".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded-full"
                variants={underlineVariants}
              />
            </motion.h2>
            <p className="text-gray-100 text-base md:text-lg max-w-md">
              Our coffee beans are sourced with an obsession for purity and
              sustainability, delivering a taste that’s as clean as nature
              intended.
            </p>
          </motion.div>

          {/* Right Side: Hero Image with Stacked Cards */}
          <div className="lg:w-1/2 relative flex justify-start items-center">
            {/* Hero Image with AnimatePresence for smooth transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                className="relative group w-full max-w-md lg:mr-12"
                key={heroImage} // Key triggers animation on swap
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={heroImageVariants}
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroImage}
                  alt="Featured product"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: "blur(12px)" }}
                />
                {/* Animated Overlay with Dynamic Text */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent rounded-3xl"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute bottom-4 left-0 text-black text-sm font-semibold bg-yellow-400 px-5 py-1 rounded-r-full shadow-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {imageDescriptions[heroImage] || "Pure Perfection"}
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Tilted Stacked Cards with Sideways Animation */}
            <motion.div
              className="absolute bottom-0 right-0 flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stackedImages.map((card, index) => (
                <motion.img
                  key={card.id}
                  src={card.src}
                  alt={card.alt}
                  className="w-36 h-36 object-cover rounded-xl shadow-lg border-2 border-white/40 cursor-pointer hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300"
                  variants={cardVariants}
                  custom={index}
                  animate="swap" // Ensure smooth position update during auto-swap
                  whileHover="hover"
                  whileTap="click"
                  onClick={() => handleImageSwap(card.src)}
                />
              ))}
            </motion.div>
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

export default Products;
