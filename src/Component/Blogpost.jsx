import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import blogM from "../TeamImages/blogmain.png";
import blog1 from "../TeamImages/blog2.png";
import blog2 from "../TeamImages/blog1.png";
import blog3 from "../TeamImages/blog3.png";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Blogpost = () => {
  return (
    <Major>
      <Heading>
        <h4>Our Blog Posts</h4>
        <Line />
        <CtaButton>
          View All
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <Container>
        <MainFeature>
          <ImageContainer>
            <img src={blogM} />
          </ImageContainer>
          <Content>
            <span>
              <Topic>
                {" "}
                Revolutionizing Construction: Santhotad Concept to Introduce
                'KIAKIA' AI-Powered Humanoid to Transform the Industry{" "}
              </Topic>
              <Author>-Temitope Adeusi</Author>
            </span>
            <Date>January 28, 2025</Date>
          </Content>
        </MainFeature>
        <SideContent>
          <Intro>More News Updates</Intro>
          <Divider />
          <One>
            <img src={blog1} />

            <OneSide>
              <AuthorDate>
                Craig Bater - <span> 27 Dec 2020 </span>
              </AuthorDate>
              <TopicMini>
                Futuristic Skyscraper Design Sets New Sustainability Benchmark
              </TopicMini>
            </OneSide>
          </One>
          <Divider />
          <One>
            <img src={blog2} />
            <OneSide>
              <AuthorDate>
                Craig Bater - <span> 17 May 2024 </span>
              </AuthorDate>
              <TopicMini>
                Architects Battle Climate Change with Energy-Positive Buildings
              </TopicMini>
            </OneSide>
          </One>
          <Divider />
          <One>
            <img src={blog3} />
            <OneSide>
              <AuthorDate>
                Craig Bater - <span> 27 Dec 2020 </span>
              </AuthorDate>
              <TopicMini>
                Success in Urban Planning Comes from Learning from Past Mistakes
              </TopicMini>
            </OneSide>
          </One>
        </SideContent>
      </Container>
    </Major>
  );
};

export default Blogpost;

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

const CtaButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${Colors.blue};
  gap: 3px;
  svg {
    transform: rotate(-45deg);
    color: ${Colors.blue};
  }
`;

const Major = styled.div`
  background: #f7f7f7;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  margin: 30px 60px 60px 60px;
  max-width: 800;
  display: grid;
  gap: 40px;
  grid-template-columns: 70% 30%;
`;
const ImageContainer = styled.div`
  max-width: 360px;
  /* max-height: 280px; */
  img {
    max-width: 100%;

    height: 260px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const MainFeature = styled.div`
  background: ${Colors.white};
  border-radius: 10px;
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Topic = styled.h3`
  color: ${Colors.blue};
  font-size: 22px;
  line-height: 1.4;
  max-width: 380px;
  font-weight: 500;
  margin: 0;
`;

const Author = styled.p`
  color: ${Colors.blue};
`;
const Date = styled.p`
  color: ${Colors.ashBlack};
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Intro = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
const Divider = styled.div`
  height: 1px;
  width: 300px;
  background: ${Colors.ashBlack};
`;

const One = styled.div`
  display: flex;
  gap: 10px;
  img {
    max-width: 100%;
    height: 60px;
  }
`;

const AuthorDate = styled.p`
  color: black;
  margin: 0;
  font-size: 14px;
  padding: 0;
  span {
    color: #8d8d8d !important;
  }
`;

const TopicMini = styled.p`
  margin: 0;
  padding: 8px 0 2px 0;
  line-height: 1.2;
`;
const OneSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
