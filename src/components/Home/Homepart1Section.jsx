import React from "react";

function Homepart1Section() {
  return (
    <>
      <div
        className="bg-image"
        style={{
          background: "rgba(255, 255, 255, 0.2)", // Adjust the opacity by changing the alpha value (0.7 in this example)
          backgroundImage: `url('/Image/Hero.jpg')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Rest of your code */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {/* Use React Icons for the arrow icon */}
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white hover:ring-gray">
                Announcing our next round of funding.{" "}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Power <br />
                <span className="text-secondary">gateway to luxury</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Aiming to spread happiness, luxury, and prosperity wherever we
                set foot in 2, 2.5, 3, and 4 BHK luxurious homes along with a
                lively experience as per your comfort, Ready-to-move homes with
                excellent amenities and a breathtaking view
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-third px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          {/* Rest of your code */}
        </div>
      </div>
    </>
  );
}

export default Homepart1Section;
