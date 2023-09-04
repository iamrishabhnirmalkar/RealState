import React from "react";
import Testimonialscontent from "../Testimonials/Testimonialscontent";

const Testimonials = () => {
  const testimonialsData = [
    {
      Img: "public/Image/1.png",
      Comment: "lorem",
      Name: "Rihsabh",
      occupation: "ghhgjh",
    },
    {
      Img: "public/Image/2.png",
      Comment: "fashjfhajksfhjk",
      Name: "Rihsaafsfafafbh",
      occupation: "gaaaaaaaaaaaaahhgjh",
    },
    {
      Img: "public/Image/3.png",
      Comment: "fashjfhajksfhjk",
      Name: "Rihsaafsfafafbh",
      occupation: "gaaaaaaaaaaaaahhgjh",
    },
    {
      Img: "public/Image/4.png",
      Comment: "fashjfhajksfhjk",
      Name: "Rihsaafsfafafbh",
      occupation: "gaaaaaaaaaaaaahhgjh",
    },
    {
      Img: "public/Image/5.png",
      Comment: "fashjfhajksfhjk",
      Name: "Rihsaafsfafafbh",
      occupation: "gaaaaaaaaaaaaahhgjh",
    },
    {
      Img: "public/Image/6.png",
      Comment: "fashjfhajksfhjk",
      Name: "Rihsaafsfafafbh",
      occupation: "gaaaaaaaaaaaaahhgjh",
    },
  ];

  return (
    <section className="text-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
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
    </section>
  );
};

export default Testimonials;
