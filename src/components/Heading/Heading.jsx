import React from "react";

function Heading() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-left">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-primary">
              {window.location.pathname === "/About" ? "About Us" : "Projects"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
