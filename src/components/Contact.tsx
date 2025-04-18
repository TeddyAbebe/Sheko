import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Bench from "../assets/Bench.jpg";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const SERVICE_ID = "service_u2autij";
  const TEMPLATE_ID = "template_629x239";
  const PUBLIC_KEY = "yHe3hOFM7vTvlaP-E";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            duration: 4000,
            position: "top-right",
            style: {
              background: "#4CAF50",
              color: "#fff",
              marginTop: "100px",
            },
          });
          form.current?.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.", {
            duration: 4000,
            position: "top-right",
            style: {
              background: "#F44336",
              color: "#fff",
            },
          });
          setIsLoading(false);
        }
      );
    }
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "40%",
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    focus: {
      scale: 1.02,
      borderColor: "#FFD700",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16">
      {/* Toaster with a higher z-index */}
      <Toaster
        containerStyle={{
          zIndex: 1000, // Set a very high z-index to ensure it’s above the header
        }}
      />
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 relative group max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={Bench}
              alt="Contact us"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
            <motion.div
              className="absolute inset-0 rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ filter: "blur(12px)" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent rounded-xl"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-8 mt-8 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-handwritten text-3xl sm:text-4xl md:text-5xl font-bold leading-tight relative mb-8"
              variants={headingVariants}
            >
              {"Reach Out to Sheko Coffee".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded-full"
                variants={underlineVariants}
              />
            </motion.h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="flex flex-row gap-4">
                <motion.input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-1/2 p-4 bg-white/90 text-black border-2 border-gray-200 rounded-xl shadow-md focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  variants={fieldVariants}
                  whileFocus="focus"
                  required
                />
                <motion.input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-1/2 p-4 bg-white/90 text-black border-2 border-gray-200 rounded-xl shadow-md focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  variants={fieldVariants}
                  whileFocus="focus"
                  required
                />
              </div>

              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 bg-white/90 text-black border-2 border-gray-200 rounded-xl shadow-md focus:outline-none focus:border-yellow-400 transition-all duration-300"
                variants={fieldVariants}
                whileFocus="focus"
                required
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-4 bg-white/90 text-black border-2 border-gray-200 rounded-xl shadow-md focus:outline-none focus:border-yellow-400 transition-all duration-300 h-40 resize-none"
                variants={fieldVariants}
                whileFocus="focus"
                required
              ></motion.textarea>

              <motion.button
                type="submit"
                className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? <FaSpinner className="animate-spin mr-2" /> : null}
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
