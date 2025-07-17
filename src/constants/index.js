const BASE = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "Internship – Autonomous Navigation on Jackal (Clearpath Robotics)",
    description:
      "Worked on deploying existing ROS packages for autonomous navigation using Jackal, focusing on integrating a LiDAR and RealSense camera for indoor mapping.",
    subDescription: [
      "Facilitated sensor integration and system setup using ROS tools and launch files.",
      "Applied ROS fundamentals (nodes, topics, packages) in a real robotic environment.",
      "Improved system behavior through testing and structured debugging.",
    ],
    href: import.meta.env.BASE_URL + "projects/JackalProject",
    logo: BASE + "/assets/logo/VL-clearpath.png",
    image: BASE + "/assets/projects/exploration_2D&3D.gif",
    tags: [
      {
        id: 1,
        name: "C++",
        path: BASE + "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "ROS",
        path: BASE + "/assets/logos/ROS.svg",
      },
      {
        id: 3,
        name: "Shell/Linux",
        path: BASE + "/assets/logos/terminal-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "RViz",
        path: BASE + "/assets/logos/Rviz_logo.svg",
      },
    ],
  },
  {
    id: 2,
    title: "AWAKE Challenge 2025 | INNOVATEAM (National Robotics Competition)",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Created an original McQueen-inspired 3D design balancing style and technical constraints.",
      "Worked with the engineering team to align design with hardware integration.",
      "Ranked 4th out of 12 teams in the final held on June 4, 2025, in Puteaux, France.",
    ],
    href: import.meta.env.BASE_URL + "projects/AwakeProject",
    logo: "",
    image: BASE + "/assets/awake_design.gif",
    tags: [
      {
        id: 1,
        name: "Fusion 360",
        path: BASE + "/assets/logos/fusion360.png",
      },
      {
        id: 2,
        name: "Arduino",
        path: BASE + "/assets/logos/arduino.png",
      },
    ],
  },
  {
    id: 3,
    title: "Analytical Study and Outlier Filtering of 3D Point Clouds from RS-LiDAR-16",
    description:
      "Explored and processed 3D LiDAR data from the RS-LiDAR-16 to better understand sensor behavior and improve point cloud accuracy.",
    subDescription: [
      "Tested LiDAR detection in real time using RSView after learning the basics.",
      "Removed outliers with CloudCompare using data from ROS."
    ],
    href: import.meta.env.BASE_URL + "projects/lidar-project",
    logo: "",
    image: BASE + "/assets/projects/RvizGIF.gif",
    tags: [
      {
        id: 1,
        name: "CloudCompare",
        path: BASE + "/assets/logos/CloudCompareV2_logo.png",
      },
      {
        id: 2,
        name: "ROS",
        path: BASE + "/assets/logos/ROS_icon.png",
      },
      {
        id: 3,
        name: "Gazebo",
        path: BASE + "/assets/logos/Gazebo.png",
      },
      {
        id: 4,
        name: "Python",
        path: BASE + "/assets/logos/Python_logo_01.png",
      },
    ],
  },
  {
    id: 4,
    title: "DrawROB - Omnidirectional Drawing Robot",
    description:
      "",
    subDescription: [
      "In a team of students, I helped develop a Webots simulation of a mobile robot that draws geometric shapes like squares, triangles, and circles. We focused on coding motion sequences using simple kinematics and fine-tuned the trajectories for smooth results.",
    ],
    href: import.meta.env.BASE_URL + "projects/DrawBOT",
    logo: "",
    image: BASE + "/assets/projects/DrawBOT1.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: BASE + "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "Arduino",
        path: BASE + "/assets/logos/arduino.png",
      },
      {
        id: 3,
        name: "webots",
        path: BASE + "/assets/logos/webots.png",
      },
      {
        id: 4,
        name: "Fusion",
        path: BASE + "/assets/logos/fusion360.png",
      },
    ],
  },
  {
    id: 5,
    title: "ASFOUR Game - Boids Simulation",
    description:
      "",
    subDescription: [
      "An interactive simulation where virtual birds flock in real time, following simple rules that create smooth, lifelike group motion. A visual and engaging dive into swarm intelligence. Try it yourself—it's available on my GitHub!"
    ],
    href: import.meta.env.BASE_URL + "projects/BoidsProject",
    logo: "",
    image: BASE + "/assets/projects/ASFOUR.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: BASE + "/assets/logos/Python_logo_01.png",
      },
      {
        id: 2,
        name: "Pygame",
        path: BASE + "/assets/logos/pygame_icon.jpg",
      }
    ],
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+330783532618",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/adham-ali-b92926303/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/AdhamElkomi",
    icon: "/assets/socials/github-svgrepo-com (2).svg",
  }
];

export const experiences = [
  {
    title: "Lycée Français de Koweït (LFK)",
    job: "French General Baccalaureate Diploma, 2022",
    date: "2008-2022",
    contents: [
      "Completed all schooling from preschool (moyenne section) to senior year (terminale) at the French International School of Kuwait, accredited by the AEFE (Agency for French Education Abroad) and following the official French national curriculum.",
      "Graduated in 2022 with the French General Baccalauréat diploma, awarded 'mention Très Bien' (highest honors).",
      "Specialized in Mathematics, Physics-Chemistry, and Digital and Computer Science (NSI), in line with the French education system.",
      "Studied in a multicultural environment with a strong academic foundation in science and technology."
    ],
  },
  {
    title: "Polytech Dijon - University of Burgundy",
    job: "Integrated Preparatory Program",
    date: "2022-2024",
    contents: [
      "Began with foundational courses in mathematics, physics, computer science, and engineering sciences during the first year.",
      "Gradually shifted toward robotics-focused subjects in the second year, including basics of mechanics, electronics, and embedded systems.",
      "Continued studying core scientific subjects while deepening technical skills relevant to robotic design and control.",
      "Completed the year with a hands-on Arduino project: an automated plant-watering system introducing basic electronic control principles."
    ],
  },
  {
    title: "Polytech Dijon – University of Burgundy",
    job: "Engineering Cycle – Major in Robotics and Instrumentation",
    date: "2024-Present",
    contents: [
      "Currently enrolled in the engineering cycle with a specialization in Robotics and Instrumentation at the Le Creusot campus.",
      "Studying advanced topics in control systems, signal processing, real-time programming, and embedded electronics.",
      "Applying theoretical knowledge through hands-on labs, technical projects, and team-based challenges.",
      "Developing cross-disciplinary skills to design, simulate, and implement intelligent robotic systems.",
      "Expected to graduate with an accredited French engineering degree in February 2027."
    ],
  },
];
export const reviews = [
  {
    name: "Wael",
    username: "@Wael Sayed",
    body: "Bravo Adham ALI 👏🏻",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQHFEOU4sp59mg/profile-displayphoto-shrink_400_400/B4EZXfMl.gGgAk-/0/1743206376230?e=1758153600&v=beta&t=chYmCucJg0m5Wt2F2jtEvomrZWuAM652eQUGCXS2sYQ",
    link: "https://www.linkedin.com/in/wael-sayed03/"
  },
  {
    name: "David",
    username: "@David Fofi",
    body: "You deserve this 4th place like your comrades. Well done! 👏",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQH-G-1tC2faOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516796529630?e=1758153600&v=beta&t=UwVCn2v9JERlXNwkkk6cknd7svht9ebctiWQsFKUZ88",
    link: "https://www.linkedin.com/in/davidfofi/"
  },
  {
    name: "Hadi",
    username: "@Hadi El Ayoubi",
    body: "Congrats Adham! 🎉",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQF3ULi7JV5gVg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731525077205?e=1758153600&v=beta&t=XHzyQWMBK7ejqIj6kOmxKwFtpTFa9e6uhF9hGRne53c",
    link: "https://www.linkedin.com/in/hadi-el-ayoubi-485ab0332/",
  },
  {
    name: "Kevin",
    username: "@Kevin Gelonch",
    body: "Too bad you couldn’t be there, but we were all thinking of you! And congrats on staying motivated right until the finish line! 😉",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHTqFFACViZ9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688808599763?e=1758153600&v=beta&t=PjY8YQJ4_rnHNdMj85jI8Lp-4DvZqfrgglUETYUpW1U",
    link: "https://www.linkedin.com/in/kevin-gelonch-b54936282/"
  },
  {
    name: "Terryl",
    username: "@TERRYL NGUETI",
    body: "Congratulation to your team and you Adham ! 👏 👍",
    img: "https://media.licdn.com/dms/image/v2/D4E35AQGXyZBq7Ac_RA/profile-framedphoto-shrink_400_400/B4EZcmsILrHIAc-/0/1748700791834?e=1752976800&v=beta&t=heou5O_Fb_ZSFLHMS5230dv2mKrBHPUQPybemu61lwI",
    link: "https://www.linkedin.com/in/terryl-ngueti-73a738346/",
  },
  {
    name: "Ousmane",
    username: "@Ousmane Capinto CAMARA",
    body: "Well done Adham ALI for this achievement. It truly shows how proactive and dynamic you can be. Thanks as well to your supervisors David Fofi and Raphaël Duverne.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFTEQlgWolMIg/profile-displayphoto-shrink_400_400/B4DZWuFYvjH4Ag-/0/1742382403060?e=1758153600&v=beta&t=uYiGzjZiCjDS2jumWXz-ZEvJFIQ5V2ianbdSZx9iKWI",
    link: "https://www.linkedin.com/in/ousmane-capinto-camara-2881b3323/",
  },
  {
    name: "Maï-Ly",
    username: "@Maï-Ly Rivière Laurent",
    body: "Congratulations for your investment in this project! 👏🏼We look forward to seeing you for the next edition!",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQEN4l2mUCiKWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694438691376?e=1758153600&v=beta&t=Yj8pOQ7QP57FAKN_Fbau_yb6WzmJ7R9uu5PgBP0ivGA",
    link: "https://www.linkedin.com/in/maï-lyrivièrelaurent/",
  },
  {
    name: "Wael",
    username: "@Wael Sayed",
    body: "A robot like that to serve us morning coffee without even changing rooms would be perfect 🤣",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQHFEOU4sp59mg/profile-displayphoto-shrink_400_400/B4EZXfMl.gGgAk-/0/1743206376230?e=1758153600&v=beta&t=chYmCucJg0m5Wt2F2jtEvomrZWuAM652eQUGCXS2sYQ",
    link: "https://www.linkedin.com/in/wael-sayed03/",
  },
];
