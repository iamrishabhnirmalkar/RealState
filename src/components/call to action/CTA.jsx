import React from "react";
import "../../style.css";
import "../../index.css";

function CTA() {
  return (
    <div className="bg-primary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-secondary">
            Connect with us today!
          </h2>
          <p className="mb-6 font-light text-gray md:text-lg">
            So, what are you waiting for? Click on the Button below to connect
            with us now!
          </p>
          <a
            href="tel:+918010438010"
            className="text-white bg-third hover:bg-secondary focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   "
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTA;
