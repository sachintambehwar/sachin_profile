import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import icon from "../assets/St1.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="h-[72px] sticky top-0 left-0 z-40 shadow-md flex justify-between px-6 items-center backdrop-blur-md">
      <div className="font-semibold w-7 h-7 ">
        {/* ST logo*/}
        <img
          src={icon}
          alt="logo"
          className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />
      </div>
      {/* web menu */}
      <div>
        <ul className="md:flex hidden flex-1 justify-between items-center uppercase gap-6 px-12 font-light ">
          <NavLink
            className={({ isActive }) =>
              `relative px-4 py-1 uppercase font-semibold tracking-wide rounded-md 
               border border-transparent transition-all duration-300 ease-in-out
               ${
                 isActive
                   ? "bg-white text-black bg-background"
                   : "text-gray-300 hover:border-white hover:text-white hover:bg-transparent"
               }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative px-4 py-1 uppercase font-semibold tracking-wide rounded-md 
               border border-transparent transition-all duration-300 ease-in-out
               ${
                 isActive
                   ? "bg-white text-black bg-background"
                   : "text-gray-300 hover:border-white hover:text-white hover:bg-transparent"
               }`
            }
            to={"/about"}
          >
            about
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative px-4 py-1 uppercase font-semibold tracking-wide rounded-md 
               border border-transparent transition-all duration-300 ease-in-out
               ${
                 isActive
                   ? "bg-white text-black bg-background"
                   : "text-gray-300 hover:border-white hover:text-white hover:bg-transparent"
               }`
            }
            to={"/skill"}
          >
            Skills
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative px-4 py-1 uppercase font-semibold tracking-wide rounded-md 
               border border-transparent transition-all duration-300 ease-in-out
               ${
                 isActive
                   ? "bg-white text-black bg-background"
                   : "text-gray-300 hover:border-white hover:text-white hover:bg-transparent"
               }`
            }
            to={"/work"}
          >
            Work
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative px-4 py-1 uppercase font-semibold tracking-wide rounded-md 
               border border-transparent transition-all duration-300 ease-in-out
               ${
                 isActive
                   ? "bg-white text-black bg-background"
                   : "text-gray-300 hover:border-white hover:text-white hover:bg-transparent"
               }`
            }
            to={"/contact"}
          >
            contact
          </NavLink>
        </ul>
      </div>
      {/* hamburg */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <GiHamburgerMenu /> : <IoClose />}
      </div>
      {/* mobilemenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-Primary_Text flex flex-col justify-center items-center"
        }
      >
        <Link
          onClick={handleClick}
          to="/"
          className="py-6 text-xl font-semibold uppercase cursor-pointer "
        >
          Home
        </Link>
        <Link
          onClick={handleClick}
          to={"/about"}
          className="py-6 text-xl font-semibold uppercase cursor-pointer"
        >
          About
        </Link>
        <Link
          onClick={handleClick}
          to={"/skill"}
          className="py-6 text-xl font-semibold uppercase cursor-pointer "
        >
          Skills
        </Link>
        <Link
          onClick={handleClick}
          to="/work"
          className="py-6 text-xl font-semibold uppercase cursor-pointer "
        >
          Work
        </Link>
        <Link
          onClick={handleClick}
          to={"/contact"}
          className="py-6 text-xl font-semibold uppercase cursor-pointer "
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
