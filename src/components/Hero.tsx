// src/components/Hero.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoArrowRedoOutline, IoArrowUndoOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../assets/the-tropical-rain-forest.jpg";
import Image2 from "../assets/coffee-farmer-east-africa.jpeg";
import Image3 from "../assets/Ethiopian-Coffee-Forest.jpg";
import Image4 from "../assets/coffee_farmers_sorting_freshly.jpg";
// Uncomment the line below if you have a video file
// import HeroVideo from "../assets/HeroVideo.mp4";

const Hero: React.FC = () => {
  const images = [Image1, Image2, Image3, Image4];

  const slideContent = [
    {
      mainTitle: (
        <>
          SOURCING FROM <br /> TROPICAL RAINFORESTS
        </>
      ),
      title: "Exploring the Tropical Rainforest",
      description:
        "Discover the lush origins of our coffee beans in the heart of tropical rainforests, where nature and tradition blend seamlessly.",
    },
    {
      mainTitle: (
        <>
          EMPOWERING EAST <br /> AFRICAN FARMERS
        </>
      ),
      title: "Empowering East African Farmers",
      description:
        "Meet the dedicated coffee farmers of East Africa who cultivate the finest beans with care and passion.",
    },
    {
      mainTitle: (
        <>
          THE ETHIOPIAN <br /> COFFEE LEGACY
        </>
      ),
      title: "The Ethiopian Coffee Legacy",
      description:
        "Experience the rich heritage of Ethiopian coffee forests, the birthplace of coffee, where every bean tells a story.",
    },
    {
      mainTitle: (
        <>
          SORTING THE <br /> FINEST BEANS
        </>
      ),
      title: "Sorting the Finest Beans",
      description:
        "Witness the meticulous process of sorting freshly harvested coffee beans to ensure only the best make it to your cup.",
    },
    {
      mainTitle: (
        <>
          FROM BEAN <br /> TO BREW
        </>
      ),
      title: "A Journey from Bean to Brew",
      description:
        "Watch the journey of our coffee from the fields to your cup, crafted with love and innovation.",
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

  const currentContent = useVideo
    ? slideContent[slideContent.length - 1]
    : slideContent[currentSlide];

  return (
    <section className="h-screen relative flex items-center justify-center">
      {useVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${images[currentSlide]})`,
          }}
        />
      )}

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative sm:ml-40 container mx-auto px-4 flex flex-col items-start justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + (useVideo ? "video" : "")}
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
          to="/products"
          className="flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Discover Our Coffee
          <span className="ml-2 bg-yellow-500 rounded-full p-2">
            <FaArrowRight className="text-black" />
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
