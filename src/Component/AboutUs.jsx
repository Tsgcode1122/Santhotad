import React from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import missionIcon from "../Images/missionn.png";
import visionIcon from "../Images/vision.png";
import linePattern from "../Images/linnebg.png";
import { Link } from "react-router-dom";
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
      <BlueContent>
        <GridLine>
          <Mission>
            <img src={missionIcon} />
            <h5>MISSION</h5>

            <p>
              To transform architectural and construction practices by
              integrating innovative designs, cutting-edge technologies, and
              sustainable solutions. We are committed to exceeding client
              expectations and creating structures that inspire and stand the
              test of time.
            </p>
          </Mission>
          <Vision>
            <img src={visionIcon} />
            <h5>VISION</h5>
            <p>
              To be a global leader in architecture and construction, pioneering
              the integration of artificial intelligence, automation, and
              emerging technologies. We aim to redefine industry standards and
              contribute to the advancement of sustainable and intelligent
              architecture worldwide.
            </p>
          </Vision>
        </GridLine>
      </BlueContent>
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
const BlueContent = styled.div`
  background: ${Colors.blue};
`;
const GridLine = styled.div`
  background: url(${linePattern});
  display: flex;
  justify-content: center;
  max-width: 1200px;
  gap: 80px;
  padding: 80px 60px;
`;
const Mission = styled.div`
  border-radius: 10px;
  background: ${Colors.white};
  max-width: 260px;
  padding: 20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    width: 70px;
    height: 70px;
  }
  p {
    font-weight: 100;
    line-height: 1.3;
  }
  h5 {
    margin: 0;
    font-weight: 200;
  }
`;
const Vision = styled.div`
  border-radius: 10px;
  background: ${Colors.white};
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 260px;
  padding: 40px 20px 20px 20px;
  img {
    max-width: 100%;
    width: 70px;
    height: 70px;
  }
  p {
    font-weight: 100;
    line-height: 1.3;
  }
  h5 {
    margin: 0;
    font-weight: 200;
  }
`;
