import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
