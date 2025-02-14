import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Service } from "../Service";

const Services = () => {
  const [activeService, setActiveService] = useState(Service[0]);

  return (
    <>
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
    </>
  );
};

export default Services;
const Heading = styled.div`
  display: flex;

  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  gap: 1px;
  @media (min-width: ${breakpoints.xs}) {
    gap: 20px;
  }
  @media (min-width: ${breakpoints.sm}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }

  @media (min-width: ${breakpoints.lg}) {
  }

  @media (min-width: ${breakpoints.xl}) {
  }

  @media (min-width: ${breakpoints.xxl}) {
  }
  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
  }
`;
const Line = styled.div`
  width: calc(60%);
  /* max-width: 200px; */
  height: 1px;
  background: #aaaaaa;
  @media (min-width: ${breakpoints.xs}) {
    width: 900px;
  }
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
  padding: 20px 1rem;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${breakpoints.xs}) {
    padding: 20px 80px;
  }
  h1 {
    font-size: 30px;

    margin: 0;
    line-height: 0.9;
    padding: 0;
    @media (min-width: ${breakpoints.xs}) {
      font-size: 50px;
      max-width: 270px;
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
  padding: 10px 1rem 60px 1rem;
  @media (min-width: ${breakpoints.xs}) {
    padding: 10px 80px 40px 80px;
  }
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
  }
  &:hover {
    color: ${Colors.blue};
  }
  a {
    font-size: 14px;
    text-decoration: none;
    margin: 0;
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
  width: 500px;
  border-radius: 20px;
  @media (min-width: ${breakpoints.xs}) {
    height: 320px;
    width: 600px;
  }
  img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: contain;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
