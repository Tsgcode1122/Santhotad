import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Blogpost = () => {
  const [posts, setPosts] = useState([]);

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
      }
    };

    fetchPosts();
  }, []);

  return (
    <Major>
      <Heading>
        <h4>Our Blog Posts</h4>
        <Line />
        <CtaButton to="/blog">
          View All
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <Container>
        {posts.length > 0 && (
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
        )}
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
