import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import BackgroundImage from "../assets/Ethiopian-Coffee-Forest.jpg";

const servicesData = [
  {
    image: Image1,
    title: "Coffee Bean Sourcing",
    description: "Sourcing the finest coffee beans from sustainable farms.",
    alt: "Coffee bean sourcing",
  },
  {
    image: Image2,
    title: "Roasting Expertise",
    description: "Expert roasting to bring out the best flavors in every bean.",
    alt: "Coffee roasting",
  },
  {
    image: Image3,
    title: "Farmer Support Programs",
    description: "Empowering coffee farmers with training and resources.",
    alt: "Farmer support",
  },
  {
    image: Image4,
    title: "Quality Assurance",
    description: "Rigorous testing to ensure every batch meets our standards.",
    alt: "Quality assurance",
  },
];

const Services: React.FC = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      {/* Blurred Overlay for the Container */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          className="font-handwritten text-3xl md:text-4xl font-bold text-center text-white mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Coffee Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="group relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:border-white hover:border hover:-translate-y-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
