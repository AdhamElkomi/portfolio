import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

import JackalProject from "./pages/JackalProject";
import AwakeProject from "./pages/AwakeProject";
import DrawBOT from "./pages/DrawBOT";
import BoidsProject from "./pages/BoidsProject";
import LidarProject from "./pages/lidar-project";

// Scroll handler for #anchors
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        // Delay to ensure layout is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

const Home = () => (
  <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Testimonial />
    <Contact />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router basename="/portfolio">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/JackalProject" element={<JackalProject />} />
        <Route path="/projects/AwakeProject" element={<AwakeProject />} />
        <Route path="/projects/lidar-project" element={<LidarProject />} />
        <Route path="/projects/DrawBOT" element={<DrawBOT />} />
        <Route path="/projects/BoidsProject" element={<BoidsProject />} />
      </Routes>
    </Router>
  );
};

export default App;
