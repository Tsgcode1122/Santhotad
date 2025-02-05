import React, { useState } from "react";
import styled from "styled-components";
import f3 from "../Images/f31.jpg";
import f2 from "../Images/f32.jpg";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Colors } from "../Colors/ColorComponent";
import { StarFilled } from "@ant-design/icons";

const testimonials = [
  {
    id: "firstTestimony",
    img: f3,
    heading: "Exceptional Service from start to finish!",
    content:
      "Santhotad Concepts turned our vision into reality with precision and creativity. Their attention to details and professionalism are unmatched.",
    name: "A. Johnson",
    who: "Homeowner",
    rating: "5.0",
  },
  {
    id: "secondTestimony",
    img: f2,
    heading: "A seamless experience!",
    content:
      "I was impressed by their dedication and expertise. The team at Santhotad Concepts exceeded my expectations.",
    name: "Emily R.",
    who: "Interior Designer",
    rating: "4.5",
  },
  {
    id: "thirdTestimony",
    img: f3,
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
    <>
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
    </>
  );
};

export default Testimonial;
const Line = styled.div`
  width: 1050px;
  display: flex;
  align-self: center;
  height: 1px;
  background: #aaaaaa;
`;
const Intro = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin-top: 30px;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  /* padding: 20px; */
  position: relative;
  max-width: 1000px;
  margin: auto;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 460px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const Writeup = styled.div`
  flex: 1;
  margin-left: -140px;
  text-align: left;
  background: white;

  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  /* min-height: 190px; */
`;

const Heading = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  max-width: 250px;
  min-height: 30px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 250px;
  margin: 10px 0;
  min-height: 80px;
`;

const RecommenderName = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  color: #222;
  display: flex;
  gap: 80px;
`;

const Who = styled.span`
  /* font-style: italic; */
  font-weight: normal;
  color: #777;
`;

const Rating = styled.span`
  /* display: block; */
  color: ${Colors.blue};
  font-size: 1.2rem;
`;
const Rate = styled.span`
  /* display: block; */
  color: ${Colors.ashBlack} !important;
  font-size: 1.2rem;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${Colors.blue};
  transition: 0.3s;

  &:hover {
    color: #9e7a2c;
  }
`;
