import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const LidarProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-navy to-midnight px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Project Title */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h1 className="text-5xl font-extrabold text-center mb-16 text-white drop-shadow-md">
            Analytical Study and Outlier Filtering of 3D Point Clouds from RS-LiDAR-16
          </h1>
        </motion.section>

        {/* 1. How LiDAR Works */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h1 className="text-4xl font-bold text-center mb-12">📡 How does LiDAR work?</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-lg text-neutral-300 space-y-4">
              <p>The 16-layer 3D LiDAR uses a rotating sensor to emit laser pulses in all directions.</p>
              <p>Each "layer" corresponds to a beam oriented at a different vertical angle, allowing the environment to be scanned in 3D.</p>
              <p>The sensor measures the time it takes for the light to return (time of flight) to accurately calculate the distance of surrounding objects.</p>
              <p>These measurements generate a 3D point cloud that faithfully represents the surrounding space.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={BASE + "/assets/projects/lidarscan.gif"} alt="LiDAR" className="h-auto max-h-[300px] w-auto rounded-xl border border-white/20 shadow-lg" />
              <img src={BASE + "/assets/projects/robosense.png"} alt="Robosense Logo" className="h-auto max-h-[300px] w-auto rounded-xl" />
            </div>
          </div>
        </motion.section>

        {/* 2. Project Purpose */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-bold text-center mb-12">🚗 Project Purpose</h2>
          <p className="text-center text-neutral-300 max-w-3xl mx-auto mb-10">
            In certain situations, such as in the presence of dust or suspended particles, the LiDAR can mistakenly interpret these elements as obstacles.
            This may cause an autonomous vehicle to stop unnecessarily. The goal of this project is to filter out these noisy points
            and retain only the data useful for navigation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <div className="flex flex-col items-center">
              <img src={BASE + "/assets/projects/GIF_.gif"} alt="Before filtering" className="w-full md:w-[90%] rounded-xl border border-white/10" />
              <p className="text-sm text-neutral-400 mt-2">Before filtering</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={BASE + "/assets/projects/GIF__1.gif"} alt="After filtering" className="w-full md:w-[90%] rounded-xl border border-white/10" />
              <p className="text-sm text-neutral-400 mt-2">After filtering</p>
            </div>
          </div>
        </motion.section>

        {/* 3. Objectives */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-bold text-center mb-12">🎯 Context and Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <img src={BASE + "/assets/projects/Picture13.png"} className="mx-auto w-20" alt="Study" />
              <p className="text-neutral-300">Study the behavior of the <strong>RS-LiDAR-16</strong> sensor.</p>
            </div>
            <div className="text-center space-y-4">
              <img src={BASE + "/assets/projects/Picture14.png"} className="mx-auto w-20" alt="Analysis" />
              <p className="text-neutral-300">Analyze the raw data from the LiDAR (e.g., distance, intensity).</p>
            </div>
            <div className="text-center space-y-4">
              <img src={BASE + "/assets/projects/Picture15.png"} className="mx-auto w-20" alt="Filtering" />
              <p className="text-neutral-300">Apply signal processing techniques to filter out outliers.</p>
            </div>
          </div>
        </motion.section>

        {/* 4. Filtering Method */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-bold text-center mb-12">🧪 Statistical Filtering Method</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-lg text-neutral-300 space-y-4">
              <p>Each point is compared with its neighbors: if its distance is abnormally high compared to them, it's considered an outlier.</p>
              <p>The formula used is: <strong>ds = d + n × σ</strong>, where d is the average neighbor distance, σ is the standard deviation, and n is a tuning factor.</p>
              <p>This threshold helps eliminate inconsistent data such as parasitic reflections or dust.</p>
            </div>
            <img src={BASE + "/assets/projects/methodefiltrage.png"} className="w-full md:w-1/2 max-w-md rounded-xl border border-white/10" alt="Statistical method" />
          </div>
        </motion.section>

        {/* 5. ROS Approach */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-bold text-center mb-12">🤖 Our Approach with ROS</h2>
          <p className="text-center text-neutral-300 max-w-3xl mx-auto mb-6">
            Data from the RS-LiDAR-16 sensor was captured via ROS (Robot Operating System) and recorded in rosbag files.
            These files were then converted to be usable by the CloudCompare software.
          </p>
          <img src={BASE + "/assets/projects/lidarjackal.png"} className="mx-auto w-full md:w-2/3 rounded-xl border border-white/20" alt="ROS capture" />
        </motion.section>

        {/* 6. CloudCompare Results */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-bold text-center mb-12">📊 Results on CloudCompare</h2>
          <p className="text-center text-neutral-300 max-w-3xl mx-auto mb-6">
            Here is a visual preview of the filtering results: on the left, the raw LiDAR data; on the right, the data after outlier removal.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <div className="flex flex-col items-center">
              <img src={BASE + "/assets/projects/avantfiltrage.png"} alt="Before filtering" className="w-full md:w-[90%] rounded-xl border border-white/20" />
              <p className="text-sm text-neutral-400 mt-2">Before filtering</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={BASE + "/assets/projects/apresfiltrage.png"} alt="After filtering" className="w-full md:w-[90%] rounded-xl border border-white/20" />
              <p className="text-sm text-neutral-400 mt-2">After filtering</p>
            </div>
          </div>
        </motion.section>

        {/* Back Button */}
        <div className="text-center mt-20">
          <Link to="//#Projects" className="inline-block px-6 py-2 text-sm font-semibold text-white transition border border-white rounded hover:bg-white hover:text-midnight">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LidarProject;
