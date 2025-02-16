import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { breakpoints } from "../FixedComponent/BreakPoints";
import SectionDiv from "../FixedComponent/SectionDiv";

const Blogpost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5009/api/blogs/getBlogs",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchPosts();
  }, []);

  return (
    <Major>
      <SectionDiv>
        <Heading>
          <h4>Our Blog Posts</h4>
          <Line />
          <CtaButton to="/blog">
            View All
            <ArrowDownOutlined />
          </CtaButton>
        </Heading>
        <Container>
          {loading ? (
            <LoadingContainer>
              <Spinner />
              <p>Loading posts...</p>
            </LoadingContainer>
          ) : posts.length > 0 ? (
            <>
              <MainFeature>
                <ImageContainer>
                  <img src={posts[0]?.imagesUrl} alt={posts[0]?.imagesAlt} />
                </ImageContainer>
                <Content>
                  <span>
                    <Topic>
                      {posts[0]?.title}: {posts[0]?.metaDescription}
                    </Topic>
                    <Author>- {posts[0]?.author}</Author>
                  </span>
                  <Date>{posts[0]?.formattedDate}</Date>
                </Content>
              </MainFeature>
              <SideContent>
                <Intro>More News Updates</Intro>
                <Divider />
                {posts.slice(1, 4).map((post, index) => (
                  <React.Fragment key={index}>
                    <One>
                      <img src={post.imagesUrl} alt={post.imagesAlt} />
                      <OneSide>
                        <AuthorDate>
                          {post.author} - <span>{post.formattedDate}</span>
                        </AuthorDate>
                        <TopicMini>
                          {post.title}:{post.metaDescription}
                        </TopicMini>
                      </OneSide>
                    </One>
                    {index < 2 && <Divider />}
                  </React.Fragment>
                ))}
              </SideContent>
            </>
          ) : (
            <p>No blog posts available.</p>
          )}
        </Container>
      </SectionDiv>
    </Major>
  );
};

export default Blogpost;

const Heading = styled.div`
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
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 70% 30%;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  text-align: center;
  color: ${Colors.blue};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${Colors.blue};
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const MainFeature = styled.div`
  background: ${Colors.white};
  border-radius: 10px;
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: 45% 55%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Topic = styled.h3`
  color: ${Colors.blue};
  font-size: 18px;
  line-height: 1.4;
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
  overflow-y: auto;
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
  width: 100%;
  background: ${Colors.ashBlack};
`;

const One = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  img {
    min-width: 90px;
    max-width: 90px;
    height: 70px;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  padding: 8px 0 2px 0;
  flex-wrap: nowrap;
`;

const OneSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
