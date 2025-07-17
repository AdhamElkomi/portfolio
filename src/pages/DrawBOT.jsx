import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const DrawBOT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Project Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center drop-shadow-lg">
          🎨 DrawROB – Omnidirectional Drawing Robot
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-center text-neutral-300 max-w-3xl mx-auto">
          A creative robotics project simulating a drawing robot in Webots that can operate in both manual and automatic modes.
        </motion.p>

        {/* Interactive Showcase */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-center">🎮 Interactive Modes</h2>
            <img src={BASE+"/assets/logos/webots.png"} alt="Webots Logo" className="h-12 w-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 rounded-xl p-6 shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
              <img src={BASE+"/assets/projects/webotsauto.png"} alt="Automatic Mode" className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Automatic Mode</h3>
              <p className="text-neutral-300">The user selects the shape (square, triangle, or circle), and the robot executes the drawing based on predefined motion commands.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300">
              <img src={BASE+"/assets/projects/webotsmanu.png"} alt="Manual Mode" className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Manual Mode</h3>
              <p className="text-neutral-300">The user controls the robot in real-time. The robot only draws if the full shape can be safely completed without hitting any walls or obstacles.</p>
            </div>
          </div>
        </motion.section>

        {/* Technical Description */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-4xl font-bold text-center mb-12">🔧 Behind the Drawing</h2>
          <div className="text-neutral-300 text-lg space-y-6 max-w-4xl mx-auto">
            <p>Each side of the robot is equipped with ultrasonic sensors to detect distances from nearby walls or obstacles.</p>
            <p>A safety threshold prevents the robot from drawing if space is insufficient. When safe, motor control logic enables smooth and accurate motion.</p>
            <p>We used <strong>omnidirectional wheels</strong>, each driven by an independent motor. With encoders, we accurately regulated speed and ensured precision in shape drawing.</p>
          </div>
        </motion.section>

        {/* LinkedIn Demo Link */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-4xl font-bold text-center mb-12">📺 Full Demo on LinkedIn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white/5 rounded-xl p-8 shadow-lg border border-white/10">
            <div className="text-center md:text-left">
              <p className="text-lg text-neutral-300 mb-4">Curious to see DrawROB in action?</p>
              <p className="text-lg text-white font-semibold mb-6">Watch the complete demo directly on LinkedIn and discover how we brought our idea to life!</p>
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7289204235009732608/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg transition">
                <img src={BASE+"/assets/logos/linkedin.png"} alt="LinkedIn" className="w-6 h-6" />
                <span className="text-white font-semibold">View Full Demo on LinkedIn</span>
              </a>
            </div>
            <div className="flex justify-center">
              <img src={BASE+"/assets/projects/drawbotcercle.jpg"} alt="Demo Teaser" className="rounded-xl w-full max-w-sm shadow-xl" />
            </div>
          </div>
        </motion.section>

        {/* Back Button */}
        <div className="text-center mt-20">
          <Link
            to="//#Projects"
            className="inline-block px-6 py-2 text-sm font-semibold text-white transition border border-white rounded hover:bg-white hover:text-midnight">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrawBOT;
