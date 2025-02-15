import React from "react";
import styled from "styled-components";
import { breakpoints } from "./BreakPoints";

const SectionContainer = styled.div`
  /* margin: 0 auto; */
  padding: 2rem 1.5rem;
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2.5rem;
  }
  @media (min-width: ${breakpoints.m}) {
    padding: 10px 40px;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: 2rem 3rem;
    /* max-width: 1100px; */
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1150px;
    padding: 2rem 0rem;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xl}) {
  }

  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1500px;
  }
`;

const SectionDiv = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default SectionDiv;
