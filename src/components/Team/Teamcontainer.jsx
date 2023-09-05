import React from "react";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import "../../style.css";
import "../../index.css";

function Teamcontainer({ img, name, para, position, fb, link }) {
  return (
    <>
      <div className="items-center bg-secondary rounded-lg shadow sm:flex">
        <a href="#">
          <img
            src={img}
            alt=""
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {name}
          </h3>
          <span className="text-white">{position}</span>
          <p className="mt-3 mb-4 font-light text-gray">{para}</p>
          <ul className="flex space-x-4 sm:mt-0">
            <li>
              <a href={link} className="text-gray hover:text-white">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href={fb} className="text-gray hover:text-white">
                <FaFacebook className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Teamcontainer;
