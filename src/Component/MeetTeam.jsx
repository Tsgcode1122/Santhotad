import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import ceoC from "../TeamImages/ceoCC.png";
import ceoB from "../TeamImages/ceob.jpg";
import projectC from "../TeamImages/projectCC.png";
import projectB from "../TeamImages/projectBB.png";
import civilB from "../TeamImages/civilb.png";
import civilC from "../TeamImages/civilCC.png";
import managerC from "../TeamImages/managCC.png";
import managerB from "../TeamImages/manb.png";
import message from "../TeamImages/ceobio.png";
import message1 from "../TeamImages/message1.png";
import message2 from "../TeamImages/message2.png";
import message3 from "../TeamImages/message3.png";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";

const TeamMember = [
  {
    id: "Ceo",
    mainImg: ceoC,
    blackImg: ceoB,

    contents: message,
  },
  {
    id: "project",
    mainImg: projectC,
    blackImg: projectB,
    contents: message1,
  },
  {
    id: "civil",
    mainImg: civilC,
    blackImg: civilB,

    contents: message2,
  },
  {
    id: "manager",
    mainImg: managerC,
    blackImg: managerB,

    contents: message3,
  },
];

const MeetTeam = () => {
  const [activeTeam, setActiveTeam] = useState(TeamMember[0].id); // Default to first image
  const [lastHovered, setLastHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveTeam(id);
    setLastHovered(id);
  };

  const handleMouseLeave = () => {
    setActiveTeam(lastHovered || TeamMember[0].id);
  };

  return (
    <SectionDiv>
      <Head>
        <h4>Meet Our Team</h4>
        <Line />
      </Head>
      <Container>
        {TeamMember.map((team, index) => (
          <TeamItem
            key={index}
            onMouseEnter={() => handleMouseEnter(team.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <ImageWrapper>
              <img
                src={activeTeam === team.id ? team.mainImg : team.blackImg}
                alt={team.id}
              />
            </ImageWrapper>

            {/* Content - Expands smoothly beside image */}
            <Content isVisible={activeTeam === team.id}>
              <ContentInner>
                <img
                  src={team.contents}
                  alt={team.id}
                  height={
                    index === 2 ? "300px" : index === 0 ? "450px" : "400px"
                  }
                />
              </ContentInner>
            </Content>
          </TeamItem>
        ))}
      </Container>
    </SectionDiv>
  );
};

export default MeetTeam;

// Styled Components
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
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
`;

const TeamItem = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 1px;
  cursor: pointer;
  background: #f9f9f9;

  padding: 10px;
  border-radius: 20px;
  transition: background 0.9s ease-in-out;
  &:hover {
    background: #f9f9f9;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  width: ${({ isVisible }) => (isVisible ? "280px" : "0px")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(1)")};
  transition:
    width 0.4s ease-in-out,
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out;
  overflow: hidden;
  strong {
    font-size: 16px;
    color: ${Colors.black};
  }
  p {
    font-size: 14px;
    color: ${Colors.black};
    margin-top: 5px;
  }
`;
const ContentInner = styled.div`
  padding: 15px;

  img {
    max-width: 100%;
    height: ${({ height }) => height};

    /* @media (min-width: ${breakpoints.m}) {
      height: ${({ height }) => (height === "400px" ? "250px" : "200px")};
    } */

    /* @media (min-width: ${breakpoints.lg}) {
      height: ${({ height }) => (height === "4000px" ? "350px" : "300px")};
    } */
  }
`;
