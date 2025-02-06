import React from "react";
import Hero from "../Component/Hero";
import HeroMoving from "../Component/HeroMoving";
import OurProjects from "../Component/OurProjects";
import AboutUs from "../Component/AboutUs";
import Services from "../Component/Services";
import Testimonial from "../Component/Testimonial";
import MeetTeam from "../Component/MeetTeam";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroMoving />
      <OurProjects />
      <AboutUs />
      <MeetTeam />
      <Services />
      <Testimonial />
    </>
  );
};

export default HomePage;
