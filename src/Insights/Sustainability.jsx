import React from "react";
import { Card, Progress } from "antd";
import styled from "styled-components";
import {
  ExclamationCircleOutlined,
  TeamOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { LuFocus } from "react-icons/lu";
import { PiRecycle } from "react-icons/pi";
import { GoArrowDownRight } from "react-icons/go";
import { TbCloudCog } from "react-icons/tb";
import ChartImage from "../Images/varience.png";
const Sustainability = () => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <h2>Sustainable Material Decisions</h2>
        <p>
          Make eco-friendly choices without compromising on quality or cost.
        </p>
      </Header>
      {/* Predictive Risk Section */}
      <CardContainer>
        <h3>Predictive Risk</h3>
        <RiskCards>
          <RiskCard active>
            <div className="title">
              <GoArrowDownRight />
              Carbon Reduction
            </div>
            <div className="sub">40%</div>
          </RiskCard>

          <RiskCard>
            <div className="title">
              <PiRecycle /> Recycled Content
            </div>

            <div className="sub">30%</div>
          </RiskCard>

          <RiskCard>
            <div className="title">
              <LuFocus /> Life Cycle Impact
            </div>
            <div className="risk">
              <span className="moderate">Low</span>
            </div>
          </RiskCard>
        </RiskCards>
      </CardContainer>
      {/* Project Stats Section */}

      <BottomRow>
        {/* Circle Progress */}
        <CardItem>
          <div>
            <p>Materials Engine</p>
            <h5>
              Sustainability <br /> Score
            </h5>
          </div>
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

        {/* Numbered List */}
        <CardItem2>
          <p>Materials Options</p>
          <ol>
            <li>Bamboo Panels</li>
            <li>Recycled Steel</li>
            <li>Hemp Insulation</li>
          </ol>
        </CardItem2>
      </BottomRow>
    </Wrapper>
  );
};

export default Sustainability;
const CircleWrapper = styled.div`
  display: inline-block;
  transform: rotate(-180deg); /* rotate the whole circle */
  span {
    transform: rotate(-180deg) !important;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 40%;
    left: 30%;
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
  margin: 40px 0 0px 20px;
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
  margin-bottom: 1px;
  border-radius: 10px;
  margin-top: 0;
  border-radius: 10px 10px;
  /* border: 1px solid #ebebebd3; */
  padding: 20px 40px 20px 20px;

  @media screen and (max-width: 699px) {
    padding: 10px;
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
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 40px 20px 20px 20px;
  align-items: stretch; /* make them equal height */
  flex-wrap: wrap;
  @media screen and (max-width: 699px) {
    padding: 10px;
  }
`;

const CardItem = styled.div`
  border: 1px solid #d9d9d9;
  flex: 1 1 0%; /* make sure it grows equally */
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-radius: 10px;
  h5 {
    margin: 0;
    font-weight: 400;
  }

  p {
    color: #666;
    font-size: 14px;
    margin: 0 0 8px;
  }
`;

const CardItem2 = styled.div`
  border: 1px solid #d9d9d9; /* match border with CardItem */
  flex: 1 1 0%; /* equal width with CardItem */
  padding: 20px;
  border-radius: 10px;

  p {
    margin: 0 0 12px;
    color: #666;
    font-size: 14px;
    font-weight: 500;
  }

  ol {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: item;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 6px;
      font-size: 14px;
      color: #333;

      &::before {
        content: "";
        background: #0023d6;
        width: 8px;
        height: 8px;
        border-radius: 2px;
        display: inline-block;
      }
    }
  }
`;
