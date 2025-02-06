import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Service } from "../Service";

const ServicePage = () => {
  const [activeService, setActiveService] = useState(Service[0]);

  return (
    <>
      {/* <Heading>
        <h4>Services</h4>
        <Line />
      </Heading> */}

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
    </>
  );
};

export default ServicePage;

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

const Description = styled.div`
  max-width: 730px;
  p {
    text-align: justify;
  }
`;

const Content = styled.div`
  padding: 20px 80px;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 50px;
    max-width: 360px;
    margin: 0;
    line-height: 0.9;
    padding: 0;
  }

  p {
    margin: 0;
    line-height: 1.5;
    padding: 0;
    font-size: 18px;
  }
`;

const LeftSide = styled.div``;
const ServiceChanging = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  /* gap: 0px; */
  padding: 10px 80px 40px 80px;
`;

const ServiceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

const ServiceItem = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${Colors.ashBlack};
  cursor: pointer;
  position: relative;
  padding-bottom: 5px;
  transition: color 0.3s ease-in-out;
  height: fit-content;
  &:hover {
    color: ${Colors.blue};
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  /* text-decoration:block;
  margin:20px;
  border:10px solid red;
  grid-template-columns: : 1fr 1fr ;
  margin-top: 600px; */
  width: ${({ active }) => (active ? "60%" : "0%")};
  height: 3px;
  background-color: ${Colors.blue};
  transition: width 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 380px;
  width: 720px;
  border-radius: 20px;
  img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: contain;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
