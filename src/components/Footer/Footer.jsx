import React from "react";
import Logo from "/Image/logo-foot.svg";
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaMapMarker,
} from "react-icons/fa";
import "../../style.css";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/Home" className="flex items-center">
              <img src={Logo} className="h-8 mr-3" alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/*  Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Navigation*/}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Navigation
              </h2>
              <ul className="text-gray font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/About" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Project" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Address */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Address
              </h2>
              <ul className="text-gray font-medium">
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                    <FaMapMarker className="w-4 h-4 inline-block mr-2" />
                    Plot No.3, Indira Commercial Complex, <br />
                    T.P. Nagar, Korba (C.G.) 495677
                  </a>
                </li>
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                    <FaMapMarker className="w-4 h-4 inline-block mr-2" />
                    Windchimes, Beside Raheja Skyscapes, <br /> Vidhan Sabha
                    Road, Saddu, Raipur (C.G.) 492001
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Rishabh Nirmalkar
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Icons */}
            <a href="/" className="text-gray hover:text-white">
              <FaFacebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="/" className="text-gray hover:text-white">
              <FaDiscord className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="/" className="text-gray hover:text-white">
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="/" className="text-gray hover:text-white">
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="/" className="text-gray hover:text-white">
              <FaDribbble className="w-4 h-4" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
