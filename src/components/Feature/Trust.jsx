import React from "react";
import { FiShield, FiStar, FiUsers } from "react-icons/fi";
import "../../style.css";
import "../../index.css";

function Trust() {
  const services = [
    {
      title: "Transparency",
      description: "Our clients are aware of the dealings that take place.",
      icon: <FiShield size={24} />,
    },
    {
      title: "Standard",
      description: "We believe in delivering quality services to all.",
      icon: <FiStar size={24} />,
    },
    {
      title: "Dedicated",
      description: "We ensure that we provide the best to our clients.",
      icon: <FiUsers size={24} />,
    },
  ];
  return (
    <>
      <div className="bg-secondary ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Why they trust us
            </h2>
            <p className="text-gray sm:text-xl ">
              Our core values are driven by creating a better environment,
              infrastructure, and space for a healthier lifestyle for people
              everywhere.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-third mb-4">
                  {service.icon}
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

export default Trust;
