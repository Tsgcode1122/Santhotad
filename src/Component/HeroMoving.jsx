import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import b1 from "../Images/l3.png";
import b2 from "../Images/l2.png";
import b3 from "../Images/l1.png";
import b4 from "../Images/l4.png";
import b5 from "../Images/l5.png";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";
const HeroMoving = () => {
  const items = [
    { img: b2 },
    { img: b1 },
    { img: b3 },
    { img: b4 },
    { img: b5 },
  ];

  const repeatedItems = Array.from({ length: 20 }).flatMap(() => items);

  return (
    <Container>
      <MiniIntro>Endorsed by leading brands and emerging startups</MiniIntro>
      <ImageWrapper>
        <MovingImage
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <ImageContainer>
            {repeatedItems.map((item, index) => (
              <Item key={index}>
                <img src={item.img} alt={item.text} />
                {item.text}
              </Item>
            ))}
          </ImageContainer>
        </MovingImage>
      </ImageWrapper>
    </Container>
  );
};

export default HeroMoving;

const Container = styled.div`
  padding: 10px 0 40px 2rem;
  @media (min-width: ${breakpoints.xs}) {
    padding: 10px 0 40px 2rem;
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
const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 5px 0;
  position: relative;
`;
const MiniIntro = styled.p`
  text-align: center;
  font-size: 16px;
  color: #bcbcbc;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 16px;
  }
`;

const MovingImage = styled(motion.div)`
  display: flex;
  width: 100%;
  /* position: absolute; */
  left: 0;
  top: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (min-width: ${breakpoints.xs}) {
    gap: 30px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  color: black;
  min-width: 100px;

  img {
    max-width: 100%;
    height: 30px;

    @media screen and (max-width: 320px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 30px;
      min-width: 30px;
    }
  }
`;
