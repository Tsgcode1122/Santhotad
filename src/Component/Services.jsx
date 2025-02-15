import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Service } from "../Service";
import SectionDiv from "../FixedComponent/SectionDiv";

const Services = () => {
  const [activeService, setActiveService] = useState(Service[0]);

  return (
    <SectionDiv>
      <Heading>
        <h4>Services</h4>
        <Line />
        <CtaButton to="/services/architect">
          See All
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
          {Service.map((service, index) => (
            <ServiceItem
              key={index}
              onMouseEnter={() => setActiveService(service)}
            >
              {" "}
              <Link key={index} to={`/services/${service.id}`}>
                {service.head}
              </Link>
              <Underline active={activeService.id === service.id} />
            </ServiceItem>
          ))}
        </ServiceListContainer>
        <ImageContainer>
          <img src={activeService.img} alt={activeService.head} />
        </ImageContainer>
      </ServiceChanging>
    </SectionDiv>
  );
};

export default Services;

const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px; /* Adjust for spacing */

  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
    white-space: nowrap; /* Prevents text wrapping */
  }
`;

const Line = styled.div`
  flex-grow: 1;
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
  display: grid;
  padding: 20px 0 2rem;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    /* padding: 20px 1.5rem; */
  }
  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: 1fr 1fr;
  }
  h1 {
    font-size: 30px;

    margin: 0;
    line-height: 0.9;
    padding: 0;
    @media (min-width: ${breakpoints.xs}) {
      font-size: 40px;
      max-width: 570px;
    }
    @media (min-width: ${breakpoints.m}) {
      max-width: 370px;
      line-height: 1.1;
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    padding: 0;
  }
`;

const ServiceChanging = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 10px;
`;

const ServiceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  /* position: absolute; */
  bottom: 0;
  left: 0;
  margin-top: 7px;
  width: ${({ active }) => (active ? "60%" : "0%")};
  height: 3px;
  background-color: ${Colors.blue};
  transition: width 0.3s ease-in-out;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 18px;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 300px;
  width: 500px;
  border-radius: 20px;
  @media (min-width: ${breakpoints.xs}) {
    height: 330px;
    width: 500px;
  }
  img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: contain;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
