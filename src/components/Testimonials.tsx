// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-green mb-8">
          What Clients Say?
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow">1,380</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow">1,036</h3>
            <p className="text-gray-600">Projects Done</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow">63</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow">4,557</h3>
            <p className="text-gray-600">Cups of Coffee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
