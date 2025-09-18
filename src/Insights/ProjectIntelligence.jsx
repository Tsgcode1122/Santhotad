import React from "react";
import { Card, Progress } from "antd";
import styled from "styled-components";
import {
  ExclamationCircleOutlined,
  TeamOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { LuBrickWall } from "react-icons/lu";
import { GoArrowDownRight } from "react-icons/go";
import { TbCloudCog } from "react-icons/tb";
import ChartImage from "../Images/varience.png";
const ProjectIntelligence = () => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <h2>Predictive Project Intelligence</h2>
        <p>
          Stay ahead of risks and delays with real-time insights into project
          health.
        </p>
      </Header>

      {/* Predictive Risk Section */}
      <CardContainer>
        <h3>Predictive Risk</h3>
        <RiskCards>
          <RiskCard active>
            <div className="title">
              <LuBrickWall /> Cement Lag
            </div>
            <div className="sub">Within 10 days</div>
          </RiskCard>

          <RiskCard>
            <div className="title">
              <GoArrowDownRight /> Labor Shortage
            </div>
            <div className="risk">
              Risk <span className="high">High</span>
            </div>
          </RiskCard>

          <RiskCard>
            <div className="title">
              <TbCloudCog /> Weather Impact
            </div>
            <div className="risk">
              Risk <span className="moderate">Moderate</span>
            </div>
          </RiskCard>
        </RiskCards>
      </CardContainer>

      {/* Project Stats Section */}
      <BottomRow>
        {/* Circle Progress */}
        <CardItem>
          <h4>Project Health</h4>
          <CircleWrapper>
            <Progress
              type="circle"
              percent={80}
              width={100}
              showInfo={false}
              strokeWidth={18}
              strokeColor="#0023d6"
              trailColor="#dbdeef"
            />
            <span
              style={{
                color: "black",
                fontWeight: "500",
              }}
            >
              80%
            </span>
          </CircleWrapper>
        </CardItem>

        <CardItem3>
          <h4>Cost Variance</h4>
          <ChartPlaceholder src={ChartImage} />
        </CardItem3>

        {/* Predictive Progress */}
        <CardItem2>
          <h4>Predictive Project Intelligence</h4>
          <ProgressWrapper>
            <p>On-Time Completion</p>
            <Progress
              percent={60}
              strokeColor="#0023d6"
              trailColor="#e0e0e0"
              showInfo={false} // we'll place custom text
            />
            <span className="progress-text">60%</span>
          </ProgressWrapper>
        </CardItem2>
      </BottomRow>
    </Wrapper>
  );
};

export default ProjectIntelligence;
const CircleWrapper = styled.div`
  display: inline-block;
  transform: rotate(-180deg); /* rotate the whole circle */
  span {
    transform: rotate(-180deg) !important;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 40%;
    left: 35%;
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  border: 1px solid #d9d9d9;
  padding: 15px 20px;
  border-radius: 8px;
  .ant-progress {
    height: 24px; /* custom bar height */
    border-radius: 2px !important;
  }

  .ant-progress-bg {
    height: 24px !important; /* force fill height */
    border-radius: 5px;
  }

  .progress-text {
    position: absolute;
    top: 50%;
    left: 45%;

    color: white;
    font-weight: bold;
  }
`;
// ---------------- styled-components ----------------
const Wrapper = styled.div`
  padding: 20px 80px 20px 20px;
  background: #fff;
  border-radius: 10px;
  border-radius: 0 0 10px 10px;
  border: 1px solid #ebebeb;
  @media screen and (max-width: 699px) {
    padding: 20px 20px;
  }
`;

const Header = styled.div`
  margin: 40px 0 20px 20px;
  @media screen and (max-width: 699px) {
    margin-top: 10px;
    margin-left: 0px;
  }
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
    max-width: 320px;
  }
`;

const CardContainer = styled.div`
  margin-bottom: 50px;
  border-radius: 10px;

  border-radius: 10px 10px;
  border: 1px solid #ebebebd3;
  padding: 20px 40px 20px 20px;
  @media screen and (max-width: 699px) {
    padding: 20px;
  }
  h3 {
    font-weight: 500;
  }
`;

const RiskCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 46px;
  margin-top: 12px;
  @media screen and (max-width: 499px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 699px) {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const RiskCard = styled.div`
  flex: 1;
  height: 5rem;
  max-width: 170px;
  @media screen and (max-width: 699px) {
    max-width: 100%;
  }
  border: 1px solid ${({ active }) => (active ? "transparent" : "#0023d6")};
  border-radius: 5px;
  padding: 10px 15px;
  background: ${({ active }) => (active ? "#0023d6" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-weight: 400;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sub {
    font-size: 14px;
    opacity: 0.9;
    text-align: end;
  }

  .risk {
    text-align: end;
    font-size: 14px;

    span.high {
      color: #bf0000;
      font-weight: 500;

      margin-left: 1rem;
    }
    span.moderate {
      color: #bf8200;
      font-weight: 500;
      margin-left: 1rem;
    }
  }
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 22.5% 22.5% 45%;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid #ebebebd3;
  padding: 40px 40px 20px 20px;
  align-items: center;
  @media screen and (max-width: 699px) {
    padding: 20px 20px 20px 20px;
    border: none;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    & > :nth-child(3) {
      grid-column: auto;
    }
  }
`;

const CardItem = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 16px;
  background: #fff;

  /* height: 9rem; */
  h4 {
    margin-bottom: 12px;
    font-weight: 300;
    margin-top: 0;
  }

  p {
    margin: 0 0 8px;
    color: #666;
  }
`;
const CardItem3 = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  /* padding: 16px; */
  background: #fff;
  overflow: hidden;
  height: 11rem;
  h4 {
    margin-bottom: 12px;
    font-weight: 300;
    margin-top: 16px;
    margin-left: 16px;
  }

  p {
    margin: 0 0 8px;
    color: #666;
  }
`;
const CardItem2 = styled.div`
  h4 {
    margin-bottom: 12px;
    font-weight: 300;
    margin-top: 0;
  }

  p {
    margin: 0 0 8px;
    color: #666;
    font-size: 14px;
  }
`;
const ChartPlaceholder = styled.img`
  max-width: 100%;
  /* height: 11rem; */
  object-fit: contain;
  /* background: linear-gradient(180deg, #e0e8ff, #f7f9ff); */
`;
