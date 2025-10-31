import React from "react";
import SplitText from "@/components/SplitText";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiMui,
} from "react-icons/si";

function Skills() {
  const items = [
    { icon: <FaReact className="text-cyan-400" />, label: "React.js" },
    { icon: <FaReact className="text-blue-400" />, label: "React Native" },
    { icon: <FaJsSquare className="text-yellow-400" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
    { icon: <SiRedux className="text-purple-500" />, label: "Redux Toolkit" },
    { icon: <SiTailwindcss className="text-cyan-400" />, label: "Tailwind CSS" },
    { icon: <SiMui className="text-blue-300" />, label: "Material UI" },
    { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS3" },
    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js (Basics)" },
    { icon: <SiGit className="text-orange-400" />, label: "Git & GitHub" },
    { icon: <SiFigma className="text-pink-500" />, label: "Figma to Code" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Title */}
      <SplitText
        text={"<My Skills />"}
        className="text-4xl p-4 sm:text-5xl font-bold mb-12 text-cyan-400"
        delay={80}
      />

      {/* Skills Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
        max-w-6xl w-full mx-auto px-4"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 py-4 bg-neutral-800/60 backdrop-blur-md 
            border border-cyan-500/30 rounded-xl text-lg font-medium text-gray-200 
            shadow-lg hover:scale-105 hover:shadow-cyan-400/40 
            transition-all duration-300 justify-center"
          >
            <div className="text-3xl">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
