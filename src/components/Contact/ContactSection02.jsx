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
          <div className="p-4 rounded-lg bg-secondary md:p-6 ">
            <span className="inline-block p-3 text-secondary rounded-lg bg-primary ">
              <FiMessageSquare className="w-5 h-5" />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray">
              Chat to sales
            </h2>
            <p className="mt-2 text-sm text-gray ">
              Speak to our friendly team.
            </p>
            <a href="mailto:powergroupcg@gmail.com">
              <p className="mt-2 text-sm text-white">powergroupcg@gmail.com</p>
            </a>
          </div>

          <div className="p-4 rounded-lg bg-secondary md:p-6 ">
            <span className="inline-block p-3 text-secondary rounded-lg bg-primary ">
              <FiMapPin className="w-5 h-5" />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray ">Visit us</h2>
            <p className="mt-2 text-sm text-gray ">
              Visit our Raipur office HQ..
            </p>
            <a href="">
              <p className="mt-2 text-sm text-white ">
                Windchimes, Beside Raheja Skyscapes, Vidhan Sabha Road, Saddu,
                Raipur (C.G.) - 492001
              </p>
            </a>
            <p className="mt-2 text-sm text-gray ">
              Visit our Korba office HQ..
            </p>
            <a href="">
              <p className="mt-2 text-sm text-white ">
                Plot no.3, Indra Commercial Complex, T.p. Nagar, Korba, (C.G.)
              </p>
            </a>
          </div>

          <div className="p-4 rounded-lg bg-secondary md:p-6 ">
            <span className="inline-block p-3 text-secondary rounded-lg bg-primary ">
              <FiPhone className="w-5 h-5" />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray ">Call us</h2>
            <p className="mt-2 text-sm text-gray ">Mon-Sun from 8am to 8pm.</p>
            <a href="tel:7566553355">
              <p className="mt-2 text-sm text-white">7566-55-3355</p>
            </a>
            <a href="tel:8010438010">
              <p className="mt-2 text-sm text-white">8010-43-8010</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection02;
