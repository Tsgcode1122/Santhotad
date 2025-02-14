import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Images } from "../PagesImages";
import { Link } from "react-router-dom";
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

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 1rem;
  justify-content: space-between;
  @media (min-width: ${breakpoints.xs}) {
    padding: 10px 60px;
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
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 34px;
  }
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
    font-size: ${(props) => (props.$isDisabled ? "14px" : "18px")};
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
    @media (min-width: ${breakpoints.xs}) {
      height: 450px;
    }
  }

  &:hover img {
    transform: scale(1.08);
  }
`;
