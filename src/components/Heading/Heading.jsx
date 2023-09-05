import React from "react";
import { useLocation } from "react-router-dom";
import "../../style.css";
import "../../index.css";

function Heading() {
  // Get the pathname from the location object
  const location = useLocation();

  // Define the default heading
  let headingText = "";

  // Check if the pathname matches "/About" , "/Projects" or "/Contact"
  if (location.pathname === "/About") {
    headingText = "About Us";
  } else if (location.pathname === "/Project") {
    headingText = "Projects";
  } else if (location.pathname === "/Contact") {
    headingText = "Contact Us";
  }

  return (
    <div>
      <div className="bg-secondary">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-left">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center leading-tight text-primary">
              {headingText}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
