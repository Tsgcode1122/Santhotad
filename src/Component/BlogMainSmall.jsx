import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Spin } from "antd"; // Import Ant Design spinner
import { breakpoints } from "../FixedComponent/BreakPoints";

const BlogMainSmall = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://santhotad.onrender.com/api/blogs/getBlogs",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2; // 20% from top

      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Major>
        {loading ? ( // Show spinner while loading
          <LoaderContainer>
            <Spin size="large" />
            <p>Loading blog posts...</p>
          </LoaderContainer>
        ) : posts.length > 0 ? (
          <Container>
            <Main>
              {posts.slice(0, 2).map((post, index) => (
                <React.Fragment key={index}>
                  <MainFeature>
                    <ImageContainer>
                      <img src={post.imagesUrl} alt={post.imagesAlt} />
                    </ImageContainer>
                    <Content>
                      <Topic>
                        {post.title}: {post.metaDescription}
                      </Topic>
                      <span>
                        <Author>-{post.author}</Author>
                        <Date>{post.formattedDate}</Date>
                      </span>
                    </Content>
                  </MainFeature>
                  <>{index < 1 && <Divider />}</>
                </React.Fragment>
              ))}
            </Main>

            <SideContent>
              <Divider2 />
              <Intro>More News Updates</Intro>

              {posts.slice(2).map((post, index) => (
                <React.Fragment key={index}>
                  <One>
                    <img src={post.imagesUrl} alt={post.imagesAlt} />
                    <OneSide>
                      <AuthorDate>
                        {post.author} - <span>{post.formattedDate}</span>
                      </AuthorDate>
                      <TopicMini>
                        {post.title}: {post.metaDescription}
                      </TopicMini>
                    </OneSide>
                  </One>
                  <Divider2 />
                  {/* {index !== post.length - 1 && (
                    <p>
                   
                    </p>
                  )} */}
                </React.Fragment>
              ))}
            </SideContent>
          </Container>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            No blog posts yet.
          </p>
        )}
      </Major>
    </>
  );
};

export default BlogMainSmall;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }
`;

const Major = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;
const Container = styled.div`
  justify-content: center;
  gap: 50px;
  display: grid;
`;
const ImageContainer = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: 10px;
  @media (min-width: 600px) {
    height: 100%;
  }
  img {
    max-width: 100%;

    object-fit: cover;
    border-radius: 10px;
  }
`;

const MainFeature = styled.div`
  border-radius: 10px;
  display: grid;
  gap: 10px;

  overflow: hidden;

  @media (min-width: ${breakpoints.sm}) {
    background: ${Colors.white};
    padding: 20px;
    grid-template-columns: 45% 55%;
  }
  span {
    margin-top: -10px;
    display: flex;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: flex;
    justify-content: space-between;
    @media (min-width: 600px) {
      flex-direction: column;
    }
  }
`;
const Topic = styled.h5`
  color: black;

  line-height: 1.4;
  font-weight: 500;
  margin: 0;
  @media (min-width: ${breakpoints.xs}) {
    max-width: 330px;
    font-size: 19px;
  }
`;

const Author = styled.p`
  color: black;
`;
const Date = styled.p`
  color: ${Colors.ashBlack};
`;

const SideContent = styled.div`
  overflow-y: auto;
  border: 1.5px solid #e7e6e6;
  flex-direction: column;
  gap: 10px;
  background: #f3f2f2;
  border-radius: 10px;
  padding: 10px;
  max-height: 60vh;
  display: flex;
  max-width: 80%;
  @media screen and (max-width: 320px) {
    max-width: 100%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 100%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 100%;
  }
  flex-direction: column;
  gap: 16px;
  &::-webkit-scrollbar {
    margin-left: 10px !important;
    width: 8px;
    position: absolute !important;
    border: 1px solid #f0f0f0;
    padding: 1.1px;
    border-radius: 5px;
    height: 70vh !important;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #d5d5d5;
    margin-left: 10px !important;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin-left: 10px !important;
  }
  @media screen and (max-width: 320px) {
    max-width: 100%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    max-width: 100%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    max-width: 100%;
  }
`;
const Intro = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin-top: -20px;
  background: #8d8d8d;
`;
const Divider2 = styled.div`
  height: 1px;
  width: 100%;

  background: #8c8c8c !important;
`;

const One = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #8c8c8c;
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
  font-size: 12px;
`;
const OneSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
