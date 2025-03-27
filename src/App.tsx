// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Nature from "./components/Nature";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import ContactFooterWrapper from "./components/ContactFooterWrapper";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Nature />
      <Products />
      <Projects />
      <Testimonials />
      {/* <FAQ /> */}
      {/* <Contact />
      <Footer /> */}
      <ContactFooterWrapper />
    </div>
  );
};

export default App;
