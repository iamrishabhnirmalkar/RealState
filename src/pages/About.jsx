import React from "react";
import TeamSection from "../components/Team/TeamSection";
import CTA from "../components/call to action/CTA";
import Heading from "../components/Heading/Heading";
import Aboutusheading from "../components/Heading/Aboutusheading";

function About() {
  return (
    <>
      <Heading />
      <Aboutusheading />
      <TeamSection />
      <CTA />
    </>
  );
}

export default About;
