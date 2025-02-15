import React from "react";
import { Link, Links } from "react-router-dom";

import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import heroImg from "../Images/heroSent.png";
import { breakpoints } from "../FixedComponent/BreakPoints";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <TextPart>
          <Head>Transforming Visions into Exquisite Realities</Head>
          <MiniText>
            Welcome to our architect website, where innovation meets design
            excellence
          </MiniText>

          <CtaButton to="/project">View our projects</CtaButton>
        </TextPart>

        <HeroImage>
          <img src={heroImg} />
        </HeroImage>
      </Container>
    </HeroSection>
  );
};

export default Hero;
const HeroSection = styled.div`
  max-width: 1200;
  margin: 0 0 0 auto;
`;
const Container = styled.div`
  padding-top: 1rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.xs}) {
    padding-top: 2rem;
  }
  @media (min-width: ${breakpoints.sm}) {
    padding-top: 4.5rem;
    padding-left: 2rem;
  }
  @media (min-width: ${breakpoints.m}) {
    padding-top: 5.5rem;
    padding-left: 3rem;
  }
  @media (min-width: ${breakpoints.md}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }

  /* Laptop (lg and above) */
  @media (min-width: ${breakpoints.lg}) {
  }

  /* Desktop (xl and above) */
  @media (min-width: ${breakpoints.xl}) {
  }

  /* 4K Screens (xxl and above) */
  @media (min-width: ${breakpoints.xxl}) {
  }
`;
const TextPart = styled.div``;
const Head = styled.h1`
  line-height: 1.2;
  font-weight: bold;
  /* font-size: 30px; */
  color: ${Colors.ashBlack};

  @media (min-width: ${breakpoints.xs}) {
    max-width: 650px;
    font-size: 55px;
  }
  @media (min-width: ${breakpoints.sm}) {
    font-size: 55px;

    margin: 0;
    padding-bottom: 15px;
  }
  @media (min-width: ${breakpoints.m}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }

  /* Laptop (lg and above) */
  @media (min-width: ${breakpoints.lg}) {
  }

  /* Desktop (xl and above) */
  @media (min-width: ${breakpoints.xl}) {
  }

  /* 4K Screens (xxl and above) */
  @media (min-width: ${breakpoints.xxl}) {
  }
`;

const MiniText = styled.p`
  font-size: 22px;
  font-weight: 200 !important;
  color: #1e1e1e;

  line-height: 1.3;
  max-width: 450px;
  padding-bottom: 15px;
`;
const HeroImage = styled.div`
  right: 0 !important;
  z-index: -1;
  margin-top: -40px;
  @media (min-width: ${breakpoints.xs}) {
    margin-top: -100px;
  }
  @media (min-width: ${breakpoints.sm}) {
    margin-top: -150px;
  }
  @media (min-width: ${breakpoints.m}) {
    margin-top: -200px;
  }
  @media (min-width: ${breakpoints.md}) {
    position: absolute;
    padding-top: 60px !important;
    padding-left: 60px;
    height: 55vh;
    top: 30px;
    margin-top: 0;
    display: flex;
    position: relative;
    grid-template-columns: 60% 40%;
  }

  /* Laptop (lg and above) */
  @media (min-width: ${breakpoints.lg}) {
  }

  /* Desktop (xl and above) */
  @media (min-width: ${breakpoints.xl}) {
  }

  /* 4K Screens (xxl and above) */
  @media (min-width: ${breakpoints.xxl}) {
  }
  img {
    max-width: 100%;
    /* width: 950px; */
    /* max-height: 450px; */
    @media (min-width: ${breakpoints.xs}) {
      /* width: 150px; */
    }
  }
`;

const CtaButton = styled(Link)`
  text-decoration: none;
  /* display: inline-block !important; */
  background: ${Colors.blue};
  border-radius: 5px;
  padding: 10px;
  color: ${Colors.white};
  cursor: pointer;
  z-index: 99;
`;
