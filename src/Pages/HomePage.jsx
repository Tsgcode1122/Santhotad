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

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero />
      <HeroMoving />
      <OurProjects />
      <AboutUs />
      {/* <MeetTeam /> */}
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
        <Services />
      </HideSmall>

      <Blogpost />
      <Testimonial />
    </>
  );
};

export default HomePage;
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
