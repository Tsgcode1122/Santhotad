import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import ceoC from "../TeamImages/ceoc.png";
import ceoB from "../TeamImages/ceob.png";
import projectC from "../TeamImages/projc.png";
import projectB from "../TeamImages/projb.png";
import civilB from "../TeamImages/civilb.png";
import civilC from "../TeamImages/civilc.png";
import managerC from "../TeamImages/manc.png";
import managerB from "../TeamImages/manb.png";

const TeamMember = [
  {
    id: "Ceo",
    mainImg: ceoC,
    blackImg: ceoB,

    contents: [
      {
        name: "Arch. Temitope Adeusi ",
        p1: "is a distinguished architect with nearly two decades of experience in architecture and construction. As Managing Director of Santhotad Concept, a leading Nigerian architectural firm, he delivers innovative and sustainable design solutions nationwide.  Under his leadership, Santhotad Concept thrives as a hub for bespoke, functional, and sustainable designs. His visionary approach makes him a trusted authority in architecture and construction",
        p2: "He holds a National Diploma in Architectural Technology from Rufus Giwa Polytechnic and both Bachelor’s and Master’s degrees in Architecture from Obafemi Awolowo University.",
        p3: " A Fellow of esteemed professional associations, he is known for excellence in private, commercial, and public projects.",
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
  const [activeTeam, setActiveTeam] = useState(TeamMember[0]);

  return (
    <>
      <Heading>
        <h4>Meet Our Team</h4>
        <Line />
      </Heading>
      <Container>
        {TeamMember.map((team, index) => (
          <TeamContainer
            key={index}
            onMouseEnter={() => setActiveTeam(team)}
            isActive={activeTeam.id === team.id}
          >
            <BlackImage isActive={activeTeam.id === team.id}>
              <img
                src={activeTeam.id === team.id ? team.mainImg : team.blackImg}
                alt={team.id}
              />
            </BlackImage>
            <Content isActive={activeTeam.id === team.id}>
              <Description>
                {team.contents.map((content, idx) => (
                  <Writeup key={idx}>
                    <p>
                      <strong>{content.name}</strong> {content.p1}
                    </p>
                    <p>{content.p2}</p>
                    <p>{content.p3}</p>
                    <p>{content.p4}</p>
                  </Writeup>
                ))}
              </Description>
            </Content>
          </TeamContainer>
        ))}
      </Container>
    </>
  );
};

export default MeetTeam;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
  }
`;

const Line = styled.div`
  width: 900px;
  height: 1px;
  background: #aaaaaa;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px 60px;
  align-items: center;
`;

const TeamContainer = styled.div`
  display: flex;

  gap: 15px;
  cursor: pointer;
  padding: ${(props) => (props.isActive ? "10px" : "none")};
  border: ${(props) => (props.isActive ? "1.5px solid #B7B7B7 " : "none")};
  border-radius: ${(props) => (props.isActive ? "10px" : "none")};
  background: ${(props) => (props.isActive ? "F9F9F9" : "none")};
`;

const BlackImage = styled.div`
  height: ${(props) => (props.isActive ? "410px" : "440px")};

  transition: transform 50.1s ease-in-out;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.001);
  }
`;

const Content = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};

  gap: 20px;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-10px)"};
  transition:
    opacity 9.1s ease-in-out,
    transform 4.4s ease-in-out;
`;

const Description = styled.div`
  width: 350px;
`;

const Writeup = styled.div`
  p {
    font-weight: 100 !important;
    font-size: 14px;
    line-height: 1.3;
    color: ${Colors.ashBlack};
  }
`;
