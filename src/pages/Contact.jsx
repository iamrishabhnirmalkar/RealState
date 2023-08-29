import React from "react";
import Form from "../components/Form/Form";
import "../style.css";
import "../index.css";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gray ">
      <div className="flex flex-col min-h-screen  ">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Contact Us​ Now!
              </h1>

              <p className="max-w-xl mt-6">
                Fill in your details and get in touch with us today !
              </p>

              <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-third rounded-md hover:forth focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                get in touch
              </button>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300">Follow us</h3>

                <div className="flex mt-4 mx-1.5 w-8 h-8">
                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-third"
                    href="/"
                  >
                    <AiFillFacebook className="w-8 h-8" />
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-third"
                    href="/"
                  >
                    <AiFillTwitterCircle className="w-8 h-8" />
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-third"
                    href="/"
                  >
                    <AiFillInstagram className="w-8 h-8" />
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-third"
                    href="#"
                  >
                    <AiFillLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray">Contact form</h1>

                <p className="mt-2 text-gray">
                  Ask us everything and we would love to hear from you
                </p>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
