import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

function Property() {
  const properties = [
    {
      title: "Windchimes",
      description:
        "WindChimes, we are set to bring in 2 BHK, 2.5 BHK, 3 BHK, and 4 BHK homes which are designed to provide a very comfortable, convenient, and elegant lifestyle to our customers.",
      Year: "Upcomming",
      area: 3,
      RERA: "PGRERA071122001547",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
    },
    {
      title: "Power Emperia Gold",
      description:
        "Power Emperia Gold depicts the address for connoisseurs of luxurious urban lifestyle, the broad open decks make way for natural light pleasant breeze and breathtakingly beautiful views.",
      Year: "About to finish",
      area: 3,
      RERA: "PCGRERA290121001188",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg",
    },
    {
      title: "Swarna City",
      description:
        "Swarna City is a commercial development of Power Group, which offers extensive mercantile apartments.You'll love the slick modern design and the location that's convenient for all your needs. .",
      Year: "2016-2018",
      area: 3,
      RERA: "PCGRERA130618000134",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg",
    },
  ];
  return (
    <>
      <div className="bg-primary body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-extrabold title-font text-secondary mb-12 text-center">
            Our featured projects
          </h1>
          <p className="text-gray sm:text-xl text-center">
            Don't let the location get all of you. Choose a lifestyle where you
            can readily enjoy a life filled with all the modern-day amenities
            with us.
          </p>
        </div>
        <div className="container mx-auto mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {properties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
