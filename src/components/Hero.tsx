import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowRedoOutline, IoArrowUndoOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../assets/the-tropical-rain-forest.jpg";
import Image2 from "../assets/coffee-farmer-east-africa.jpeg";
import Image3 from "../assets/Ethiopian-Coffee-Forest.jpg";
import Image4 from "../assets/coffee_farmers_sorting_freshly.jpg";

const Hero: React.FC = () => {
  const images = [Image1, Image2, Image3, Image4];

  const slideContent = [
    {
      mainTitle: (
        <>
          SOURCING FROM <br /> SHEKO REGION
        </>
      ),
      title: "Where Coffee Originated",
      description:
        "Our products come exclusively from the Sheko region, in the Bench-Sheko zone where coffee originated, spanning 95,000 hectares with ideal conditions for growing coffee.",
    },
    {
      mainTitle: (
        <>
          AMORA GEDEL <br /> FOREST
        </>
      ),
      title: "Cradle of Coffee",
      description:
        "The Amora Gedel forest, spanning 3,000 hectares, is unanimously considered the cradle of coffee, home to wild Arabica coffee species.",
    },
    {
      mainTitle: (
        <>
          BENCH SHEKO <br /> BEAUTY
        </>
      ),
      title: "Dense Primary Forests",
      description:
        "The Bench Sheko region in the Sheko wereda district is covered in dense, verdant primary forests, with half of its 95,000 hectares being forest land.",
    },
    {
      mainTitle: (
        <>
          COFFEE ARABICA <br /> HERITAGE
        </>
      ),
      title: "World’s Prized Crop",
      description:
        "The Sheko region’s forests are home to Coffee Arabica, the world’s most prized crop, harvested with care by our cooperative union.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [useVideo] = useState(false);

  useEffect(() => {
    if (!useVideo) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [useVideo, images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const currentContent = slideContent[currentSlide];

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentSlide]})`,
        }}
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative sm:ml-40 container mx-auto px-4 flex flex-col items-start justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-yellow-500 text-lg md:text-xl font-semibold mb-2">
              {currentContent.title}
            </h2>
            <h1 className="text-4xl md:text-6xl text-white font-handwritten mb-4 leading-tight">
              {currentContent.mainTitle}
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-6 max-w-md">
              {currentContent.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <Link
          to=""
          className="flex items-center bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Discover Our Coffee
          <span className="ml-2 bg-white rounded-full p-2">
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </Link>
      </div>

      {!useVideo && (
        <>
          <div className="absolute left-4 top-[90%] sm:top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="text-white hover:text-yellow-500 border cursor-pointer hover:bg-black/50 p-4 rounded-full"
            >
              <IoArrowUndoOutline size={30} />
            </button>
          </div>

          <div className="absolute right-4 top-[90%] sm:top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="text-white hover:text-yellow-500 border cursor-pointer hover:bg-black/50 p-4 rounded-full"
            >
              <IoArrowRedoOutline size={30} />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
