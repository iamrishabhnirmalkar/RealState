import React from "react";
import CTA from "../components/call to action/CTA";
import Homepart1Section from "../components/Home/Homepart1Section";
import Trust from "../components/Feature/Trust";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Homepart1Section />
      <Trust />
      <CTA />
      <Testimonials />
    </>
  );
}

export default Home;
