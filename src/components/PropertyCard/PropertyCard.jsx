import React from "react";
import {
  FaHeart,
  FaExchangeAlt,
  FaRegCalendar,
  FaVectorSquare,
} from "react-icons/fa";

const PropertyCard = ({
  title,
  description,
  Year,

  area,
  RERA,
  imageUrl,
}) => {
  return (
    <div className="">
      <div className="relative bg-white">
        <div className="top relative">
          <img src={imageUrl} alt="" />
          <span className="absolute right-4 bottom-4 text-white text-2xl">
            <FaHeart className="mr-2" /> <FaExchangeAlt />
          </span>
          <div className="overlay absolute inset-0 bg-teal-500 opacity-0 hover:opacity-100 transition duration-300"></div>
        </div>
        <div className="bottom p-4 m-10">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="advants mt-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Year</span>
              <div className="flex items-center">
                <FaRegCalendar className="mr-1" />
                <span>{Year}</span>
              </div>
            </div>

            <div className="flex items-center">
              <span className="font-semibold mr-2">Area</span>
              <div className="flex items-center">
                <FaVectorSquare className="mr-1" />
                <span>
                  {area} <span className="text-sm">Acres</span>
                </span>
              </div>
            </div>
          </div>
          <div className="RERA mt-4">
            <span className="block text-sm font-semibold">RERA Number</span>
            <span className="block text-sm font-semibold text-gray">
              {RERA}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
