import React from "react";
import styled from "styled-components";
import f2 from "../Images/aboutHero.jpg";
import f22 from "../Images/sub.png";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import missionIcon from "../Images/missionn.png";
import visionIcon from "../Images/vision.png";
import linePattern from "../Images/linnebg.png";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
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

export default AboutPage;

const IntroHero = styled.div`
  background: url(${f2}) center/contain;
`;

const Content = styled.div`
  display: flex;
  height: 360px;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 60px;
  overflow: hidden;
  h3 {
    font-size: 68px;
    line-height: 0.9;
  }
  img {
    max-width: 100%;
    height: 450px;

    image-resolution: initial;
  }
`;
const About = styled.div`
  display: grid;
  max-width: 1100px;
  padding: 20px;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  h1 {
    font-size: 40px;
  }
`;
const Writeup = styled.p`
  line-height: 1.5;
  text-align: justify;
`;
const BlueContent = styled.div`
  background: ${Colors.blue};
  margin-bottom: 100px;
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
