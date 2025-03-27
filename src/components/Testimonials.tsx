// src/components/Testimonials.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  // Stats data with coffee-related content
  const stats = [
    { value: 250, label: "Coffee Farms Partnered" },
    { value: 1200, label: "Tons of Beans Roasted" },
    { value: 5000, label: "Cups Brewed Daily" },
    { value: 45, label: "Countries Served" },
  ];

  // State to trigger animations when section is in view
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations when section is in view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Animation variants for heading with letter-by-letter effect
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Coffee aroma wave animation
  const aromaWaveVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "40%",
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Vine growth animation
  const vineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 80,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Firefly (glowing particle) effect
  const fireflyVariants = {
    animate: {
      x: [0, 10, -10, 0],
      y: [0, -15, 15, 0],
      opacity: [0, 1, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Coffee bean stat animation and hover effect
  const coffeeBeanVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.3 + 1, // Delay after vine growth
      },
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(255, 215, 0, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  // Golden spark circle border animation
  const sparkCircleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 1, // Start after vine growth
      },
    },
  };

  return (
    <section
      id="testimonials-section"
      className="py-16 relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #051712 0%, #14352e 100%)", // Dark green background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Forest Foliage Texture Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/leaf.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Firefly Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px rgba(255, 215, 0, 0.8)",
            }}
            variants={fireflyVariants}
            animate="animate"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Heading with Coffee Aroma Wave */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-handwritten text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-yellow-300 relative inline-block"
            variants={headingVariants}
          >
            {"Coffee Lovers Speak".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-yellow-300 rounded-full"
              variants={aromaWaveVariants}
              style={{
                background: "linear-gradient(to right, #FFD700, #DAA520)", // Coffee aroma gradient
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
              }}
            />
          </motion.h2>
        </motion.div>

        {/* Stats as Glowing Coffee Beans on Vines */}
        <div className="relative flex flex-wrap justify-center items-start gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              style={{
                width: "150px", // Fixed width for consistent spacing
              }}
            >
              {/* Vine */}
              <motion.div
                className="w-1 bg-green-700 rounded-full"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={vineVariants}
              />

              {/* Coffee Bean Stat */}
              <motion.div
                className="relative w-32 h-40 sm:w-36 rounded-full sm:h-44 flex flex-col justify-center items-center text-center"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={coffeeBeanVariants}
                custom={index}
                whileHover="hover"
              >
                {/* Golden Spark Circle Border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)",
                    boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                    clipPath: "ellipse(50% 50% at 50% 50%)", // Coffee bean shape
                  }}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={sparkCircleVariants}
                >
                  {/* Spark Particles for Border */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${
                          (i / 12) * 360
                        }deg) translate(60px)`,
                        boxShadow: "0 0 8px rgba(255, 215, 0, 0.8)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isVisible
                          ? {
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              transition: {
                                duration: 2,
                                ease: "easeOut",
                                delay: (i / 12) * 2, // Staggered to form the circle
                                repeat: 0,
                              },
                            }
                          : {}
                      }
                    />
                  ))}
                </motion.div>

                {/* Coffee Bean Background */}
                <div
                  className="absolute inset-0 rounded-full bg-brown-800/80 backdrop-blur-md"
                  style={{
                    clipPath: "ellipse(50% 50% at 50% 50%)", // Coffee bean shape
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)", // Inner shadow for depth
                  }}
                />

                {/* Stat Number */}
                <motion.h3
                  className="relative text-2xl sm:text-3xl font-bold text-yellow-300 z-10"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // 3D effect
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 1 }}
                >
                  {stat.value.toLocaleString()}
                </motion.h3>

                {/* Stat Label */}
                <motion.p
                  className="relative text-white text-xs sm:text-sm mt-1 px-2 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 1.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            </div>
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

export default Testimonials;
