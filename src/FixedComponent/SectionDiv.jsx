import React from "react";
import styled from "styled-components";
import { breakpoints } from "./BreakPoints";

const SectionContainer = styled.div`
  /* margin: 0 auto; */
  padding: 2rem 1.5rem;
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.sm}) {
  }
  @media (min-width: ${breakpoints.m}) {
  }
  @media (min-width: ${breakpoints.md}) {
  }

  @media (min-width: ${breakpoints.lg}) {
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
