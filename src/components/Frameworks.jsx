import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "Rviz_logo",
    "arduino (2)",
    "cplusplus",
    "python-svgrepo-com",
    "github-svgrepo-com",
    "matlab-svgrepo-com",
    "terminal-svgrepo-com",
    "git",
    "autodesk-svgrepo-com",
    "vscode-svgrepo-com",
    "pygame_icon (1)",
    "ladder",
    "fusion360",
    "ROS",
    "gazebo_logo (1)",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
