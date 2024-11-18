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
        <img src={icon} alt="logo" className="w-full h-full" />
      </div>
      {/* web menu */}
      <div>
        <ul className="md:flex hidden flex-1 justify-between items-center uppercase gap-8 px-12 font-light ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline hover:decoration-2 hover:decoration-black transition-all duration-300"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline hover:decoration-2 hover:decoration-black transition-all duration-300"
            }
            to={"/about"}
          >
            about
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline hover:decoration-2 hover:decoration-black transition-all duration-300"
            }
            to={"/skill"}
          >
            Skills
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline hover:decoration-2 hover:decoration-black transition-all duration-300"
            }
            to={"/work"}
          >
            Work
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline hover:decoration-2 hover:decoration-black transition-all duration-300"
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
          className="py-6 text-xl font-semibold uppercase "
        >
          Home
        </Link>
        <Link
          onClick={handleClick}
          to={"/about"}
          className="py-6 text-xl font-semibold uppercase "
        >
          About
        </Link>
        <Link
          onClick={handleClick}
          to={"/skill"}
          className="py-6 text-xl font-semibold uppercase "
        >
          Skills
        </Link>
        <Link
          onClick={handleClick}
          to="/work"
          className="py-6 text-xl font-semibold uppercase "
        >
          Work
        </Link>
        <Link
          onClick={handleClick}
          to={"/contact"}
          className="py-6 text-xl font-semibold uppercase "
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
