import React from "react";
import styled from "styled-components";
import f2 from "../Images/aboutHero.jpg";
import f22 from "../Images/sub.png";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import BlueAbout from "../Component/BlueAbout";
import MeetTeam from "../Component/MeetTeam";
const AboutPage = () => {
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
      <About>
        <h1>About US</h1>
        <Writeup>
          Santhotad Concept is a leading architectural and construction firm
          based in Nigeria, with a growing footprint in the United States.
          Established in December 2011 and rebranded as Santhotad Concept Plus
          Nigeria Limited in 2019, we have been at the forefront of innovation,
          delivering world-class architectural design, building construction,
          and project management services. Our diverse portfolio spans
          residential, commercial, and institutional projects, including
          schools, hospitals, and religious facilities. By leveraging
          cutting-edge technology, sustainable practices, and a deep
          understanding of client needs, we create structures that harmonize
          functionality, aesthetics, and innovation. At Santhotad Concept, we
          pride ourselves on redefining architectural excellence and setting new
          standards in the built environment.
        </Writeup>
      </About>
      <BlueAbout />
      <MeetTeam />
    </Container>
  );
};

export default AboutPage;

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
  padding: 0 0 0 1rem;
  overflow: hidden;
  h3 {
    @media (min-width: ${breakpoints.xs}) {
      padding: 0 0 0 60px;
      font-size: 68px;
    }
    font-size: 35px;

    line-height: 0.9;
  }
  img {
    max-width: 100%;
    height: 260px;
    @media (min-width: ${breakpoints.xs}) {
      max-width: 100%;
      height: 450px;
    }

    image-resolution: initial;
  }
`;
const About = styled.div`
  display: grid;
  max-width: 1100px;
  padding: 20px;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  @media (min-width: ${breakpoints.xs}) {
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
