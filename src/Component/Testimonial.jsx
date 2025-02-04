import React, { useState } from "react";
import styled from "styled-components";
import f3 from "../Images/f31.jpg";
import f2 from "../Images/f32.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation

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
      <Intro>
        Hear what our clients have to say about their experience working with
        us.
      </Intro>

      <Slider>
        <ArrowButton onClick={prevTestimonial}>
          <FaChevronLeft />
        </ArrowButton>

        <ImageContainer>
          <img src={img} alt={name} />
        </ImageContainer>

        <Writeup>
          <Heading>{heading}</Heading>
          <Content>{content}</Content>
          <RecommenderName>
            {name}, <Who>{who}</Who>
            <Rating>⭐ {rating}</Rating>
          </RecommenderName>
        </Writeup>

        <ArrowButton onClick={nextTestimonial}>
          <FaChevronRight />
        </ArrowButton>
      </Slider>
    </>
  );
};

export default Testimonial;

const Intro = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  max-width: 800px;
  margin: auto;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #d0ad5b;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Writeup = styled.div`
  flex: 1;
  text-align: left;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
`;

const RecommenderName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #222;
`;

const Who = styled.span`
  font-style: italic;
  font-weight: normal;
  color: #777;
`;

const Rating = styled.span`
  display: block;
  color: #d0ad5b;
  font-size: 1.2rem;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #d0ad5b;
  transition: 0.3s;

  &:hover {
    color: #9e7a2c;
  }
`;
