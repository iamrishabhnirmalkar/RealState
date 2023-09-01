import React from "react";

import TeamSection from "../components/Team/TeamSection";
import CTA from "../components/call to action/CTA";
import Testimonials from "../components/Testimonials/Testimonials";
import Homepart1Section from "../components/Home/Homepart1Section";

function Home() {
  return (
    <>
      <Homepart1Section />
      <Testimonials />
      <TeamSection />
      <CTA />
    </>
  );
}

export default Home;
