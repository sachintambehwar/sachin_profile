import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full min-h-20 flex flex-col justify-center bg-background ">
      <div className="w-full flex justify-center items-center mx-auto my-4 ">
        <p className="font-extrabold text-2xl flex justify-center items-center gap-2 py-2 mx-auto sm: flex-col">
          <span>Let's Create Someting</span>
          <span className="font-extrabold text-4xl text-center mx-auto animate-pulse">
            awesome
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center text-2xl gap-10 p-2 mb-2">
        <a
          href="https://www.instagram.com/sachin_tambeshwar?igsh=MWViYnZjbGZpcGUxNA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-tambeshwar-101706117"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sachintambehwar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
