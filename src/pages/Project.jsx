import React from "react";
import Heading from "../components/Heading/Heading";
import CTA from "../components/call to action/CTA";
import Projectheading from "../components/Heading/Projectheading";
import ProjectBox from "../components/PorjectCompo/ProjectBox";

function Project() {
  return (
    <>
      <Heading />
      <Projectheading />
      <ProjectBox />

      <CTA />
    </>
  );
}

export default Project;
