import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

function Property() {
  const properties = [
    {
      title: "Home In Merrick Way",
      description:
        "Enchanting three bedrooms, three bath home with spacious one bedroom, one bath...",
      bedrooms: 3,
      bathrooms: 3,
      area: 4300,
      price: 540000,
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
    },
    {
      title: "Villa In Alexandria",
      description:
        "Enjoy serenity of Deering Bay whole day from this spectacular North and...",
      bedrooms: 3,
      bathrooms: 3.5,
      area: 3500,
      price: 825000,
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg",
    },
    {
      title: "Villa In Cairo",
      description:
        "The very best waterfront location in Tahrir square and beside many cool places",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      price: 410000,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg",
    },
  ];
  return (
    <>
      <div className="container mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Property;
