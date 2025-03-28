import React from "react";
import { motion } from "framer-motion";
import CoffeeFarmersSorting from "../assets/coffee_farmers_sorting_freshly.jpg";
import CoffeeFarmerEastAfrica from "../assets/coffee-farmer-east-africa.jpeg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";

const statsData = [
  {
    image: CoffeeFarmersSorting,
    value: "29,225+",
    label: "Tons of Coffee Produced Annually",
    alt: "Coffee farmers sorting beans",
    heading: "Production Potential",
    description:
      "The Sheko region has a production potential of 29,225 tonnes of coffee per year, showcasing the scale of our operations.",
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
    image: GreenCoffeeBeans,
    value: "95,000+",
    label: "Hectares of Land",
    alt: "Green coffee beans",
    heading: "Sheko Region",
    description:
      "Spanning 95,000 hectares, the Sheko region is ideal for growing Coffee Arabica, with half covered by dense forests.",
  },
];

const About: React.FC = () => {
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
          Sheko Amora Gedel Coffee Union
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

                <motion.div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col mt-4">
                  <h4 className="text-xl font-semibold mb-2">{stat.heading}</h4>
                  <p className="text-sm text-gray-200 mb-4">
                    {stat.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white font-extrabold"
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
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
