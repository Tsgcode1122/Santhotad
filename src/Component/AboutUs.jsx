import React from "react";
import styled from "styled-components";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Link } from "react-router-dom";
import BlueAbout from "./BlueAbout";
const AboutUs = () => {
  return (
    <>
      <SectionDiv>
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
            We are dedicated to designing spaces that inspire, connect, and
            stand the test of time. With a focus on innovation and excellence,
            we create unique architectural solutions tailored to meet the needs
            of homeowners, developers, and businesses.
          </p>
        </Content>
      </SectionDiv>
      <BlueAbout />
    </>
  );
};

export default AboutUs;

const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px; /* Adjust for spacing */

  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
    white-space: nowrap; /* Prevents text wrapping */
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #aaaaaa;
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

  gap: 20px;
  flex: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  justify-content: space-between;
  /* align-items: center; */
  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
  h1 {
    font-size: 35px;

    margin: 0;
    line-height: 0.9;
    padding: 0;
    @media (min-width: ${breakpoints.xs}) {
      font-size: 40px;
      line-height: 1.2;
      max-width: 570px;
    }
    @media (min-width: ${breakpoints.m}) {
      line-height: 1.2;
      font-size: 45px;
      max-width: 380px;
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    padding: 0;
  }
`;
