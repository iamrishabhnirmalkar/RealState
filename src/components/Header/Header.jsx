import React, { useState } from "react";
import Logo from "/Image/logo.svg";
import { Link } from "react-router-dom";
import "../../index.css";
import "../../style.css";
import { FaBars, FaX } from "react-icons/fa6";

const navlinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/About",
    display: "About Us",
  },
  {
    path: "/Project",
    display: "Projects",
  },
  {
    path: "/Contact",
    display: "Contact Us",
  },
];

function Header() {
  const [nav, setNav] = useState(false); // Move the state here

  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/Home" className="flex items-center">
          <img src={Logo} alt="" className="h-8 mr-3" />
        </a>

        {/* Menu */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-third md:hidden"
        >
          {nav ? <FaX size={30} /> : <FaBars size={30} />}
        </div>

        <div
          className={`${nav ? "block" : "hidden"} w-full   md:w-auto md:flex`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navlinks.map((link, index) => (
              <li
                key={index}
                className="py-2 pl-3 pr-4 rounded hover:text-third"
              >
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
