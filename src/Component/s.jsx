import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import ceoC from "../TeamImages/ceoc.png";
import ceoB from "../TeamImages/ceob.jpg";
import projectC from "../TeamImages/projc.png";
import projectB from "../TeamImages/projb.png";
import civilB from "../TeamImages/civilb.png";
import civilC from "../TeamImages/civilc.png";
import managerC from "../TeamImages/manc.png";
import managerB from "../TeamImages/manb.png";
import SectionDiv from "../FixedComponent/SectionDiv";

const TeamMember = [
  {
    id: "Ceo",
    mainImg: ceoC,
    blackImg: ceoB,

    contents: [
      {
        name: "Arch. Temitope Adeusi ",
        p1: "is a distinguished architect with nearly two decades of experience in architecture and construction. As Managing Director of Santhotad Concept, a leading Nigerian architectural firm, he delivers innovative and sustainable design solutions nationwide.  Under his leadership, Santhotad Concept thrives as a hub for bespoke, functional, and sustainable designs.",
        p2: "He holds a National Diploma in Architectural Technology from Rufus Giwa Polytechnic and both Bachelor’s and Master’s degrees in Architecture from Obafemi Awolowo University.",
        p3: " ",
        p4: " Previously serving as City Architect in Akure, he managed large-scale public projects. Under his leadership, Santhotad Concept thrives as a hub for bespoke, functinal, and sustainable designs. His visinary approach makes him a  trusted authority in architecture and construction",
      },
    ],
  },
  {
    id: "project",
    mainImg: projectC,
    blackImg: projectB,
    contents: [
      {
        name: "Ojuawo Damilola",
        p1: " is a skilled builder and Project Manager at Santhotad Concept, specializing in building technology and project supervision.",
        p2: "He holds a National Diploma and Higher National Diploma in Building Technology from Federal Polytechnic, Ado-Ekiti.",
        p3: " Since joining Santhotad Concept in 2019, he has played a key role in executing projects, overseeing labor supervision, material management, and construction processes. Known for his hands-on approach and problem-solving skills, he ensures projects are delivered on time, within budget, and to the highest standards.",
        p4: " Committed to innovation and efficiency, he upholds Santhotad Concept’s mission of delivering exceptional architectural and construction solutions in Nigeria.",
      },
    ],
  },
  {
    id: "civil",
    mainImg: civilC,
    blackImg: civilB,

    contents: [
      {
        name: "Engr. Oludele M.T.",
        p1: "is the Civil Engineer at Santhotad Concept, bringing expertise and a commitment to excellence. ",
        p2: "He holds a B.Sc. in Civil Engineering from Obafemi Awolowo University and an M.Sc. from the University of Ibadan. ",
        p3: " A registered COREN engineer and NSE member, he ensures all projects meet top industry standards for safety and durability. His technical acumen and innovative solutions have been instrumental in Santhotad Concept’s success. ",
        p4: " Dedicated to precision and collaboration, he continues to drive the firm’s mission for excellence in architecture and construction.cture from Obafemi Awolowo University.",
      },
    ],
  },
  {
    id: "manager",
    mainImg: managerC,
    blackImg: managerB,

    contents: [
      {
        name: "Oluwayemi Adeusi,",
        p1: "General Manager of Santhotad Concept, brings over a decade of expertise in sales administration, customer relations, and management. Her leadership and strategic vision have been key to the company’s growth.   ",
        p2: "She holds an ND and HND from Federal Polytechnic, Ado-Ekiti, a PGD in Computer Science from FUTA, and an MBA from Ekiti State University, strengthening her skills in business operations and leadership.",
        p3: " Before joining Santhotad Concept, she gained valuable experience at Tata Nigeria Limited and Elizade Motors in sales and customer relations.",
        p4: " As General Manager, she drives innovation, process optimization, and client satisfaction, reinforcing the company’s reputation for excellence. Passionate about sustainable architecture, she continues to position Santhotad Concept as a trusted industry leader.",
      },
    ],
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
                {team.contents.map((content, index) => (
                  <div key={index}>
                    <p>
                      <strong>{content.name}</strong> {content.p1}
                    </p>
                    <p>{content.p2}</p>
                    <p>{content.p3}</p>
                    <p>{content.p4}</p>
                  </div>
                ))}
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
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #f9f9f9;
  }
`;

const ImageWrapper = styled.div`
  width: 170px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  max-width: ${({ isVisible }) => (isVisible ? "330px" : "0px")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(1)")};
  transition:
    max-width 0.4s ease-in-out,
    opacity 0.4s ease-in-out,
    transform 0.3s ease-in-out;
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
  strong {
    font-size: 16px;
    color: ${Colors.black};
  }
  p {
    font-size: 14px;
    margin: 0;
    color: ${Colors.black};
    margin-top: 5px;
  }
`;
