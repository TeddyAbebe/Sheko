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
