import React from "react";
import Hero from "../Component/Hero";
import HeroMoving from "../Component/HeroMoving";
import OurProjects from "../Component/OurProjects";
import AboutUs from "../Component/AboutUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroMoving />
      <OurProjects />
      <AboutUs />
    </>
  );
};

export default HomePage;
