import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Modal } from "antd"; // Import Ant Design's Modal component
import { Service } from "../Service";
import SectionDiv from "../FixedComponent/SectionDiv";
import ScrollToTop from "../FixedComponent/ScrollToTop";
const ServicepageBig = () => {
  const [activeService, setActiveService] = useState(Service[0]);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  // Function to handle image click and show modal
  const handleImageClick = () => {
    setIsModalVisible(true);
  };

  // Function to handle modal cancel (close)
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <SectionDiv>
        <ServiceChanging>
          <LeftSide>
            <h3>{activeService.head}</h3>
            <ImageContainer onClick={handleImageClick}>
              {" "}
              {/* Add onClick here */}
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

      {/* Modal to show full-size image */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel} // Close the modal when canceling
        footer={null} // Remove default footer with OK/Cancel buttons
        width="80%" // You can adjust width as needed
        style={{
          maxWidth: "900px", // Optional styling for max width of modal
          backdropFilter: "blur(5px)", // Apply the background blur effect
        }}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0, // Remove padding
        }}
      >
        <img
          src={activeService.img}
          alt={activeService.head}
          style={{
            maxWidth: "100%",
            maxHeight: "80vh", // Make sure the image fits within the screen
            objectFit: "contain", // Maintain aspect ratio of image
          }} // Make image fill modal
        />
      </Modal>
    </>
  );
};

export default ServicepageBig;

const Description = styled.div`
  p {
    text-align: justify;
  }
`;

const LeftSide = styled.div`
  h3 {
  }
`;

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
  &:hover {
    color: ${Colors.blue};
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
  width: 100%;
  height: 300px;
  border-radius: 20px;
  cursor: pointer; /* Show pointer on hover to indicate clickable image */

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
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
