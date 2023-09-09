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
      Img: "Image/Property/Windchimes02.jpg",
      Details: "2023",
      icon: <FaRegCalendar />,
    },

    {
      Title: "Power Emperia Gold",
      Num: "PCGRERA290121001188",
      Discription:
        "Our tastefully designed 2 & 3 BHK Homes, will introduce you to a unique lifestyle never experienced before what we like to call, the good life. Power Emperia Gold depicts the address for connoisseurs of luxurious urban lifestyle, the broad open decks make way for natural light pleasant breeze and breathtakingly beautiful views.",
      Img: "Image/power-emperia.jpg",
      Details: "2023",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Power Emperia Rise",
      Num: "PCGRERA110319000934",
      Discription:
        "The concept of the project Power Emperia Rise is developed with the idea of creating homes that should be perfect in all respects for an upwardly mobile and modern family.        Well-defined spaces to create enchanting interiors at Power Emperia Rise, the hotbed of all leisure and social activity will be the landscaped Garden area, which will be developed as a recreation zone for all the residents.",
      Img: "Image/Property/Windchimes06.jpg",
      Details: "2019-2021",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Power City Phase-3",
      Num: "PCGRERA050618000047",
      Discription:
        "Power City Phase III is a residential development of Power Group. It offers extensive residential apartments, giving a higher edge to your luxurious lifestyle goals.        The apartment houses are aesthetically designed and located at various places in the city, ensuring that you have a convenient place to stay close to your work, school, and entertainment areas.",
      Img: "Image/power-phase-3.png",
      Details: "2016-2019",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Swarna City",
      Num: "PCGRERA130618000134",
      Discription:
        "WSwarna City is a commercial development of Power Group, which offers extensive mercantile apartments. You’ll love the slick modern design and the location that’s convenient for all your needs. Whether you’re looking for a home or an investment property, you can find it here.",
      Img: "Image/swarna-city (1).png",
      Details: "2016-2018",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Power Emperia Blu",
      Num: "PCGRERA060618000060",
      Discription:
        "Power Emperia Blu is one of the residential developments of Power Group, offering spacious and skillfully designed 2 BHK and 3 BHK apartments. The project is well-equipped with all the basic amenities to facilitate the needs of the residents.",
      Img: "Image/power-emperia.jpg",
      Details: "2012-2012",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Power Emperia",
      Num: "PCGRERA110319000934",
      Discription:
        "WA full-fledged residential development of Power Group, it is a premier property developer in the Chhattisgarh real estate sector. It offers a broad range of high-class residential apartments for sale. It offers extensive residential apartments and provides you with all the basic amenities you need in life.",
      Img: "Image/power-emperia.jpg",
      Details: "2012-2015",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Power City Phase-2",
      Num: "PCGRERA200618000242",
      Discription:
        "Power City Phase II is a residential development of Power Group. It offers extensive residential apartments, giving a higher edge to your luxurious lifestyle goals. Power City Phase II is a residential development of Power Group. It offers extensive residential apartments, giving a higher edge to your luxurious lifestyle goals..",
      Img: "Image/power city phase 2/Picture 012.jpg",
      Details: "2010-2012",
      icon: <FaRegCalendar />,
    },
    {
      Title: "Power City Phase-1",
      Num: "PCGRERA300618000428",
      Discription:
        "The apartments are beautifully designed and built to live up to the expectations of the finest living lifestyle. With generous balcony terraces and balconies, it gives you the best views in the city.    The apartments are beautifully designed and built to live up to the expectations of the finest living lifestyle. With generous balcony terraces and balconies, it gives you the best views in the city.",
      Img: "Image/power city phase 2/Picture 014.jpg",
      Details: "2006-2009",
      icon: <FaRegCalendar />,
    },
  ];
  return (
    <>
      <div className="bg-secondary">
        <div className=" px-5 py-24 ">
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
