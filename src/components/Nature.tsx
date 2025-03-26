// src/components/Nature.tsx
import React from "react";
import CoffeeBlossoms from "../assets/Coffee-Blossoms-in-Coorg.jpg";

const Nature: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={CoffeeBlossoms}
            alt="Nature"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-green mb-4">
            We Grow With The Wonderful Law Of Nature
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-yellow text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nature;
