import { MdOutlineWavingHand } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import resume from "../assets/Resume_t.pdf";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center">
        <p className="flex items-center px-6 gap-2">
          Hi,
          <span className="animate-wave">
            <MdOutlineWavingHand size={60} />
          </span>
          my name is
        </p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#ececec] animate-pulse-glow">
          Sachin Tambeshwar
        </h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ececec] animate-pulse-glow delay-200">
          I'm a web developer
        </h1>
        <p className="text-[#ececec] py-4 max-w-[700px]">
          I am a dedicated web developer with a passion for creating responsive
          and user-friendly websites. Skilled in HTML, CSS, JavaScript, and
          modern frameworks like React, I craft seamless front-end experiences,
          while my full-stack abilities with Node.js, Express, and database
          management (MongoDB and SQL) enable me to optimize the entire
          development process.
        </p>
        <div>
          <button className="rounded-full flex items-center border-2 px-4 py-2 gap-2  hover:bg-Secondary_Text hover:text-[black] hover:font-bold">
            <a href={resume} download="resume">
              Resume
            </a>
            <span className="duration-300">
              <FaFileDownload />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
