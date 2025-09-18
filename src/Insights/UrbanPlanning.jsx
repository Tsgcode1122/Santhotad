import React from "react";
import styled from "styled-components";
import { Slider } from "antd";
import { GoArrowRight } from "react-icons/go";
import map from "../Images/map.png";

const UrbanPlanning = () => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <h2>Urban Planning Intelligence</h2>
        <p>Smarter siting and massing for urban developments.</p>
      </Header>

      {/* Main Card */}
      <CardContainer>
        <Top>
          {/* Left Column */}
          <Section>
            <h4>Site Overview</h4>
            <Label>Selected Site</Label>
            <Value bold>37 Riverside Ave.</Value>
          </Section>

          {/* Middle Column */}
          <Section>
            <h4>Site Filters</h4>
            <Row>
              <LabelTop>Lot Size</LabelTop>
              <StyledSlider defaultValue={40} disabled />
            </Row>

            <Row>
              <LabelTop>Accessibility</LabelTop>
              <StyledSlider defaultValue={70} disabled />
            </Row>

            <Row>
              <LabelTop>
                Zoning Residential <GoArrowRight />
              </LabelTop>
            </Row>
          </Section>

          {/* Right Column */}
          <Section>
            <h4 style={{ visibility: "hidden" }}>Values</h4>
            <Row2>
              <span>Area</span>
              <Value>2.5m</Value>
            </Row2>
            <Row2>
              <span>High</span>
            </Row2>
            <Row2>
              <span>Zoning</span>
              <Value style={{ marginLeft: "-14px" }}>Residential</Value>
            </Row2>
          </Section>
        </Top>

        {/* Map */}
        <BottomRow>
          <MapPlaceholder src={map} alt="map" />
        </BottomRow>
      </CardContainer>
    </Wrapper>
  );
};

export default UrbanPlanning;
const StyledSlider = styled(Slider)`
  margin-bottom: 0 !important;
  margin-left: -1px;
  &.ant-slider-disabled {
    .ant-slider-track {
      background-color: #0316cd !important; /* filled part */
    }
    .ant-slider-rail {
      background-color: #d8d9f9 !important; /* rail */
    }
    .ant-slider-handle {
      border-color: #0316cd !important;
      background-color: #0316cd !important;
    }
  }
`;

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
  margin: 40px 0 20px 0px;
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
    max-width: 380px;
  }
`;

const CardContainer = styled.div`
  border: 1px solid #ebebebd3;
  border-radius: 10px;
  padding: 20px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const LabelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
  margin: 0px;
  line-height: 0.2;
  font-weight: 500;
  padding: 0px;
  svg {
    font-size: 16px;
    margin-left: 6px;
    color: #0316cd;
  }
`;

const Section = styled.div`
  h4 {
    font-weight: 500;
    margin: 0 0 12px;
    color: #000;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column; /* stack label on top of slider */
  width: 80%; /* full width */
  margin-bottom: 18px;
  @media screen and (max-width: 699px) {
    width: 100%;
  }
  .ant-slider {
    width: 100%; /* slider fills the row */
  }
`;
const Row2 = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 18px;
  text-align: center;
  margin-top: -2px;
`;

const Label = styled.span`
  display: block;
  font-size: 14px;
  width: 100%;

  color: #666;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 14px;
  /* text-align: center; */
`;

const BottomRow = styled.div`
  margin-top: 10px;
`;

const MapPlaceholder = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (max-width: 699px) {
    height: 100px;
    object-position: top;
    /* object-fit: contain; */
  }
`;
