import React, { useState } from "react";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { ArrowDownOutlined } from "@ant-design/icons";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Colors } from "../Colors/ColorComponent";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Service } from "../Service";
import { Link } from "react-router-dom";

const ServicepageSmall = () => {
  const [selectedService, setSelectedService] = useState(0);

  const toggleFaq = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <>
      <>
        <ContentMain>
          {Service.map((serve, index) => (
            <SectionItem key={index}>
              <Question
                active={selectedService === index}
                onClick={() => toggleFaq(index)}
              >
                <IconWrapper>
                  {selectedService === index ? null : <ArrowDownOutlined />}
                </IconWrapper>
                {serve.head}
              </Question>
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={
                  selectedService === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image>
                  <img src={serve.img} />
                </Image>
                <p>{serve.description1}</p>
                <p>{serve.description2}</p>
              </Answer>
            </SectionItem>
          ))}
        </ContentMain>
      </>
    </>
  );
};

export default ServicepageSmall;
const Content = styled.div`
  display: grid;
  padding: 20px 0 2rem;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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

const ContentMain = styled.div``;
const Question = styled.div`
  color: ${(props) => (props.active ? Colors.blue : "black")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 300;
  position: relative;
  margin-left: ${(props) => (props.active ? "-5px" : "0")};

  &::after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    bottom: -7px;
    margin-left: 0.5rem;
    left: 0 !important;
    width: 100%;

    height: 1px;
    background-color: ${Colors.blue};
  }
`;
const Image = styled.div`
  height: 250px;
  border-radius: 15px;
  margin-top: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 27px;

  p {
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
const SectionItem = styled.div`
  margin-bottom: 1rem;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;

  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
    white-space: nowrap;
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
