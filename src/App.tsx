// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Nature from "./components/Nature";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Nature />
      <Products />
      <Projects />
      <Testimonials />
      <FAQ />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
