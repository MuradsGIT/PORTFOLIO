import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClick = (e) => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "50px" }} />
      </div>

      {/*Menu*/}
      <ul className="hidden  md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        
     
      </ul>

      {/*Hamburger*/}

      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/*Mobile Menu*/}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
            : "hidden"
        }
       
      >
        <li     className="py-6 text-4xl"> <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
            Home
          </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick}  to="about"  smooth={true} duration={500}>
            About
          </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
            Projects
          </Link></li>
       
      </ul>
      

      {/*Social icons */}
    </div>
  );
};

export default Navbar;
