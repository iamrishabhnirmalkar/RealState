import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonialscontent({ Img, Comment, Name, occupation }) {
  return (
    <>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-secondary p-8 rounded">
          <FaQuoteLeft className="block w-5 h-5 text-primary mb-4" />
          <p className="leading-relaxed mb-6">{Comment}</p>
          <a className="inline-flex items-center">
            <img
              alt="testimonial"
              src={Img}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">
                {Name}
              </span>
              <span className="text-gray-500 text-sm">{occupation}</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Testimonialscontent;
