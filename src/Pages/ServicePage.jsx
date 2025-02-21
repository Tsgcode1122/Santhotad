import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import f2 from "../Images/aboutHero.jpg";
import f22 from "../Images/sub.png";
import { Service } from "../Service";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";
import ServicepageBig from "./ServicepageBig";
import ServicepageSmall from "./ServicepageSmall";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0), [];
  });

  return (
    <>
      <IntroHero>
        <Content>
          <h3>
            Explore <br /> Our Services
          </h3>
          <img src={f22} />
        </Content>
      </IntroHero>
      <SectionDiv>
        <HideBig>
          <ServicepageSmall />
        </HideBig>
        <HideSmall>
          <ServicepageBig />
        </HideSmall>
      </SectionDiv>
    </>
  );
};

export default ServicePage;
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

const HideBig = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;
