import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact, FaNode } from "react-icons/fa";
import React from "react";

const Skill = () => {
  // Array of skill colors corresponding to each technology
  const skillColors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    Tailwindcss: "#38BDF8",
    Bootstrap: "#7952B3",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    "Node-Js": "#339933",
    MongoDB: "#47A248",
    Express: "#000000",
    Git: "#F05032",
  };

  const skills = [
    { icon: <ImHtmlFive2 size={50} className="w-20 mx-auto" />, name: "HTML" },
    { icon: <IoLogoCss3 size={50} className="w-20 mx-auto" />, name: "CSS" },
    {
      icon: <SiBootstrap size={50} className="w-20 mx-auto" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss size={50} className="w-20 mx-auto" />,
      name: "Tailwindcss",
    },
    {
      icon: <AiOutlineJavaScript size={50} className="w-20 mx-auto" />,
      name: "JavaScript",
    },
    { icon: <FaReact size={50} className="w-20 mx-auto" />, name: "React" },
    { icon: <FaNode size={50} className="w-20 mx-auto" />, name: "Node-Js" },
    { icon: <SiMongodb size={50} className="w-20 mx-auto" />, name: "MongoDB" },
    { icon: <SiExpress size={50} className="w-20 mx-auto" />, name: "Express" },
    { icon: <SiGit size={50} className="w-20 mx-auto" />, name: "Git" },
  ];

  return (
    <div
      name="skill"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 md:py-0"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="px-4 sm:px-12">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-500">
            Skills
          </p>
          <p className="py-4 text-gray-300">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full text-center py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-2 sm:p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${skillColors[skill.name]}20`,
                border: `1px solid ${skillColors[skill.name]}`,
              }}
            >
              <div className="transition-all duration-500 group-hover:-translate-y-2">
                {React.cloneElement(skill.icon, {
                  className: "w-12 sm:w-16 md:w-20 mx-auto",
                  color: skillColors[skill.name],
                })}
                <p className="my-2 sm:my-4 text-sm sm:text-base font-medium">
                  {skill.name}
                </p>
              </div>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${
                    skillColors[skill.name]
                  }40, transparent 70%)`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
