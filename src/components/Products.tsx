import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BeansAfrica from "../assets/beans_africa.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";
import CoffeeFarmersSorting from "../assets/coffee_farmers_sorting_freshly.jpg";

const backgroundTexture = "linear-gradient(135deg, #051712 0%, #14352e 100%)";

const imageDescriptions: { [key: string]: string } = {
  [BeansAfrica]: "Quality Inspected",
  [GreenCoffeeBeans]: "Sun-Dried Beans",
  [CoffeeFarmersSorting]: "Hand-Harvested",
};

const Products: React.FC = () => {
  const [heroImage, setHeroImage] = useState(BeansAfrica);
  const [stackedImages, setStackedImages] = useState([
    { src: GreenCoffeeBeans, alt: "Green beans", id: 1 },
    { src: CoffeeFarmersSorting, alt: "Sorting beans", id: 2 },
  ]);

  const handleImageSwap = (clickedImage: string) => {
    const newStacked = stackedImages.map((img) =>
      img.src === clickedImage ? { ...img, src: heroImage } : img
    );
    setHeroImage(clickedImage);
    setStackedImages(newStacked);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = stackedImages[0].src;
      const newStacked = stackedImages
        .map((img, index) => (index === 0 ? { ...img, src: heroImage } : img))
        .slice(1)
        .concat([{ ...stackedImages[0], src: heroImage }]);
      setHeroImage(nextImage);
      setStackedImages(newStacked);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImage, stackedImages]);

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

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "50%",
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const heroImageVariants = {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 200,
      rotate: 15,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: i === 0 ? -80 : 80,
      y: i === 0 ? 60 : -60,
      rotate: i === 0 ? -8 : 8,
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
      x: i === 0 ? -80 : 80,
      y: i === 0 ? 60 : -60,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    }),
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
      id="products"
      className="py-16 relative overflow-hidden text-white"
      style={{
        background: backgroundTexture,
      }}
    >
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
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
              {"Certified Organic Quality".split("").map((char, index) => (
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
              We ensure that the coffee we supply complies with quality
              measurement standards, controlled by a team of professional
              quality inspectors from harvest to storage. Our products are
              certified organic.
            </p>
          </motion.div>

          <div className="lg:w-1/2 relative flex justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.div
                className="relative group w-full max-w-md lg:mr-12"
                key={heroImage}
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
                <motion.div
                  className="absolute inset-0 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: "blur(12px)" }}
                />
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
                    {imageDescriptions[heroImage] || "Quality Inspected"}
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

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
                  animate="swap"
                  whileHover="hover"
                  whileTap="click"
                  onClick={() => handleImageSwap(card.src)}
                />
              ))}
            </motion.div>
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

export default Products;
