import React from "react";
import CTA from "../components/call to action/CTA";
import Homepart1Section from "../components/Home/Homepart1Section";
import Trust from "../components/Feature/Trust";
import Testimonials from "../components/Testimonials/Testimonials";
import Property from "../components/PropertyCard/Property";
import Timeline from "../components/Timeline/Timeline";

function Home() {
  return (
    <>
      <Homepart1Section />
      <Property />
      <Trust />
      <Testimonials />
      {/* <Timeline /> */}
      <CTA />
    </>
  );
}

export default Home;
