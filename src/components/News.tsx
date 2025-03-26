import React from "react";
import CoffeeFarmerEastAfrica from "../assets/coffee-farmer-east-africa.jpeg";
import EthiopianCoffeeForest from "../assets/Ethiopian-Coffee-Forest.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol.jpg";

const News: React.FC = () => {
  return (
    <section className="py-16 bg-green text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest News & Articles
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News 1 */}
          <div className="bg-white text-black rounded-md overflow-hidden">
            <img
              src={CoffeeFarmerEastAfrica}
              alt="News 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Sustainable Farming</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* News 2 */}
          <div className="bg-white text-black rounded-md overflow-hidden">
            <img
              src={EthiopianCoffeeForest}
              alt="News 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Crop Innovation</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* News 3 */}
          <div className="bg-white text-black rounded-md overflow-hidden">
            <img
              src={GreenCoffeeBeans}
              alt="News 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Farm Technology</h3>
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

export default News;
