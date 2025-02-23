import React from "react";
import { Link, Links } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import heroImg from "../Images/heroSent.png";
import f2 from "../Images/HeroBackground.png";
import { breakpoints } from "../FixedComponent/BreakPoints";
import SwipeComponent from "../Animation/SwipeComponent";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <HeroSection>
      <Container>
        <TextPart>
          <Head>Transforming Visions into Exquisite Realities</Head>
          <SwipeComponent direction="right-to-left">
            <MiniText>
              Welcome to our architect website, where innovation meets design
              excellence
            </MiniText>
          </SwipeComponent>
          <CtaButton onClick={() => scrollToSection("project")}>
            View Our Project
          </CtaButton>
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
  overflow: hidden;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  @media screen and (max-width: 320px) {
    padding-left: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding-left: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding-left: 1.2rem;
  }
  @media (min-width: ${breakpoints.xs}) {
    padding-top: 2rem;
  }
  @media (min-width: ${breakpoints.sm}) {
    padding-top: 4.5rem;
    padding-left: 2rem;
  }
  @media (min-width: ${breakpoints.m}) {
    height: 40ch;
    background: url(${f2}) center/cover;
    padding-top: 5.5rem;
  }
  @media (min-width: ${breakpoints.md}) {
    padding-top: 5.5rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    height: 55ch;
  }
  @media (min-width: ${breakpoints.xl}) {
  }

  @media (min-width: ${breakpoints.xxl}) {
  }
`;
const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1200px;
    display: grid;

    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 1400px;
    display: grid;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }
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
    display: none;
  }
  @media (min-width: ${breakpoints.md}) {
    top: 30px;
    margin-top: 0;
  }

  @media (min-width: ${breakpoints.md}) {
  }
  img {
    max-width: 100%;
    @media (min-width: ${breakpoints.md}) {
    }
  }
`;
const TextPart = styled.div`
  @media screen and (max-width: 320px) {
    max-width: 280px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 350px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 450px;
  }
  @media (min-width: ${breakpoints.xs}) {
  }

  @media (min-width: ${breakpoints.m}) {
    max-width: 550px;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 750px;
  }
`;
const CtaButton = styled.a`
  text-decoration: none;

  border-radius: 5px;
  padding: 10px;
  color: ${Colors.white};
  cursor: pointer;
  z-index: 99;
  background: linear-gradient(
    40deg,
    #0316cd,
    #1325c4,
    #3f2fcb,
    #071ac8,
    #091edf
  );
  background-size: 200% 200%;

  color: white;
  font-weight: 500;

  text-decoration: none;
  animation: glow 3s infinite ease-in-out;
  /* box-shadow: 0 0 15px rgba(9, 25, 119, 0.7); */

  @keyframes glow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  &:hover {
    /* transform: scale(1.1); */
    box-shadow: 0px 10px 20px rgba(91, 91, 106, 0.3);
    background: ${Colors.lightblue};
  }
`;
const MiniText = styled.p`
  font-size: 22px;
  font-weight: 200 !important;
  color: #1e1e1e;
  @media screen and (max-width: 320px) {
    max-width: 280px;
    font-size: 16px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 360px;
    font-size: 18px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 460px;
    font-size: 20px;
  }
  @media (min-width: ${breakpoints.md}) {
    font-size: 25px;
    max-width: 550px;
  }
  line-height: 1.3;
  max-width: 450px;
  padding-bottom: 15px;
`;
const Head = styled.h1`
  line-height: 1.2;
  font-weight: bold;
  color: ${Colors.ashBlack};
  @media (min-width: ${breakpoints.xs}) {
    font-size: 55px;
  }
  @media (min-width: ${breakpoints.sm}) {
    font-size: 55px;
    max-width: 620px !important;
    margin: 0;
    padding-bottom: 15px;
  }
  @media (min-width: ${breakpoints.m}) {
    font-size: 40px;
  }
  @media (min-width: ${breakpoints.md}) {
    font-size: 45px;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: 55px;
  }
`;
