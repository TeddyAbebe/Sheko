// src/components/Projects.tsx
import React from "react";
import Panos from "../assets/Panos.jpg";
import Portonovo from "../assets/portonovo-benin.jpg";
import PeopleDizi from "../assets/people-dizi-their-dwelling-kasi.jpg";

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-green text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Projects List
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white text-black rounded-md overflow-hidden">
            <img
              src={Panos}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Organic Farming</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white text-black rounded-md overflow-hidden">
            <img
              src={Portonovo}
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Crop Rotation</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white text-black rounded-md overflow-hidden">
            <img
              src={PeopleDizi}
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Sustainable Practices</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
