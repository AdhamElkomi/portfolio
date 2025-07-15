import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/AR-Titanium1200R-BI_pn_cJ.png"
            className="absolute scale-[1.25] -right-[5rem] -top-[1rem] md:scale-[1] md:left-50 md:inset-y-10 lg:scale-[1.25]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Adham ALI</p>
            <p className="subtext">
              Over the last 4 years, I’ve been combining my software development skills with robotics engineering to build smart,
              efficient, and real-world solutions using technologies like C++, Python, and ROS.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4">

            {/* Titre en haut */}
            <div className="mb-1">
              <p className="headtext text-3xl text-white text-center">Latest Experience</p>
            </div>

            {/* Conteneur horizontal pour le GIF + logo */}
            <div className="flex items-center justify-center gap-6">
              
              {/* Logo ImViA */}
              <img
                src="assets/logos/ImViA.png"
                alt="ImViA Logo"
                className="w-[120px] h-auto"
              />

              {/* GIF avec overlay */}
              <div className="relative">
                <img
                  src="assets/nav2dgoal.gif"
                  alt="Jackal Navigation with ROS"
                  className="w-[300px] rounded-lg shadow-lg h-auto"
                />
              </div>
            </div>

            {/* Description en bas */}
            <p className="mt-1 subtext text-center">
              Internship at ImViA Lab working on the Jackal robot (Clearpath) with ROS navigation.
            </p>

          </div>
        </div>




        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Currently based in Le Creusot, France</p>
            <p className="subtext">
              Open to relocation worldwide for the right opportunity.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              As a robotics engineering student, I specialize in programming languages,
              simulation tools, and frameworks that enable me to design, prototype,
              and deploy intelligent robotic systems.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
