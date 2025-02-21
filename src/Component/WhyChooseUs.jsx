import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionContainer>
      <Container ref={sectionRef}>
        <StatsGrid>
          <StatCard>
            <Number>
              {isVisible && <CountUp start={0} end={500} duration={12} />}+
            </Number>
            <Label>Happy Partners</Label>
          </StatCard>
          <StatCard>
            <Number>
              {isVisible && <CountUp start={0} end={100} duration={10} />}+
            </Number>
            <Label>Projects Done</Label>
          </StatCard>
          <StatCard>
            <Number>
              {isVisible && <CountUp start={0} end={10} duration={10} />}+
            </Number>
            <Label>Years of Experience</Label>
          </StatCard>
          <StatCard>
            <Number>
              {isVisible && <CountUp start={0} end={100} duration={10} />}%
            </Number>
            <Label>Satisfaction</Label>
          </StatCard>
        </StatsGrid>
      </Container>
    </SectionContainer>
  );
};

export default WhyChooseUs;

const SectionContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 320px) {
    padding: 1rem 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem 1.2rem;
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2.5rem;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: 2rem 3rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1250px;
    padding: 2rem 0;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 1400px;
    padding: 2rem 0;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  text-align: center;

  width: 100%;
`;

const StatsGrid = styled.div`
  background: white;
  margin-top: -5rem;
  @media screen and (max-width: 320px) {
    margin-top: -3rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: -4rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: -4rem;
  }
  border-radius: 20px;
  justify-content: center;
  gap: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: ${breakpoints.lg}) {
    gap: 30px;
  }
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const StatCard = styled.div`
  padding: 2px;

  @media (min-width: ${breakpoints.lg}) {
    padding: 10px;
  }
  text-align: center;
`;

const Number = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.blue};
  margin: 0;
  @media (min-width: ${breakpoints.md}) {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 36px;
  }
`;

const Label = styled.p`
  font-size: 14px;
  color: black;
  font-weight: 600;
  font-style: italic;

  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 18px;
  }
`;
