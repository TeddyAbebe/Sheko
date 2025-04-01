import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoffeeFarmerEastAfrica from "../assets/farmers_harvesting_in_forest.jpg";
import FarmersInForest from "../assets/coffee-farmer-east-africa.jpeg";
import FarmLandScape from "../assets/FarmLandScape.jpg";
import CoffeeBeanIcon from "../assets/CoffeeBean.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const statsData = [
  {
    image: FarmersInForest,
    value: "12,000+",
    label: "Tons of Coffee Produced Annually",
    alt: "Farmers harvesting in coffee forest",
    heading: "Production Potential",
    description:
      "The Sheko region has a production potential of 12,000 tonnes of coffee per year, showcasing the scale of our operations.",
  },
  {
    image: CoffeeFarmerEastAfrica,
    value: "6,432+",
    label: "Farmers Empowered",
    alt: "Coffee farmer in East Africa",
    heading: "Community Empowerment",
    description:
      "Our cooperative union, founded by 19 primary cooperatives and 6,432 farmers, supports sustainable coffee farming.",
  },
  {
    image: FarmLandScape,
    value: "95,000+",
    label: "Hectares of Land",
    alt: "Green coffee beans",
    heading: "Sheko Region",
    description:
      "Spanning 95,000 hectares, the Sheko region is ideal for growing Coffee Arabica, with half covered by dense forests.",
  },
];

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  // Variants for the additional content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-handwritten text-3xl md:text-4xl font-bold text-center text-green mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          WHO ARE WE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={stat.image}
                alt={stat.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent text-white transition-all duration-500 group-hover:bg-black/50 group-hover:h-full flex flex-col justify-end p-4">
                <motion.div className="transition-all duration-500 group-hover:-translate-y-12">
                  <p className="text-sm text-yellow-400 font-semibold">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <div className="w-10 h-1 bg-yellow-400 mt-1"></div>
                </motion.div>

                <motion.div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col mt-4">
                  <h4 className="text-xl font-semibold mb-2">{stat.heading}</h4>
                  <p className="text-sm text-gray-200 mb-4">
                    {stat.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="p-2 bg-yellow-100/20 rounded-full flex items-center justify-center">
                      <img
                        src={CoffeeBeanIcon}
                        alt="Coffee Bean"
                        className="w-10 h-10 text-white"
                      />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg mx-auto cursor-pointer"
          >
            {showMore ? "Show Less" : "Read More"}
            <span className="ml-2 bg-white rounded-full p-2">
              {showMore ? (
                <IoIosArrowUp className="w-4 h-4 text-black group-hover:animate-bounce" />
              ) : (
                <IoIosArrowDown className="w-4 h-4 text-black group-hover:animate-bounce" />
              )}
            </span>
          </button>

          {/* Additional Content */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
                className="mt-8 max-w-2xl mx-auto text-center"
              >
                <h3 className="font-handwritten text-2xl md:text-3xl font-bold text-green mb-4">
                  HOW WAS OUR COMPANY FOUNDED
                </h3>
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
                  <p className="text-gray-800 text-base leading-relaxed text-justify">
                    Prior to 2021, a farmers' cooperative called Bench Chaka
                    Coffee Farmers Cooperative Union existed in the Bench-Sheko
                    zone. Through this company, farmers could sell their product
                    on the world market. Among the coffee cooperative suppliers,
                    85% of production comes from the Sheko region. However, in
                    2001, due to a management problem, the company was unable to
                    progress. It eventually went bankrupt without paying the
                    farmers money. Following this incident, the farmers and
                    cooperatives in Sheko wereda (district) left the company the
                    same year. The loss of the farmers, who account for 85% of
                    coffee production in the Bench-Sheko area, was a major blow
                    to the company. This incident paved the way for the creation
                    of a new farmers' association in Sheko wereda
                    (region/district). A year later, 19 primary cooperatives and
                    6,443 farmers founded the new farmers' union: Yesheko Amora
                    Gedel Coffee Farmers Cooperative Union.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
