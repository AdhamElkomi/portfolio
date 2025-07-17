import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AwakeProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-navy to-black px-6 py-20 text-white font-sans">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Header Section with Logo & Title */}
        <motion.div
          className="relative text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Positioned Logo */}
          <motion.a
            href="https://www.innovateam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-4 top-4 md:left-6 md:top-6 z-50 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20 hover:scale-105 transition transform shadow-lg">
              <img
                src={BASE + "/assets/logos/innovateam.jpg"}
                alt="Innovateam"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <span className="mt-2 text-sm text-white/70 tracking-wide uppercase font-medium">
              Official Organizer
            </span>
          </motion.a>

          <h1 className="text-5xl font-bold drop-shadow-xl">
            🏁 AWAKE Challenge 2025 🏁
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            National robotics competition for autonomous driving on a surprise track.
            <br />
            <span className="block mt-4 text-yellow-300 font-semibold">
              Our car completed all 5 laps flawlessly – no wall contact, no elimination.
            </span>
          </p>
        </motion.div>

        {/* Grid - Project Context & My Contributions */}
        <motion.section
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Project Context + GIF */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">🔍 Project Context</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                The AWAKE Challenge assembled teams to build an autonomous vehicle 
                that uses only onboard sensors to navigate an unknown circuit with sharp turns and obstacles.
                No GPS, no map—just logic and resilience.
              </p>
            </div>

            {/* 🖼️ Design GIF */}
            <div className="flex justify-center">
              <img
                src={BASE + "/assets/awake_design.gif"}
                alt="Design Process"
                className="rounded-xl shadow-md w-[100%] max-w-[500px] border border-white/20"
              />
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h2 className="text-2xl font-bold mb-4">💡 My Contributions</h2>
            <div className="space-y-6">
              {[{
                title: "🔧 Arduino Programming",
                text: "Developed the robot’s movement algorithm using 3 ultrasonic sensors for obstacle detection and safe navigation.",
              },
              {
                title: "🎨 3D Design in Fusion 360",
                text: "Created a McQueen-inspired chassis, optimized for space, weight, and visibility.",
              },
              {
                title: "⚙️ Constraint Engineering",
                text: "Balanced structure with design, ensured ease of maintenance and precision sensor alignment.",
              }].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/10 rounded-xl p-5 shadow-lg border border-white/20"
                >
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-center">📅 Project Timeline</h2>
          <ol className="relative border-l-4 border-yellow-400 space-y-20 pl-8">
            {[["Concept Phase", "Brainstormed and chose McQueen-themed shell for originality and structure."],
              ["Coding & Testing", "Built core logic for ultrasonic-based driving and wall avoidance."],
              ["3D Modeling", "Designed 3D shell ensuring fit and accessibility of all components."],
              ["Competition Day", "Final test and success: 5 clean laps, ranked 4th nationally."]
            ].map(([title, desc], i) => (
              <motion.li
                key={i}
                className="relative"
                custom={i + 1}
                variants={fadeUp}
              >
                {/* Boule bien placée sur la ligne */}
                <span className="absolute -left-[3rem] top-2 w-7 h-7 bg-yellow-400 rounded-full border-4 border-midnight shadow" />
                
                <p className="font-bold text-white text-lg">{title}</p>
                <p className="text-neutral-300">{desc}</p>
              </motion.li>

            ))}
          </ol>
        </motion.section>

        {/* Video + GIF (repeated gif removed since it's above) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-center mb-8">🎥 Final Test Demo</h2>
          <div className="glass flex justify-center bg-white/10 p-6 rounded-xl shadow-xl border border-white/20">
            <video
              controls
              className="rounded-lg shadow-md w-full max-w-[600px]"
              poster={BASE + "/assets/projects/mcqueen-thumb.jpg"}
            >
              <source src={BASE + "/assets/awakevid.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.section>

        {/* Key Takeaways */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-4">✅ Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
            <ul className="list-disc list-inside space-y-2">
              <li>Designed under realistic constraints (space, weight, visibility).</li>
              <li>Arduino programming for real-time navigation.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Mastered Fusion 360 and structural modeling for robotics.</li>
              <li>Learned to work efficiently in a multidisciplinary team.</li>
            </ul>
          </div>
        </motion.section>

        {/* Return Button */}
        <div className="text-center pt-10">
          <Link
            to="//#Projects"
            className="inline-block px-6 py-2 text-sm font-semibold text-white border border-white rounded hover:bg-white hover:text-midnight transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AwakeProject;
