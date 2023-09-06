import React from "react";
import Box from "./box"; // Corrected import statement

import { FaRegCalendar } from "react-icons/fa";

function projectbox() {
  const Boxdetails = [
    {
      Title: "Windchimes",
      Num: "PCGRERA110319000934",
      Discription:
        "With an experience of more than 12 years in the Real Estate Sector, our primary focus has ever since been on comfort living with modern amenities and facilities. We created a living environment coupled with utmost satisfaction. With Wind Chimes, we are set to bring in 2 BHK, 2.5 BHK, 3 BHK, and 4 BHK homes which are designed to provide a very comfortable, convenient, and elegant lifestyle to our customers.",
      Img: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Details: "2012-2012",
      icon: <FaRegCalendar size={25} />,
    },
    {
      Title: "Wind545chimes",
      Num: "PCGRERA114540319000934",
      Discription:
        "With an experience of more than 12 years in the Real Estate Sector, our primary focus has ever since been on comfort livin545g with modern amenities and facilities. We created a living environment coupled with utmost satisfaction4. With Wind Chimes, we are set to bring in 2 BHK, 2.5 BHK, 3 BHK, and 4 BHK homes which are designed to provide a very comfortable, convenient, and elegant lifestyle to our customers.",
      Img: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Details: "2012-2012",
      icon: <FaRegCalendar size={25} />,
    },
  ];
  return (
    <>
      <div className="bg-primary">
        <div>
          {Boxdetails.map((items) => (
            <Box
              key={items.Num}
              Title={items.Title}
              Num={items.Num}
              Discription={items.Discription}
              Img={items.Img}
              Details={items.Details}
              icon={items.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default projectbox;
