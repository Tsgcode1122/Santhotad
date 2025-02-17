import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import ceo from "../TeamImages/ceo.png";

import project from "../TeamImages/project.png";

import civil from "../TeamImages/civil.png";
import manager from "../TeamImages/manager.png";

import { breakpoints } from "../FixedComponent/BreakPoints";
import SectionDiv from "../FixedComponent/SectionDiv";

const MeetTeamSmall = () => {
  return (
    <SectionDiv>
      <Head>
        <h4>Meet Our Team</h4>
        <Line />
      </Head>
      <Container>
        <Image>
          <img src={ceo} />
        </Image>
        <Image>
          <img src={civil} />
        </Image>
        <Image>
          <img src={project} />
        </Image>
        <Image>
          <img src={manager} />
        </Image>
      </Container>
    </SectionDiv>
  );
};

export default MeetTeamSmall;

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

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #aaaaaa;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
  align-items: center;
  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  @media (min-width: ${breakpoints.m}) {
    /* padding: 20px 2.5rem 5rem 2.5rem; */
  }
`;

const Image = styled.div`
  img {
    max-width: 100%;
  }
`;
