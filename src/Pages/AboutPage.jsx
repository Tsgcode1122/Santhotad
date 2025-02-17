import React, { useEffect } from "react";
import styled from "styled-components";
import f2 from "../Images/aboutHero.jpg";
import f22 from "../Images/sub.png";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";

import BlueAbout from "../Component/BlueAbout";
import MeetTeam from "../Component/MeetTeam";
import SectionDiv from "../FixedComponent/SectionDiv";
import MeetTeamSmall from "../Component/MeetTeamSmall";
import ServicesSmall from "../Component/ServicesSmall";
import Services from "../Component/Services";
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <IntroHero>
        <Content>
          <h3>
            We believe in <br /> excellence
          </h3>
          <img src={f22} />
        </Content>
      </IntroHero>
      <SectionDiv>
        <About>
          <h1>About US</h1>
          <Writeup>
            Santhotad Concept is a leading architectural and construction firm
            based in Nigeria, with a growing footprint in the United States.
            Established in December 2011 and rebranded as Santhotad Concept Plus
            Nigeria Limited in 2019, we have been at the forefront of
            innovation, delivering world-class architectural design, building
            construction, and project management services. Our diverse portfolio
            spans residential, commercial, and institutional projects, including
            schools, hospitals, and religious facilities. By leveraging
            cutting-edge technology, sustainable practices, and a deep
            understanding of client needs, we create structures that harmonize
            functionality, aesthetics, and innovation. At Santhotad Concept, we
            pride ourselves on redefining architectural excellence and setting
            new standards in the built environment.
          </Writeup>
        </About>
      </SectionDiv>
      <BlueAbout />
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
    </Container>
  );
};

export default AboutPage;
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
const Container = styled.div``;
const IntroHero = styled.div`
  background: url(${f2}) center/contain;
`;

const Content = styled.div`
  display: flex;
  height: 260px;
  @media (min-width: ${breakpoints.xs}) {
    height: 360px;
  }
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 1.5rem;
  overflow: hidden;
  @media (min-width: ${breakpoints.m}) {
    padding: 0 0 0 2rem;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: 0 0 0 3rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    padding: 0 0 0 6rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1290px;

    margin: 0 0 0 auto;
  }

  h3 {
    font-size: 35px;

    line-height: 0.9;
    @media (min-width: ${breakpoints.xs}) {
      line-height: 1.2;
      font-size: 40px;
    }
    @media (min-width: ${breakpoints.sm}) {
      line-height: 1.2;
      font-size: 56px;
    }
    @media (min-width: ${breakpoints.md}) {
      font-size: 60px;
    }
    @media (min-width: ${breakpoints.lg}) {
      font-size: 60px;
    }
  }
  img {
    max-width: 100%;
    height: 260px;
    @media (min-width: ${breakpoints.xs}) {
      max-width: 100%;
      height: 450px;
    }
    @media (min-width: ${breakpoints.md}) {
      max-width: 100%;
      height: 550px;
    }

    image-resolution: initial;
  }
`;
const About = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  h1 {
    margin: 10px 0;
    font-size: 30px;
    @media (min-width: ${breakpoints.xs}) {
      font-size: 40px;
    }
  }
`;
const Writeup = styled.p`
  line-height: 1.5;
  text-align: justify;
`;
