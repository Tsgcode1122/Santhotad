import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Images } from "../PagesImages";
import { Link } from "react-router-dom";
import SectionDiv from "../FixedComponent/SectionDiv";

const OurProjects = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle scrolling left
  const scrollLeft = () => {
    if (sliderRef.current && currentIndex > 0) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle scrolling right
  const scrollRight = () => {
    if (sliderRef.current && currentIndex < Images.length - 1) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Track scrolling to update button states
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const imageWidth = auto;
        const index = Math.round(scrollLeft / imageWidth);
        setCurrentIndex(index);
      }
    };

    const slider = sliderRef.current;
    if (slider) slider.addEventListener("scroll", handleScroll);
    return () => {
      if (slider) slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProjectDiv>
        <Head>
          <Heading>Our Projects</Heading>
          <ControlButton>
            <Button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              $isDisabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </Button>
            <Button
              onClick={scrollRight}
              disabled={currentIndex === Images.length - 1}
              $isDisabled={currentIndex === Images.length - 1}
            >
              <FaArrowRight />
            </Button>
          </ControlButton>
        </Head>
      </ProjectDiv>

      <SliderContainer>
        <ImageSlider ref={sliderRef}>
          {Images.map((image, index) => (
            <ImageContain key={index}>
              <Link key={index} to={`/projects/${image.id}`}>
                <img src={image.img} alt={`Project ${index + 1}`} />
              </Link>
            </ImageContain>
          ))}
        </ImageSlider>
      </SliderContainer>
    </>
  );
};

export default OurProjects;

const ProjectDiv = styled.div`
  @media screen and (max-width: 320px) {
    padding: 0.5rem 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.5rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.5rem 1.2rem;
  }
  padding: 0.5rem 1.5rem;
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: 0.5rem 2.5rem;
  }
  @media (min-width: ${breakpoints.m}) {
    padding: 10px 40px;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: 0.5rem 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1150px;
    padding: 0.5rem 0rem;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1400px;
    padding: 0.5rem 0rem;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xxl}) {
  }
`;

const Head = styled.div`
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

const Heading = styled.h2`
  flex-grow: 1;
  font-weight: bold;
`;

const ControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 30px;

  @media (min-width: ${breakpoints.xs}) {
    gap: 15px;
    height: 40px;
  }
`;

const Button = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  height: ${(props) => (props.$isDisabled ? "25px" : "30px")};
  width: ${(props) => (props.$isDisabled ? "25px" : "30px")};
  border: 1px solid
    ${(props) => (props.$isDisabled ? Colors.ashBlack : Colors.blue)};
  background: transparent;
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease-in-out;
  @media (min-width: ${breakpoints.xs}) {
    height: ${(props) => (props.$isDisabled ? "30px" : "40px")};
    width: ${(props) => (props.$isDisabled ? "30px" : "40px")};
  }
  svg {
    color: ${(props) => (props.$isDisabled ? Colors.ashBlack : Colors.blue)};
    font-size: ${(props) => (props.$isDisabled ? "14px" : "18px")} !important;
  }
`;

/* Wrapper to constrain visible images */
const SliderContainer = styled.div`
  overflow: hidden;
  padding: 20px 0;
  position: relative;
`;

const ImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContain = styled.div`
  flex: 0 0 auto;
  margin-right: 2px;

  scroll-snap-align: start;
  overflow: hidden;
  img {
    max-width: 100%;

    height: 300px;
    transition: transform 0.3s ease-in-out;
    @media screen and (max-width: 320px) {
      height: 200px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 220px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 240px;
    }
    @media (min-width: ${breakpoints.xs}) {
      height: 450px;
    }
  }

  &:hover img {
    transform: scale(1.08);
  }
`;
