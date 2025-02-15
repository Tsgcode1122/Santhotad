import React, { useState } from "react";
import styled from "styled-components";
import f1 from "../ProjectImg/shaped1.png";
import f2 from "../ProjectImg/shape2.png";
import f3 from "../ProjectImg/shape3.png";

import { breakpoints } from "../FixedComponent/BreakPoints";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Colors } from "../Colors/ColorComponent";
import { StarFilled } from "@ant-design/icons";
import SectionDiv from "../FixedComponent/SectionDiv";

const testimonials = [
  {
    id: "firstTestimony",
    img: f2,
    heading: "Exceptional Service from start to finish!",
    content:
      "Santhotad Concepts turned our vision into reality with precision and creativity. Their attention to details and professionalism are unmatched.",
    name: "A. Johnson",
    who: "Homeowner",
    rating: "5.0",
  },
  {
    id: "secondTestimony",
    img: f3,
    heading: "A seamless experience!",
    content:
      "I was impressed by their dedication and expertise. The team at Santhotad Concepts exceeded my expectations.",
    name: "Emily R.",
    who: "Interior Designer",
    rating: "4.5",
  },
  {
    id: "thirdTestimony",
    img: f1,
    heading: "Top-notch craftsmanship!",
    content:
      "Every detail was carefully executed, making the entire project a success. Highly recommended!",
    name: "Michael B.",
    who: "Business Owner",
    rating: "5.0",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const { img, heading, content, name, who, rating } =
    testimonials[currentIndex];

  return (
    <Container>
      <Line />
      <Intro>
        Hear what our clients have to say about their experience working with
        us.
      </Intro>

      <Slider>
        <ArrowButton onClick={prevTestimonial}>
          <IoIosArrowRoundBack />
        </ArrowButton>

        <ImageContainer>
          <img src={img} alt={name} />
        </ImageContainer>

        <Writeup>
          <Heading>{heading}</Heading>
          <Content>{content}</Content>
          <RecommenderName>
            <div>
              {name}, <Who>{who}</Who>
            </div>
            <Rating>
              {" "}
              <StarFilled /> <Rate>{rating}</Rate>
            </Rating>
          </RecommenderName>
        </Writeup>

        <ArrowButton onClick={nextTestimonial}>
          <IoIosArrowRoundForward />
        </ArrowButton>
      </Slider>
    </Container>
  );
};

export default Testimonial;
const Container = styled.div`
  overflow: hidden;
  padding: 10px 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Line = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  height: 1px;
  background: #aaaaaa;
`;
const Intro = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  max-width: 450px;
  text-align: center;
  display: flex;
  align-self: center;
  margin-top: 30px;
  @media (min-width: ${breakpoints.xs}) {
    margin-top: 30px;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 7px;
  position: relative;
  max-width: 1000px;
  margin: auto;
  @media (min-width: ${breakpoints.xs}) {
    gap: 10px;
    padding: 10px 1rem;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: ${breakpoints.xs}) {
    width: 350px;
    height: 500px;
  }
  img {
    max-width: 100%;
    height: 400px;
    object-fit: contain;
    @media (min-width: ${breakpoints.xs}) {
      height: 480px;
    }
  }
`;

const Writeup = styled.div`
  flex: 1;
  margin-left: -130px;
  text-align: left;
  background: white;

  padding: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  @media (min-width: ${breakpoints.xs}) {
    margin-left: -120px;
  }
`;

const Heading = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  max-width: 250px;
  min-height: 30px;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 16px;
  }
`;

const Content = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: #555;

  margin: 5px 0;
  min-height: 80px;
  @media (min-width: ${breakpoints.xs}) {
    max-width: 250px;
    margin: 10px 0;
    font-size: 1rem;
  }
`;

const RecommenderName = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #222;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 14px;
  }
`;

const Who = styled.span`
  font-weight: normal;
  color: #777;
`;

const Rating = styled.span`
  color: ${Colors.blue};
  font-size: 14px;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 12px;
  }
`;
const Rate = styled.span`
  font-size: 14px;
  color: ${Colors.ashBlack} !important;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 14px;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${Colors.blue};
  transition: 0.3s;
  &:hover {
    color: #232323;
  }
`;
