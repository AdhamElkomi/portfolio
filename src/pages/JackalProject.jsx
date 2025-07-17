import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const JackalProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-navy to-midnight px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto">

        {/* Titre animé */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-6 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Autonomous Navigation on Jackal – Internship Project
        </motion.h1>

        {/* Intro animée */}
        <motion.p
          className="text-lg text-center text-neutral-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          A robotics internship focused on deploying existing ROS navigation packages on the Jackal robot to achieve autonomous indoor exploration using LiDAR and a RealSense camera.
        </motion.p>

        {/* Image stylée et animée */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img
            src={BASE + "/assets/projects/jackal.jpg"}
            alt="Jackal robot during autonomous navigation test"
            className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out max-w-2xl w-md object-cover"
          />
        </motion.div>

        {/* Sections dynamiques */}
        {[
          {
            title: "🔍 Project Context",
            content:
              "The main objective was to implement and test a working autonomous navigation system on Jackal using pre-existing open-source ROS packages. The challenge lay in integrating multiple sensors, analyzing data flows, and debugging real-time issues using ROS tools.",
          },
          {
            title: "🛠️ Tools & Workflow",
            content: [
              ["ROS (Robot Operating System):", "Main framework used for managing nodes, topics, TFs, and sensor communication."],
              ["RViz & rqt_graph:", "Tools used for real-time data visualization and system debugging."],
              ["RealSense & LiDAR:", "Sensors integrated for 3D perception and mapping."],
              ["RTAB-Map:", "SLAM package used to build indoor maps and manage autonomous exploration."],
            ],
          },
        ].map((section, index) => (
          <motion.section
            className="mb-12"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <div className="space-y-4 text-neutral-300">
                {section.content.map(([label, desc], i) => (
                  <div key={i}>
                    <span className="font-semibold text-white">{label}</span> {desc}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-300 leading-relaxed">{section.content}</p>
            )}
          </motion.section>
        ))}

        {/* Timeline */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">🗓️ Project Highlights</h2>

          {/* Timeline container */}
          <ol className="relative border-l-2 border-gray-500 ml-6 pl-6 space-y-12">
            {[
              ["Week 1", "Configured ROS environment, launched sensor drivers, and tested RViz visualization."],
              ["Week 2", "Integrated RealSense and LiDAR, adjusted launch files, and ensured proper topic flow."],
              ["Week 3", "Launched RTAB-Map for indoor mapping and tested autonomous path planning."],
              ["Week 4", "Analyzed errors using rqt_graph and improved system stability. Documented the entire process for future replication."]
            ].map(([week, desc], i) => (
              <motion.li
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Perfectly centered bullet */}
                <span className="absolute left-[-33px] top-1.5 w-4 h-4 bg-yellow-400 border-2 border-white rounded-full shadow-md z-10" />

                {/* Text content */}
                <div className="pl-2">
                  <p className="font-semibold text-white">{week}:</p>
                  <p className="text-neutral-300">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.section>



        {/* Guide GitHub Section - Stylish Grid Format */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-center mb-8">📘 Complete Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Left Panel - Description */}
            <div className="bg-gradient-to-br from-navy via-midnight to-navy rounded-xl shadow-xl p-6 flex flex-col justify-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">Master Jackal’s Navigation</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Follow my complete guide on GitHub to learn how to configure the ROS environment, connect the LiDAR & RealSense camera, launch RTAB-Map, and explore a room autonomously.
                It includes screenshots, launch files, and personal notes from my internship.
              </p>
            </div>

            {/* Right Panel - Button */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-300 text-midnight rounded-xl p-6 flex flex-col justify-center items-center shadow-xl hover:shadow-2xl transition duration-300">
              <span className="text-5xl mb-3 animate-bounce">🚀</span>
              <p className="text-center font-medium mb-4">Click below to view the full guide:</p>
              <a
                href="https://github.com/AdhamElkomi/Jackal-Slam-Navigation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-midnight text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-midnight hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </motion.section>



        {/* Back to Projects Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="//#Projects"
            className="inline-block px-6 py-2 text-sm font-semibold text-white transition border border-white rounded hover:bg-white hover:text-midnight"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default JackalProject;
