import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import blogM from "../TeamImages/blogmain.png";
import blog1 from "../TeamImages/blog2.png";
import blog2 from "../TeamImages/blog1.png";
import blog3 from "../TeamImages/blog3.png";
const BlogPage = () => {
  return (
    <>
      <Line />
      <Head>
        <h1>What's New?</h1>
        <p>
          Check out our latest blog pposts and stay informed on the newest
          trends, insights, and updates.
        </p>
      </Head>
      <Major>
        <Container>
          <Main>
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
          </Main>
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
                  Architects Battle Climate Change with Energy-Positive
                  Buildings
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
                  Success in Urban Planning Comes from Learning from Past
                  Mistakes
                </TopicMini>
              </OneSide>
            </One>
          </SideContent>
        </Container>
      </Major>
    </>
  );
};

export default BlogPage;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #aaaaaa;
`;
const Head = styled.div`
  display: flex;
  margin: 20px 60px 0 60px;
  justify-content: space-between;

  align-items: center;

  p {
    max-width: 300px;
    line-height: 1.3;
  }
`;
const Major = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  overflow-y: auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Container = styled.div`
  margin: 30px 60px 60px 60px;
  max-width: 1000px;
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
  background: #f5f4f4;
  border: 2px solid #f0f0f0;
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
  color: black;
  font-size: 22px;
  line-height: 1.4;
  max-width: 380px;
  font-weight: 500;
  margin: 0;
`;

const Author = styled.p`
  color: black;
`;
const Date = styled.p`
  color: ${Colors.ashBlack};
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
`;
const Intro = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
const Divider = styled.div`
  height: 1px;
  width: 260px;
  background: #aeaeae;
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
