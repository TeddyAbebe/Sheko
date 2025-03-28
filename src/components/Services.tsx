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
    title: "Sheko Region Sourcing",
    description:
      "Sourcing coffee exclusively from the Sheko region, spanning 95,000 hectares, where coffee originated.",
    alt: "Coffee bean sourcing",
  },
  {
    image: Image2,
    title: "Quality Inspection",
    description:
      "Professional quality inspectors sort ripe, healthy cherries from immature ones during harvest.",
    alt: "Quality inspection",
  },
  {
    image: Image3,
    title: "Farmer Training",
    description:
      "Providing farmers with equipment and training in quality standards to ensure compliance.",
    alt: "Farmer training",
  },
  {
    image: Image4,
    title: "Sun-Drying Process",
    description:
      "Harvested coffees are sun-dried on 1m-high beds until the moisture content reaches 10-12%.",
    alt: "Sun-drying process",
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
      id="services"
      className="py-16 relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-handwritten text-3xl md:text-4xl font-bold text-center text-white mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Coffee Services
        </motion.h2>

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
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-opacity duration-300"></div>
              </div>

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
