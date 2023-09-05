import React from "react";
import Testimonialscontent from "../Testimonials/Testimonialscontent";
import "../../index.css";
import "../../style.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      Img: "Image/1.png",
      Comment:
        "Best of the quality construction with very affordable price. And every time coming with new concept..Value for money gauranteed!",
      Name: "Ashish Jajodia",
      occupation: "IAS Officer",
    },
    {
      Img: "Image/2.png",
      Comment:
        "Place is very nice to live long. Construction quality of the building is solid. To much space available for parking and playing for childrens. The Builder M/s. H M Infratech doesn't compromise with the safety standards to make this premises to live without any doubts.",
      Name: "Ashish Rokdey",
      occupation: "Maneger",
    },
    {
      Img: "Image/3.png",
      Comment:
        "MOST LOVELY PLACE TO LIVE IN KORBA AWESOME PALCE BEST LOCATION.",
      Name: "Suresh Wadhwani",
      occupation: "Software Enginer",
    },
    {
      Img: "Image/4.png",
      Comment:
        "I have excellent experience with HM Infratech. Their all projects are high quality with value for money. Guaranteed!!!",
      Name: "Ritika Mitra",
      occupation: "School Teacher",
    },
    {
      Img: "Image/5.png",
      Comment: "Superb build quality. Peaceful society...",
      Name: "Richa Sahu",
      occupation: "Student",
    },
    {
      Img: "Image/6.png",
      Comment:
        "Today, we are proud homeowners of a beautiful property that exceeded our expectations. It's not just a house; it's a place where we are building cherished memories with our family.",
      Name: "Khushi Jain",
      occupation: "House Wife",
    },
  ];

  return (
    <div className=" bg-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-extrabold title-font text-secondary mb-12 text-center ">
          Testimonials
        </h1>
        <p className="text-gray sm:text-xl text-center">
          Look how happy our clients are with our work and services.
        </p>
        <div className="flex flex-wrap m-4 text-white">
          {testimonialsData.map((item) => (
            <Testimonialscontent
              key={item.Name}
              Img={item.Img}
              Comment={item.Comment}
              Name={item.Name}
              occupation={item.occupation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
