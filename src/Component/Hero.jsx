import React from "react";
import { Link, Links } from "react-router-dom";

import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import heroImg from "../Images/heroSent.png";
const Hero = () => {
  return (
    <Container>
      <TextPart>
        <Head>Transforming Visions into Exquisite Realities</Head>
        <MiniText>
          Welcome to our architect website, where innovation meets design
          excellence
        </MiniText>

        <CtaButton>View our projects</CtaButton>
      </TextPart>

      <HeroImage>
        <img src={heroImg} />
      </HeroImage>
    </Container>
  );
};

export default Hero;
const Container = styled.div`
  padding-top: 60px !important;
  padding-left: 60px;
  height: 55vh;
  display: flex;
  position: relative;
  grid-template-columns: 60% 40%;
`;
const TextPart = styled.div``;
const Head = styled.h1`
  font-size: 55px;
  font-weight: bold;
  color: ${Colors.ashBlack};
  max-width: 550px;
  margin: 0;
  padding-bottom: 15px;
`;

const MiniText = styled.p`
  font-size: 22px;
  font-weight: 100 !important;
  color: #1e1e1e;

  line-height: 1.3;
  max-width: 450px;
  padding-bottom: 15px;
`;
const HeroImage = styled.div`
  position: absolute;
  right: 0 !important;
  top: 30px;
  /* max-width: 70vw; */
  img {
    max-width: 100%;
    width: 950px;
    max-height: 450px;
    /* height: auto; */
  }
`;

const CtaButton = styled(Link)`
  text-decoration: none;
  display: inline-block !important;
  background: ${Colors.blue};
  border-radius: 5px;
  padding: 10px;
  color: ${Colors.white};
`;
