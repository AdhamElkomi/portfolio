import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BoidsProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Project Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center drop-shadow-lg">
          🪶 ASFOUR Game – Boids Simulation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-center text-neutral-300 max-w-3xl mx-auto">
          A Python-powered visual simulation exploring how birds flock together using simple but powerful rules—separation, alignment, and cohesion.
        </motion.p>

        {/* Project Concept */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-4xl font-bold text-center mb-12">🌐 Project Overview</h2>
          <p className="text-neutral-300 text-lg text-center max-w-4xl mx-auto">
            Inspired by Craig Reynolds' Boids algorithm, this project simulates collective behavior seen in nature—like birds in flight or fish in schools. Each boid follows three core rules: stay close to neighbors, align with their direction, and avoid collisions. The result? Emergent, mesmerizing flocking patterns.
          </p>
        </motion.section>

        {/* Extensions Showcase */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-4xl font-bold text-center mb-12">🧠 Advanced Features & Extensions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex justify-center">
              <div className="bg-white/5 p-6 rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300 max-w-md">
                <img src="/assets/projects/boidalign.png" alt="Alignment Vision" className="rounded-xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-center">Alignment Radius</h3>
                <p className="text-neutral-300 text-center">Boids align their direction based on a configurable radius—visualized here as one boid matches heading with its neighbors.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/5 p-6 rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300 max-w-md">
                <img src="/assets/projects/radar.png" alt="Airplane Radar" className="rounded-xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-center">Realistic Avoidance</h3>
                <p className="text-neutral-300 text-center">Boids avoid a moving aircraft. A rotating radar (like in fighter jets) dynamically detects nearby boids and influences their movement.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/5 p-6 rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300 max-w-md">
                <img src="/assets/projects/avion.png" alt="Boids Escaping Plane" className="rounded-xl mb-4 mx-auto w-[140px]" />
                <h3 className="text-2xl font-semibold mb-2 text-center">Obstacle Evasion</h3>
                <p className="text-neutral-300 text-center">Here, the plane enters the scene—and boids swiftly react, steering away with calculated acceleration based on proximity.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/5 p-6 rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300 max-w-md">
                <img src="/assets/projects/recharging.png" alt="Energy Bar" className="rounded-xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-center">Energy & Recharging</h3>
                <p className="text-neutral-300 text-center">Each boid has limited energy. When exhausted, it slows down and enters recharging mode—visually represented with a loading bar.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final Demo Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Try It Yourself!</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 p-8 rounded-xl shadow-xl border border-white/10">
            <div className="text-center md:text-left space-y-4">
              <p className="text-lg text-neutral-300">Explore the full Boids experience and simulate your own flock with custom settings and behaviors.</p>
              <a 
                href="https://github.com/AdhamElkomi/BoidsSimul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg shadow-lg transition">
                <span className="text-white font-semibold">Visit GitHub Repository</span>
              </a>
            </div>
            <div className="flex justify-center">
              <img src="/assets/projects/boidsdemo.gif" alt="Boids Demo" className="rounded-xl shadow-xl w-full max-w-sm" />
            </div>
          </div>
        </motion.section>

        {/* Back to Projects */}
        <div className="text-center mt-20">
          <Link
            to="/#Projects"
            className="inline-block px-6 py-2 text-sm font-semibold text-white transition border border-white rounded hover:bg-white hover:text-midnight">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoidsProject;
