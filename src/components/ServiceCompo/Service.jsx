import React from "react";
import "../../style.css";
import "../../index.css";

function Service() {
  const services = [
    {
      title: "Property management",
      description: "Effortless Property Management Solutions",
      imageSrc: "Image/service1.png", // Replace with the actual path to your image
    },
    {
      title: "Free site visits",
      description: "Complimentary Site Visits for You!",
      imageSrc: "Image/service2.png", // Replace with the actual path to your image
    },
    {
      title: "Residential projects",
      description: "Discover Luxury Living in Our Residential Projects Today!",
      imageSrc: "Image/service3.png", // Replace with the actual path to your image
    },
  ];

  return (
    <>
      <div className="bg-secondary">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Services we offer for you
            </h2>
            <p className="text-gray sm:text-xl">
              We provide plenty of services according to your needs, which are
              as follows
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className=""
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
