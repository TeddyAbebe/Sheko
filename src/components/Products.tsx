// src/components/Products.tsx
import React from "react";
import BeansAfrica from "../assets/beans_africa.jpg";

const Products: React.FC = () => {
  return (
    <section className="py-16 bg-brown text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            We Only Bring Always Green & Clean Products
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-yellow text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400">
            Explore Products
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <img
            src={BeansAfrica}
            alt="Products"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
