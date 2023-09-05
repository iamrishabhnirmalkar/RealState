import React from "react";
import ContactSection from "../components/Contact/ContactSection";
import ContactSection02 from "../components/Contact/ContactSection02";
import Heading from "../components/Heading/Heading";
import CTA from "../components/call to action/CTA";

export default function Contact() {
  return (
    <>
      <Heading />
      <ContactSection02 />
      <ContactSection />
      <CTA />
    </>
  );
}
