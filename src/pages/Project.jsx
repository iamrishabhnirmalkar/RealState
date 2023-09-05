import React from "react";
import Heading from "../components/Heading/Heading";
import CTA from "../components/call to action/CTA";
import Projectheading from "../components/Heading/Projectheading";
import ProjectBox from "../components/PorjectCompo/ProjectBox";
import Box from "../components/PorjectCompo/Box";

function Project() {
  return (
    <>
      <Heading />
      <Projectheading />
      <ProjectBox />
      <Box />
      <CTA />
    </>
  );
}

export default Project;
