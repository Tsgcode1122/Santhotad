import React from "react";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Link } from "react-router-dom";
import BlueAbout from "./BlueAbout";
const AboutUs = () => {
  return (
    <>
      <Heading>
        <h4>About Us</h4>
        <Line />
        <CtaButton to="/about">
          Read More
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <Content>
        <h1>We believe in excellence </h1>
        <p>
          We are dedicated to designing spaces that inspire, connect, and stand
          the test of time. With a focus on innovation and excellence, we create
          unique architectural solutions tailored to meet the needs of
          homeowners, developers, and businesses.
        </p>
      </Content>
      <BlueAbout />
    </>
  );
};

export default AboutUs;

const Heading = styled.div`
  display: flex;

  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  gap: 1px;
  @media (min-width: ${breakpoints.xs}) {
    gap: 20px;
  }
  @media (min-width: ${breakpoints.sm}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }

  @media (min-width: ${breakpoints.lg}) {
  }

  @media (min-width: ${breakpoints.xl}) {
  }

  @media (min-width: ${breakpoints.xxl}) {
  }
  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
  }
`;
const Line = styled.div`
  width: calc(60%);
  /* max-width: 200px; */
  height: 1px;
  background: #aaaaaa;
  @media (min-width: ${breakpoints.xs}) {
    width: 900px;
  }
`;
const CtaButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${Colors.blue};
  gap: 3px;
  svg {
    transform: rotate(-45deg);
    color: ${Colors.blue};
  }
`;
const Content = styled.div`
  display: grid;
  padding: 20px 1rem;
  gap: 20px;
  flex:flex-start;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${breakpoints.xs}) {
    padding: 20px 80px;
  }
  h1 {
    font-size: 35px;

    margin: 0;
    line-height: 0.9;
    padding: 0;
    @media (min-width: ${breakpoints.xs}) {
      font-size: 40px;
      max-width: 270px;
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    padding: 0;
  }
`;
