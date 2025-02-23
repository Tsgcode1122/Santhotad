import React, { useEffect } from "react";
import Hero from "../Component/Hero";
import HeroMoving from "../Component/HeroMoving";
import OurProjects from "../Component/OurProjects";
import AboutUs from "../Component/AboutUs";
import Services from "../Component/Services";
import Testimonial from "../Component/Testimonial";
import MeetTeam from "../Component/MeetTeam";
import Blogpost from "../Component/Blogpost";
import MeetTeamSmall from "../Component/MeetTeamSmall";
import styled from "styled-components";
import { breakpoints } from "../FixedComponent/BreakPoints";
import ServicesSmall from "../Component/ServicesSmall";
import WhyChooseUs from "../Component/WhyChooseUs";
import { useLocation } from "react-router-dom";
import NavbarAll from "../Component/NavbarAll";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // Extract the section ID from the URL hash
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -50; // Adjust spacing for smooth scroll
          const targetPosition =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 500); // Allow time for the page to load before scrolling
    }
  }, [location]);
  return (
    <>
      <Hero />
      <NavbarAll />
      <WhyChooseUs />
      <Scroll id="project">
        <OurProjects />
      </Scroll>
      <Scroll id="about">
        <AboutUs />
      </Scroll>
      <HideBig>
        <MeetTeamSmall />
      </HideBig>
      <HideSmall>
        <MeetTeam />
      </HideSmall>
      <HideBig>
        <ServicesSmall />
      </HideBig>
      <HideSmall>
        <Scroll id="service">
          <Services />
        </Scroll>
      </HideSmall>

      <Blogpost />
      <Testimonial />
    </>
  );
};

export default HomePage;
const Scroll = styled.div``;
const HideBig = styled.div`
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.m}) {
    display: block;
  }
`;
