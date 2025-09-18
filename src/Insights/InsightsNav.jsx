import React, { useState } from "react";
import { Tabs } from "antd";
import styled from "styled-components";

// import your components
import ProjectIntelligence from "./ProjectIntelligence";
import Sustainability from "./Sustainability";
import UrbanPlanning from "./UrbanPlanning";
import WorkforceSafety from "./WorkforceSafety";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";

const InsightsNav = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      label: "WorkforceSafety",
      key: "1",
      children: <WorkforceSafety />,
    },
    {
      label: "Project Intelligence",
      key: "2",
      children: <ProjectIntelligence />,
    },
    {
      label: "Sustainability",
      key: "3",
      children: <Sustainability />,
    },
    {
      label: "UrbanPlanning",
      key: "4",
      children: <UrbanPlanning />,
    },
  ];

  return (
    <>
      <div style={{ marginTop: "2rem", marginBottom: "4rem" }}>
        <ContentWrapper>
          <StyledTabs
            activeKey={activeKey}
            onChange={setActiveKey}
            type="card"
            animated
            items={items.map((item) => ({
              ...item,
              label: (
                <div
                  onMouseEnter={() => setActiveKey(item.key)} // 👈 switch on hover
                >
                  {item.label}
                </div>
              ),
            }))}
          />
        </ContentWrapper>
      </div>
    </>
  );
};

export default InsightsNav;
const ContentWrapper = styled.div`
  padding: 1rem 1rem;
  @media screen and (max-width: 320px) {
    padding: 2rem 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 2rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 2rem 1.2rem;
  }
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2.5rem;
  }
  @media (min-width: ${breakpoints.m}) {
    padding: 10px 40px;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: 2rem 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1150px;
    padding: 2rem 0rem;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1200px;
    padding: 2rem 0rem;
    margin: 0 auto;
  }
`;

// ---------- styles ----------
const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0; /* tighter to content */
  }

  .ant-tabs-tab {
    background: #f6f6f6 !important;
    color: black !important;
    border-radius: 6px 6px 0 0;
    padding: 6px 14px !important;
    margin-right: 2px !important;
    transition: all 0.3s ease;
    border: none !important;
    cursor: pointer;
  }

  .ant-tabs-tab:hover {
    background: #0316cd !important;
    color: white !important;
  }

  .ant-tabs-tab-active {
    background: #0316cd !important;
    color: white !important;
    /* font-weight: 500; */
  }

  .ant-tabs-tab-btn {
    color: inherit !important;
  }

  .ant-tabs-ink-bar {
    display: none;
  }
`;
