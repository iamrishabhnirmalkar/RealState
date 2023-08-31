import React from "react";
import { FiMessageSquare, FiMapPin, FiPhone } from "react-icons/fi"; // Import the necessary icons
import Img from "/Image/Contact01.jpg";
import "../../style.css";
import "../../index.css";

const ContactSection02 = () => {
  return (
    <section className="bg-primary ">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-secondary ">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray md:text-3xl ">
            We’d love to hear from you
          </h1>
          <p className="mt-3 text-gray ">Chat or Call to our friendly team.</p>
        </div>

        <img
          className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
          src={Img}
          alt=""
        />

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-secondary rounded-lg bg-blue-100/80 ">
              <FiMessageSquare className="w-5 h-5" />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-800">
              Chat to sales
            </h2>
            <p className="mt-2 text-sm text-gray-500 ">
              Speak to our friendly team.
            </p>
            <p className="mt-2 text-sm text-blue-500 ">hello@merakiui.com</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
            <span className="inline-block p-3 text-secondary rounded-lg bg-blue-100/80 ">
              <FiMapPin className="w-5 h-5" />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-800 ">
              Visit us
            </h2>
            <p className="mt-2 text-sm text-gray-500 ">Visit our office HQ..</p>
            <p className="mt-2 text-sm text-blue-500 ">
              100 Smith Street Collingwood VIC 3066 AU
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
            <span className="inline-block p-3 text-secondary rounded-lg bg-blue-100/80 ">
              <FiPhone className="w-5 h-5" />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-800 ">
              Call us
            </h2>
            <p className="mt-2 text-sm text-gray-500 ">
              Mon-Fri from 8am to 5pm.
            </p>
            <p className="mt-2 text-sm text-blue-500">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection02;
