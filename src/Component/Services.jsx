import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import f3 from "../Images/f31.jpg";
import f31 from "../Images/f32.jpg";
import f32 from "../Images/f33.jpg";
import f33 from "../Images/f34.jpg";
import f34 from "../Images/f31.jpg";

const ServiceList = [
  { id: "architect", head: "Architectural Design", img: f3 },
  { id: "building", head: "Building Construction", img: f31 },
  { id: "project", head: "Project Management", img: f32 },
  { id: "interior", head: "Interior Design & Space Planning", img: f33 },
  { id: "renovation", head: "Renovation & Remodeling", img: f34 },
  { id: "consultation", head: "Consultation Services", img: f3 },
];

const Services = () => {
  const [activeService, setActiveService] = useState(ServiceList[0]);

  return (
    <>
      <Heading>
        <h4>Services</h4>
        <Line />
        <CtaButton>
          Read More
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <Content>
        <h1>Build to Inspire, Design to Last</h1>
        <p>
          At Santhotad Concepts, we deliver tailored services that blend
          innovation, and client satisfaction to meet your unique needs.
        </p>
      </Content>
      <ServiceChanging>
        <ServiceListContainer>
          {ServiceList.map((service, index) => (
            <ServiceItem
              key={index}
              onMouseEnter={() => setActiveService(service)}
            >
              {service.head}
              <Underline active={activeService.id === service.id} />
            </ServiceItem>
          ))}
        </ServiceListContainer>
        <ImageContainer>
          <img src={activeService.img} alt={activeService.head} />
        </ImageContainer>
      </ServiceChanging>
    </>
  );
};

export default Services;

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

const ServiceChanging = styled.div`
  display: flex;
  align-items: center;
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
  height: 320px;
  width: 600px;
  border-radius: 20px;
  img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: contain;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
