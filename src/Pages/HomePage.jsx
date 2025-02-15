import React from "react";
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
const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroMoving />
      <OurProjects />
      <AboutUs />
      <MeetTeam />
      {/* <HideBig>
        <MeetTeamSmall />
      </HideBig>
      <HideSmall>
        <MeetTeam />
      </HideSmall> */}
      <Services />
      <Blogpost />
      <Testimonial />
    </>
  );
};

export default HomePage;
const HideBig = styled.div`
  @media (min-width: ${breakpoints.xs}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;
  @media (min-width: ${breakpoints.xs}) {
    display: block;
  }
  @media (min-width: ${breakpoints.sm}) {
  }
`;
