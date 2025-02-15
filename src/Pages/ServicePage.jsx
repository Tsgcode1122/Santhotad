import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Service } from "../Service";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";

const ServicePage = () => {
  const [activeService, setActiveService] = useState(Service[0]);

  return (
    <>
      <SectionDiv>
        <ServiceChanging>
          <LeftSide>
            <h3>{activeService.head}</h3>
            <ImageContainer>
              <img src={activeService.img} alt={activeService.head} />
            </ImageContainer>
            <Description>
              <p>{activeService.description1}</p>
              <p>{activeService.description2}</p>
            </Description>
          </LeftSide>
          <ServiceListContainer>
            {Service.map((service, index) => (
              <ServiceItem
                key={index}
                onMouseEnter={() => setActiveService(service)}
              >
                {service.head}
                <Underline active={activeService.id === service.id} />
              </ServiceItem>
            ))}
          </ServiceListContainer>
        </ServiceChanging>
      </SectionDiv>
    </>
  );
};

export default ServicePage;

const Description = styled.div`
  p {
    text-align: justify;
  }
`;

const LeftSide = styled.div``;
const ServiceChanging = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: 70% 30%;
  align-items: baseline;
  justify-content: space-between;
  @media (min-width: ${breakpoints.xs}) {
    gap: 30px;
  }
  @media (min-width: ${breakpoints.m}) {
    gap: 35px;
  }
  @media (min-width: ${breakpoints.lg}) {
    gap: 45px;
  }
`;

const ServiceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

const ServiceItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.ashBlack};
  cursor: pointer;
  position: relative;
  padding-bottom: 5px;
  transition: color 0.3s ease-in-out;
  height: fit-content;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 18px;
    padding-bottom: 10px;
  }
  @media (min-width: ${breakpoints.sm}) {
  }
  &:hover {
    color: ${Colors.blue};
  }
  a {
    font-size: 16px;
    text-decoration: none;
    margin: 0;
    padding-bottom: 10px;
    color: black !important;
    @media (min-width: ${breakpoints.xs}) {
      font-size: 18px;
    }
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: ${({ active }) => (active ? "60%" : "0%")};
  height: 3px;
  background-color: ${Colors.blue};
  transition: width 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 300px;

  border-radius: 20px;
  @media (min-width: ${breakpoints.xs}) {
    height: 330px;
  }
  @media (min-width: ${breakpoints.sm}) {
    height: 380px;
  }
  @media (min-width: ${breakpoints.m}) {
    height: 380px;
  }
  @media (min-width: ${breakpoints.md}) {
    height: 380px;
  }
  @media (min-width: ${breakpoints.lg}) {
    height: 400px;
  }
  img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: contain;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
