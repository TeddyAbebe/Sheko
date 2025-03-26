// src/components/FAQ.tsx
import React from "react";
import BiyaFaris from "../assets/BiyaFaris.jpg";

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green mb-4">
            Most Frequently Asked About The Farm
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-md">
              <summary className="font-semibold">What is organic farming?</summary>
              <p className="text-gray-600 mt-2">
                Organic farming is a method of crop and livestock production that
                involves much more than choosing not to use pesticides, fertilizers,
                genetically modified organisms, antibiotics, and growth hormones.
              </p>
            </details>
            <details className="bg-gray-100 p-4 rounded-md">
              <summary className="font-semibold">How do you ensure quality?</summary>
              <p className="text-gray-600 mt-2">
                We follow strict quality control measures at every step of the
                process, from planting to harvesting and delivery.
              </p>
            </details>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <img
            src={BiyaFaris}
            alt="FAQ"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
