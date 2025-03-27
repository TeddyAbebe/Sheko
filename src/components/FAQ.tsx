// src/components/FAQ.tsx
import React from "react";
import { motion } from "framer-motion";
import BiyaFaris from "../assets/BiyaFaris.jpg";
import BackgroundImage from "../assets/coffee-farmer-east-africa.jpeg";

const FAQ: React.FC = () => {
  // Animation variants for heading with letter-by-letter effect (from Products)
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

  // Underline animation (from Projects)
  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "40%",
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  // Accordion animation (inspired by Nature's content variants)
  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Image animation (inspired by Products' hero image)
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
      {/* Blurred Overlay (from Nature) */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>

      {/* Subtle Grain Overlay (from Products) */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise-lines.png')",
        }}
      />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Heading (inspired by Products/Projects) */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-handwritten text-3xl sm:text-4xl md:text-5xl font-bold leading-tight relative inline-block"
            variants={headingVariants}
          >
            {"Frequently Asked Questions".split("").map((char, index) => (
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

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.details
              className="bg-white/90 p-6 rounded-xl shadow-lg text-black group"
              variants={accordionVariants}
              open={false}
            >
              <summary className="font-semibold text-lg text-green-900 cursor-pointer outline-none">
                What is organic farming?
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Organic farming is a method of crop and livestock production
                that involves much more than choosing not to use pesticides,
                fertilizers, genetically modified organisms, antibiotics, and
                growth hormones.
              </p>
            </motion.details>
            <motion.details
              className="bg-white/90 p-6 rounded-xl shadow-lg text-black group"
              variants={accordionVariants}
              open={false}
            >
              <summary className="font-semibold text-lg text-green-900 cursor-pointer outline-none">
                How do you ensure quality?
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We follow strict quality control measures at every step of the
                process, from planting to harvesting and delivery.
              </p>
            </motion.details>
          </motion.div>

          {/* Enhanced Image (Styled like Products' Hero Image) */}
          <motion.div
            className="md:w-1/2 relative group max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={BiyaFaris}
              alt="Farm landscape"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
            {/* Glow Effect (from Products) */}
            <motion.div
              className="absolute inset-0 rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ filter: "blur(12px)" }}
            />
            {/* Animated Overlay with Dynamic Text (from Products) */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent rounded-xl"
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
                Farm Life
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
