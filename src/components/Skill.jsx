import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact, FaNode } from "react-icons/fa";
const Skill = () => {
  return (
    <div name="skill" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div className="px-12">
          <p className="text-4xl font-bold inline border-b-4 border-Primary_Text">
            Skill
          </p>
        </div>
        <div className="w-full text-center py-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="hover:scale-110 duration-100">
            <ImHtmlFive2 size={50} className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <IoLogoCss3 size={50} className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <SiTailwindcss size={50} className="w-20 mx-auto" />
            <p className="my-4">Tailwindcss</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <AiOutlineJavaScript size={50} className="w-20 mx-auto" />
            <p className="my-4">JavaScipt</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <FaReact size={50} className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <FaNode size={50} className="w-20 mx-auto" />
            <p className="my-4">Node-Js</p>
          </div>
          <div className="hover:scale-110 duration-100">
            <SiMongodb size={50} className="w-20 mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="hover:scale-110 duration-100 ">
            <SiExpress size={50} className="w-20 mx-auto" />
            <p className="my-4">Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
