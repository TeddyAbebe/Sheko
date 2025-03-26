#!/bin/bash

# Header.tsx
cat > src/components/Header.tsx << 'EOL'
// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green">PureFarm</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green">Home</a>
          <a href="#" className="text-gray-700 hover:text-green">About</a>
          <a href="#" className="text-gray-700 hover:text-green">Services</a>
          <a href="#" className="text-gray-700 hover:text-green">Products</a>
          <a href="#" className="text-gray-700 hover:text-green">Contact</a>
        </nav>

        {/* Contact Button */}
        <button className="bg-green text-white px-4 py-2 rounded-md hover:bg-green-700">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
EOL

# Hero.tsx
cat > src/components/Hero.tsx << 'EOL'
// src/components/Hero.tsx
import React from "react";
import EthiopianCoffeeForest from "../assets/Ethiopian-Coffee-Forest.jpg";

const Hero: React.FC = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${EthiopianCoffeeForest})`,
      }}
    >
      <div className="text-center text-white">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Every Crop Counts, <br /> Every Farmer Matters
        </h1>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-yellow text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
EOL

# Stats.tsx
cat > src/components/Stats.tsx << 'EOL'
// src/components/Stats.tsx
import React from "react";
import CoffeeFarmersSorting from "../assets/coffee_farmers_sorting_freshly_harvested_arabica_coffee_beans_cooperative.jpg";
import CoffeeFarmerEastAfrica from "../assets/coffee-farmer-east-africa.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol_ace2cb84_17bf_43b8_a8aa_0e9403d2db03_1024x1024.jpg";

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-green mb-8">
          Providing The Greatest Products To The Best Suppliers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <img
              src={CoffeeFarmersSorting}
              alt="Stat 1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-4xl font-bold text-yellow">72,980+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <img
              src={CoffeeFarmerEastAfrica}
              alt="Stat 2"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-4xl font-bold text-yellow">15,000+</h3>
            <p className="text-gray-600">Farms Supported</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <img
              src={GreenCoffeeBeans}
              alt="Stat 3"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-4xl font-bold text-yellow">1,200+</h3>
            <p className="text-gray-600">Products Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
EOL

# Services.tsx
cat > src/components/Services.tsx << 'EOL'
// src/components/Services.tsx
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-green text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          We’re Providing The Best Agriculture Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="text-center">
            <img
              src="path-to-icon1.png"
              alt="Service 1"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Organic Farming</h3>
            <p className="text-gray-200">
              Sustainable and eco-friendly farming practices.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center">
            <img
              src="path-to-icon2.png"
              alt="Service 2"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Crop Management</h3>
            <p className="text-gray-200">
              Advanced techniques for better yields.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center">
            <img
              src="path-to-icon3.png"
              alt="Service 3"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Livestock Care</h3>
            <p className="text-gray-200">
              Ensuring the health of your animals.
            </p>
          </div>

          {/* Service 4 */}
          <div className="text-center">
            <img
              src="path-to-icon4.png"
              alt="Service 4"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Farm Consultancy</h3>
            <p className="text-gray-200">
              Expert advice for farm growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
EOL

# Nature.tsx
cat > src/components/Nature.tsx << 'EOL'
// src/components/Nature.tsx
import React from "react";
import CoffeeBlossoms from "../assets/Coffee-Blossoms-in-Coorg-lg-cover(0).jpg";

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
EOL

# Products.tsx
cat > src/components/Products.tsx << 'EOL'
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
EOL

# Projects.tsx
cat > src/components/Projects.tsx << 'EOL'
// src/components/Projects.tsx
import React from "react";
import Panos from "../assets/panos_00252599-1_1024x536.jpg";
import Portonovo from "../assets/portonovo-benin-mar-10-2012-600nw-186226649-1.jpg";
import PeopleDizi from "../assets/people-dizi-their-dwelling-kasi-260nw-110518974.jpg";

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
EOL

# Testimonials.tsx
cat > src/components/Testimonials.tsx << 'EOL'
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
EOL

# FAQ.tsx
cat > src/components/FAQ.tsx << 'EOL'
// src/components/FAQ.tsx
import React from "react";
import BiyaFaris from "../assets/Biya Faris (21).JPG";

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
EOL

# News.tsx
cat > src/components/News.tsx << 'EOL'
// src/components/News.tsx
import React from "react";
import CoffeeFarmerEastAfrica from "../assets/coffee-farmer-east-africa.jpg";
import EthiopianCoffeeForest from "../assets/Ethiopian-Coffee-Forest.jpg";
import GreenCoffeeBeans from "../assets/Green_Coffee_Beans_Svetol_ace2cb84_17bf_43b8_a8aa_0e9403d2db03_1024x1024.jpg";

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
EOL

# Contact.tsx
cat > src/components/Contact.tsx << 'EOL'
// src/components/Contact.tsx
import React from "react";
import Bench from "../assets/Bench.jpg";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={Bench}
            alt="Contact"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-green mb-4">
            Contact Us Today
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md h-32"
            ></textarea>
            <button className="bg-green text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
EOL

# Footer.tsx
cat > src/components/Footer.tsx << 'EOL'
// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-yellow">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-200">123 Farm Road, Green Valley</p>
            <p className="text-gray-200">Email: info@purefarm.com</p>
            <p className="text-gray-200">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-yellow">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>© 2025 PureFarm. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
EOL

echo "All component files have been created and populated with image imports!"