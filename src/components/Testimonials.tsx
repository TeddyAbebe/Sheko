import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  // Stats data updated with string values
  const stats = [
    { value: "12,000+", label: "Tons of Coffee Produced Annually" },
    { value: "6,432", label: "Farmers in Our Cooperative" },
    { value: "95,000", label: "Hectares in Sheko Region" },
    { value: "3,000", label: "Hectares of Amora Gedel Forest" },
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

  // Firefly (glowing particle) effect with enhanced glow
  const fireflyVariants = {
    animate: {
      x: [0, 15, -15, 0],
      y: [0, -20, 20, 0],
      opacity: [0, 1, 0],
      scale: [0.8, 1.5, 0.8],
      boxShadow: [
        "0 0 8px rgba(255, 215, 0, 0.8)",
        "0 0 12px rgba(255, 215, 0, 1)",
        "0 0 8px rgba(255, 215, 0, 0.8)",
      ],
      transition: {
        duration: Math.random() * 4 + 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Coffee aroma mist effect rising from beans
  const mistVariants = {
    animate: {
      y: [0, -40, -60],
      opacity: [0.3, 0.5, 0],
      scale: [1, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  // Newton's Cradle swinging motion for coffee beans
  const swingVariants = (index: number, total: number) => {
    const amplitude = index === 0 || index === total - 1 ? 15 : 5; // Larger swing for outer beans
    const delay = index * 0.2; // Stagger the swing for a cradle effect
    return {
      animate: {
        rotate: [-amplitude, amplitude, -amplitude],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      },
    };
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
      scale: 1.15,
      borderRadius: "20%", // Ensures circular shape on hover
      boxShadow: "0 0 25px rgba(255, 215, 0, 0.9)",
      transition: { duration: 0.3 },
    },
  };

  // Golden spark circle border animation with trailing effect
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
            {"Our Impact in Sheko".split("").map((char, index) => (
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

        {/* Stats as Glowing Coffee Beans on Vines with Newton's Cradle Motion */}
        <div className="relative grid grid-cols-2 sm:grid-cols-4 justify-center items-start gap-y-8 sm:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              style={{
                width: "200px", // Increased width for consistent spacing with wider beans
              }}
            >
              {/* Vine */}
              <motion.div
                className="w-1 bg-green-700 rounded-full"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={vineVariants}
              />

              {/* Coffee Bean Stat with Swinging Motion */}
              <motion.div
                className="relative w-40 h-40 sm:w-48 sm:h-44 flex flex-col justify-center items-center text-center origin-top"
                initial="hidden"
                animate={isVisible ? ["visible", "animate"] : "hidden"}
                variants={{
                  ...coffeeBeanVariants,
                  ...swingVariants(index, stats.length),
                }}
                custom={index}
                whileHover="hover"
              >
                {/* Golden Spark Circle Border with Trailing Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)",
                    boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                    clipPath: "ellipse(50% 40% at 50% 50%)", // Adjusted for wider coffee bean shape
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
                        }deg) translate(70px)`, // Adjusted translate distance for wider bean
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
                                delay: (i / 12) * 2,
                                repeat: 0,
                              },
                            }
                          : {}
                      }
                    >
                      {/* Trailing Effect */}
                      <motion.div
                        className="absolute w-4 h-1 bg-yellow-300/50 rounded-full"
                        style={{
                          transform: "rotate(90deg)",
                          left: "-2px",
                          top: "1px",
                        }}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={
                          isVisible
                            ? {
                                opacity: [0, 0.5, 0],
                                scaleX: [0, 1, 0],
                                transition: {
                                  duration: 2,
                                  ease: "easeOut",
                                  delay: (i / 12) * 2 + 0.1,
                                  repeat: 0,
                                },
                              }
                            : {}
                        }
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Glowing Aura Around Coffee Bean */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)",
                    clipPath: "ellipse(50% 40% at 50% 50%)", // Adjusted for wider coffee bean shape
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                  }}
                />

                {/* Coffee Bean Background */}
                <div
                  className="absolute inset-0 rounded-full bg-brown-800/90 backdrop-blur-md"
                  style={{
                    borderRadius: "50%",
                  }}
                />

                {/* Coffee Aroma Mist */}
                <motion.div
                  className="absolute -top-8 w-3 h-3 bg-yellow-300/20 rounded-full"
                  variants={mistVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute -top-8 left-4 w-3 h-3 bg-yellow-300/20 rounded-full"
                  variants={mistVariants}
                  animate="animate"
                  style={{ transitionDelay: "0.2s" }}
                />

                {/* Stat Number */}
                <motion.h3
                  className="relative text-xl sm:text-2xl font-bold text-yellow-300 z-10"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // 3D effect
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 1 }}
                >
                  {stat.value} {/* Removed toLocaleString() */}
                </motion.h3>
                {/* Stat Label */}
                <motion.p
                  className="relative text-white text-[10px] sm:text-xs mt-1 px-4 z-10"
                  style={{
                    lineHeight: "1.2",
                  }}
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
