import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/GreenCoffee.jpg";

import Panos from "../assets/Panos.jpg";
import Portonovo from "../assets/portonovo-benin.jpg";
import PeopleDizi from "../assets/people-dizi-their-dwelling-kasi.jpg";
import BeansAfrica from "../assets/beans_africa.jpg";
import Coffee1 from "../assets/Coffee1.jpg";
import Coffee2 from "../assets/Coffee2.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";
import EthiopianCoffeeForest from "../assets/Ethiopian-Coffee-Forest.jpg";
import TropicalRainforest from "../assets/the-tropical-rain-forest.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      src: Panos,
      alt: "Organic Farming",
      title: "Organic Farming",
      description:
        "Cultivating coffee with nature’s finest methods, free from chemicals.",
    },
    {
      src: Portonovo,
      alt: "Crop Rotation",
      title: "Crop Rotation",
      description: "Enhancing soil health through sustainable crop cycles.",
    },
    {
      src: PeopleDizi,
      alt: "Sustainable Practices",
      title: "Sustainable Practices",
      description:
        "Empowering communities with eco-friendly farming techniques.",
    },
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
    {
      src: TropicalRainforest,
      alt: "Tropical Rainforest Coffee",
      title: "Tropical Rainforest Coffee",
      description:
        "Coffee grown in the rich biodiversity of tropical rainforests.",
    },
  ];

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

  // Project card variants with sideways slide and tilt
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 200, // Start far off to the right
      rotate: 10, // Initial tilt
    },
    visible: (i: number) => ({
      opacity: 1,
      x: i === 0 ? -100 : i === 1 ? 0 : 100, // Overlapping positions
      y: i === 0 ? -30 : i === 1 ? 0 : 30, // Slight vertical offset
      rotate: i === 0 ? -5 : i === 1 ? 0 : 5, // Final tilt angles
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.05,
      rotate: 0,
      zIndex: 10,
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
      <div className="absolute inset-0 backdrop-blur-xs bg-black/60"></div>

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
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-handwritten text-4xl md:text-5xl font-bold leading-tight relative inline-block"
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

        {/* Projects Floating Cards */}
        <div className="relative flex justify-center items-center h-96">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute w-72 bg-white/90 text-black rounded-xl shadow-lg overflow-hidden"
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
                  className="w-full h-48 object-cover"
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
                <h3 className="text-xl font-semibold text-green-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
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
