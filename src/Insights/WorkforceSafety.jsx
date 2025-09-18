import React from "react";
import styled from "styled-components";
import { Progress } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import robot from "../Images/kia.png";
import { breakpoints } from "../FixedComponent/BreakPoints";

const WorkforceSafety = () => {
  const data = [
    { name: "Mon", interaction: 5, cautioned: 9 },
    { name: "Tue", interaction: 5, cautioned: 14 },
    { name: "Wed", interaction: 6, cautioned: 18 },
    { name: "Thurs", interaction: 6, cautioned: 18 },
    { name: "Fri", interaction: 10, cautioned: 25 },
    { name: "Sat", interaction: 4, cautioned: 24 },
    { name: "Sun", interaction: 5, cautioned: 19 },
  ];

  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <h2>Workforce & Safety Optimization</h2>
        <p>Boost productivity while keeping your team safe.</p>
      </Header>

      <MainGrid>
        {/* Left Side */}
        <Left>
          <h1 className="logo">KIAKIA</h1>
          <p className="sub">Fast-Track Workforce Integration</p>
          <RobotImg src={robot} alt="Robot" />
        </Left>

        {/* Right Side */}
        <Right>
          <SplitTop>
            {/* Top Stats */}
            <div>
              <StatsRow>
                <StatBox>
                  <span>Hours</span>
                  <h3>173</h3>
                </StatBox>
                <StatBox>
                  <span>Hours</span>
                  <h3>75%</h3>
                </StatBox>
                <StatBox>
                  <span>Compliance Score</span>
                  <h3>92%</h3>
                </StatBox>
              </StatsRow>

              {/* Progress Bars */}
              <ProgressSection>
                <Label>PPE Usage</Label>
                <StyledProgress percent={90} showInfo={false} />
                <Label>Hazard Awareness</Label>
                <StyledProgress
                  percent={70}
                  showInfo={false}
                  strokeColor="#acaedb"
                />
                <Label>Site Protocols</Label>
                <StyledProgress
                  percent={50}
                  showInfo={false}
                  strokeColor="#d5d7ed"
                />
              </ProgressSection>
            </div>
            {/* Chart */}
            <ChartSection>
              <h4>Collaboration Statistics</h4>
              <Legend>
                <LegendItem color="#0316cd">
                  Worker-Robot Interaction
                </LegendItem>
                <LegendItem color="#d6d6ff">Cautioned</LegendItem>
              </Legend>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="interaction" stackId="a" fill="#0316cd" />
                  <Bar dataKey="cautioned" stackId="a" fill="#d6d6ff" />
                </BarChart>
              </ResponsiveContainer>
            </ChartSection>
          </SplitTop>
          {/* Alerts */}
          <Alerts>
            <h4>Safety Alerts</h4>
            <AlertItem danger>
              <ExclamationCircleOutlined
                style={{
                  color: "#bf0000",
                  marginRight: "8px",
                  marginTop: "5px",
                }}
              />
              <div>
                <strong>Worker Entered Restricted Zone</strong>
                <p>2:17 PM</p>
              </div>
            </AlertItem>
            <AlertItem>
              <ExclamationCircleOutlined
                style={{
                  color: "#999",
                  marginRight: "8px",
                  marginTop: "5px",
                }}
              />
              <div>
                <span>Humanoid Close to Scaffold</span>
                <p>1:48 PM</p>
              </div>
            </AlertItem>
            <AlertItem>
              <ExclamationCircleOutlined
                style={{ color: "#999", marginRight: "8px", marginTop: "5px" }}
              />
              <div>
                <span>Worker Entered Restricted Zone</span>
                <p>2:17 PM</p>
              </div>
            </AlertItem>
          </Alerts>
        </Right>
      </MainGrid>
    </Wrapper>
  );
};

export default WorkforceSafety;

// ---------------- styled-components ----------------
const Wrapper = styled.div`
  padding: 20px 40px;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 699px) {
    padding: 20px 20px;
  }
`;

const Header = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  @media screen and (max-width: 699px) {
    margin-top: 10px;
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
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  .logo {
    font-size: 32px;
    font-weight: bold;
    color: #aaa;
    margin: 0;
  }
  .sub {
    margin: 0 0 20px;
    font-size: 14px;
    color: #666;
  }
`;

const RobotImg = styled.img`
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    max-height: 500px;
    object-fit: contain;
  }
  @media screen and (min-width: 1220px) {
    /* height: 400px; */
    /* object-fit: contain; */
    margin-left: -15px;
  }
  @media screen and (max-width: 699px) {
    max-height: 350px;
    object-position: top;
  }
`;

const SplitTop = styled.div`
  display: grid;
  gap: 30px;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`;
const Right = styled.div``;
const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  span {
    display: block;
    font-size: 12px;
    color: #666;
  }
  h3 {
    margin: 5px 0 0;
    font-size: 18px;
    font-weight: 600;
  }
`;

const ProgressSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  color: #333;
`;

const StyledProgress = styled(Progress)`
  &.ant-progress-line {
    .ant-progress-bg {
      background-color: #0316cd !important;
      height: 10px !important;
      border-radius: 4px;
    }
    .ant-progress-rail {
      background: #d8d9f9 !important;
    }
  }
`;

const ChartSection = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 0;
  }
`;

const Legend = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const LegendItem = styled.span`
  font-size: 12px;
  color: #333;
  &:before {
    content: "⬤";
    display: inline-block;
    margin-right: 6px;
    color: ${({ color }) => color};
  }
`;

const Alerts = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const AlertItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 6px;
  background: ${({ danger }) => (danger ? "#ffeaea" : "#fafafa")};
  color: ${({ danger }) => (danger ? "#bf0000" : "#333")};
  font-size: 14px;
  opacity: ${({ danger }) => (danger ? "1" : "0.6")};
  strong {
    display: block;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #666;
  }
`;
