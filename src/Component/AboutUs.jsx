import React from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import missionIcon from "../Images/missionn.png";
import visionIcon from "../Images/vision.png";
import linePattern from "../Images/linnebg.png";
import { Link } from "react-router-dom";
import BlueAbout from "./BlueAbout";
const AboutUs = () => {
  return (
    <>
      <Heading>
        <h4>About Us</h4>
        <Line />
        <CtaButton>
          Read More
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <Content>
        <h1>We believe in excellence </h1>
        <p>
          we are dedicated to designing spaces that inspire, connect, and stand
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
  align-items: center;
  justify-content: center;
  gap: 20px;

  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
  }
`;
const Line = styled.div`
  width: 900px;
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
  padding: 20px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 50px;
    max-width: 270px;
    margin: 0;
    line-height: 0.9;
    padding: 0;
  }
  p {
    margin: 0;
    line-height: 1.5;
    padding: 0;
  }
`;
