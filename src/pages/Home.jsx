import React from "react";

import Teamcontainer from "../components/Team/Teamcontainer";
import { Link } from "react-router-dom";
import CTA from "../components/call to action/CTA";

function Home() {
  const teamMembers = [
    {
      img: "Image/mahesh-bhawnani.png",
      name: "Mahesh Bhawnani",
      para: "Aged 59, is a partner in multiple firms of the company. He has more than 20 years of experienc in this sector and is one of the founders of the company. He also holds positions in other ventures of the company including hospitality, and road construction. He holds a BSCs Degree.",
      position: "Founder | Bsc",
      fb: "",
      link: "",
    },
  ];
  return (
    <>
      <div className="bg-secondary">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray">
              Our Team
            </h2>
            <p className="font-light text-white lg:mb-16 sm:text-xl">
              Specialized team with more than 30 years of experience
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {teamMembers.map((items) => {
              return (
                <Teamcontainer
                  img={items.img}
                  name={items.name}
                  para={items.para}
                  position={items.position}
                  fb={items.fb}
                  link={items.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}

export default Home;
