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
import SectionDiv from "../FixedComponent/SectionDiv";
import MeetTeam from "../Component/MeetTeam";
import { breakpoints } from "../FixedComponent/BreakPoints";
const BlueAbout = () => {
  return (
    <>
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

export default BlueAbout;

const BlueContent = styled.div`
  background: ${Colors.blue};
  margin-bottom: 40px;
`;
const GridLine = styled.div`
  background: url(${linePattern});
  display: grid;

  max-width: 800px;

  padding: 80px 60px;
  gap: 20px;
  margin: 0 auto;

  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`;
const Mission = styled.div`
  border-radius: 10px;
  background: ${Colors.white};
  @media (min-width: ${breakpoints.m}) {
  }
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
    font-weight: 250;
    line-height: 1.3;
  }
  h5 {
    margin: 0;
    font-weight: 400;
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
  @media (min-width: ${breakpoints.m}) {
    /* max-width: 350px; */
  }
  padding: 40px 20px 20px 20px;
  img {
    max-width: 100%;
    width: 70px;
    height: 70px;
  }
  p {
    font-weight: 250;

    line-height: 1.3;
    @media (min-width: ${breakpoints.m}) {
    }
  }
  h5 {
    margin: 0;
    font-weight: 400;
  }
`;
