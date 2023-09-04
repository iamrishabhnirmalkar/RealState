import React from "react";
import Teamcontainer from "./Teamcontainer";
import "../../style.css";
import "../../index.css";

function TeamSection() {
  const teamMembers = [
    {
      img: "Image/mahesh-bhawnani.png",
      name: "Mahesh Bhawnani",
      para: "Aged 59, is a partner in multiple firms of the company. He has more than 20 years of experience in this sector and is one of the founders of the company. He also holds positions in other ventures of the company including hospitality, and road construction. He holds a BSCs Degree.",
      position: "Founder | Bsc",
      fb: "",
      link: "",
    },
    {
      img: "Image/ashish-bhawnani.png",
      name: "Ar. Ashish Bhawnani",
      para: "Aged 33, is an Architect and holds a B. Arch degree. He has been a founder of this sector for the company. With more than 10 years of specializing in this sector, he has immensely contributed to the growth in this sector.",
      position: "Founder | B.Arch",
      fb: "",
      link: "",
    },
    {
      img: "Image/devashish-bhawnani.png",
      name: "Devashish Bhawnani",
      para: "Aged 29, is a managing director in our hospitality venture. He holds an MBA degree and has experience in the management of multiple projects. He has overseen our hospitality sector since its inception and ensured its efficient performance.",
      position: "Managing Director | MBA",
      fb: "",
      link: "",
    },
    {
      img: "Image/chandresh-bhawnani.png",
      name: "Chandresh Bhawnani",
      para: "Aged 24, is a partner in our various firms. He has experience in construction projects. He holds a B.A.L.L.B. Hon degree. He is currently overseeing construction projects along with the legal aspects of the company.",
      position: "Business Partner | B.A.L.L.B",
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
                  key={items.link}
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
    </>
  );
}

export default TeamSection;
