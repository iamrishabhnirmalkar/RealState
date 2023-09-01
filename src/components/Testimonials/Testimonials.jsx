import React from "react";
import Teamcontainer from "../Team/Teamcontainer";

const Testimonials = () => {
  const Teamcontainer = [
    {
      Img: "",
      Comment: "lorem",
      Name: "Rihsabh",
      occupation: "ghhgjh",
    },
  ];
  return (
    <section className="text-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {Teamcontainer.map((items) => {
            return (
              <Teamcontainer
                Img={items.Img}
                Comment={items.Comment}
                Name={items.Name}
                occupation={items.occupation}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
